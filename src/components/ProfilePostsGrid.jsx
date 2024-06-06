import ProfilePostCard from './ProfilePostCard';
import '../styles/profile-posts.css';
import ProfilePostModal from './ProfilePostModal';
import { useEffect, useState, useContext } from 'react';
import { ProfileContext } from '../context';

export default function ProfilePostsGrid({ profileImSeeing }) {
  const [profilePostModal, setProfilePostModal] = useState(false);
  const [profilePostInfo, setProfilePostInfo] = useState();
  const [thePost, setThePost] = useState(profilePostInfo);
  const { profile } = useContext(ProfileContext);
  let posts = profileImSeeing.posts;

  useEffect(() => {
    setThePost(profile.state.postLookingAt);
    console.log('AFSASFFSAFSAAFS', thePost);
    console.log(
      'AFSASFFSAFSAasdasdadsdasadsdsaAFS',
      profile.state.postLookingAt
    );
  }, [profile.state.postLookingAt]);

  useEffect(() => {
    console.log('PROFILE POST modal', profilePostModal);
  }, [profilePostModal]);
  return (
    <div>
      {profilePostModal && (
        <ProfilePostModal
          thePost={thePost}
          post={profilePostInfo}
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
      )}

      <div className="profile-posts-grid">
        {posts.map((post) => {
          return (
            <ProfilePostCard
              post={post}
              profilePostModal={profilePostModal}
              setProfilePostModal={setProfilePostModal}
              setProfilePostInfo={setProfilePostInfo}
            />
          );
        })}
      </div>
    </div>
  );
}
