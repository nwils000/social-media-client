import ProfilePostCard from './ProfilePostCard';
import '../styles/profile-posts.css';
import ProfilePostModal from './ProfilePostModal';
import { useState } from 'react';

export default function ProfilePostsGrid() {
  const [profilePostModal, setProfilePostModal] = useState('none');
  return (
    <div>
      <ProfilePostModal
        profilePostModal={profilePostModal}
        setProfilePostModal={setProfilePostModal}
      />
      <div className="profile-posts-grid">
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
        <ProfilePostCard
          profilePostModal={profilePostModal}
          setProfilePostModal={setProfilePostModal}
        />
      </div>
    </div>
  );
}
