import ProfilePersonalInfo from './ProfilePersonalInfo';
import UserNavBar from './UserNavBar';
import ProfilePostsGrid from './ProfilePostsGrid';
import CreatePostModal from './CreatePostModal';
import { useContext, useEffect } from 'react';
// import { getPosts } from '../api';
// import { AuthContext } from '../context';

export default function Profile() {
  // const { auth } = useContext(AuthContext);

  // useEffect(() => {
  //   getPosts({ auth });
  // }, []);

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
