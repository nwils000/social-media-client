import ProfilePersonalInfo from './ProfilePersonalInfo';
import UserNavBar from './UserNavBar';
import ProfilePostsGrid from './ProfilePostsGrid';
import CreatePostModal from './CreatePostModal';
import { useContext, useEffect } from 'react';
import { ProfileContext } from '../context';

export default function Profile() {
  const { profile } = useContext(ProfileContext);
  let profileImSeeing = profile.state.profileImSeeing;

  useEffect(() => {
    console.log('PROFILE TO SEE', profileImSeeing);
  }, []);

  return (
    <>
      <UserNavBar />
      <CreatePostModal />
      <div>
        <ProfilePersonalInfo profileImSeeing={profileImSeeing} />
        <ProfilePostsGrid profileImSeeing={profileImSeeing} />
      </div>
    </>
  );
}
