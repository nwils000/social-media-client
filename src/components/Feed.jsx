import Post from './Post';
import UserNavBar from './UserNavBar';
import CreatePostModal from './CreatePostModal';
import { ProfileContext } from '../context';
import { useContext, useEffect, useState } from 'react';
import { getFollowingPosts } from '../api';
import SearchProfiles from './SearchProfiles';

export default function Feed() {
  const { profile } = useContext(ProfileContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getFollowingPosts({ profile });
        setPosts(posts);
        console.log('POSTSSSS', posts);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    const intervalId = setInterval(() => {
      fetchPosts();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getFollowingPosts({ profile });
        setPosts(posts);
        console.log('POSTSSSS', posts);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <UserNavBar />
      <CreatePostModal />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'center',
          padding: '2rem',
          width: '80vw',
          margin: 'auto',
          minHeight: '100vh',
        }}
      >
        <SearchProfiles />
        <h1 style={{ marginBottom: '2rem' }}>Feed</h1>
        <hr style={{ width: '100%', zIndex: -1 }} />
        {posts.length > 0 &&
          posts.map((post) => {
            return <Post post={post} />;
          })}
      </div>
    </>
  );
}
