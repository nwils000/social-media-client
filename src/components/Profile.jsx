import ProfilePersonalInfo from './ProfilePersonalInfo';
import UserNavBar from './UserNavBar';
import ProfilePostsGrid from './ProfilePostsGrid';
import CreatePostModal from './CreatePostModal';

export default function Profile() {
  return (
    <>
      <UserNavBar />
      <CreatePostModal />
      <div>
        <ProfilePersonalInfo />
        <ProfilePostsGrid />
      </div>
    </>
  );
}
