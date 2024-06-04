import Post from './Post';
import UserNavBar from './UserNavBar';
import CreatePostModal from './CreatePostModal';

export default function Feed() {
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
        <h1 style={{ marginBottom: '2rem' }}>Feed</h1>
        <hr style={{ width: '100%', zIndex: -1 }} />

        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}
