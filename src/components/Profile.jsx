import ProfilePersonalInfo from './ProfilePersonalInfo';
import UserNavBar from './UserNavBar';
import ProfilePostsGrid from './ProfilePostsGrid';

export default function Profile() {
  return (
    <>
      <UserNavBar />
      <div>
        <ProfilePersonalInfo />
        <ProfilePostsGrid />
      </div>
    </>
  );
}
