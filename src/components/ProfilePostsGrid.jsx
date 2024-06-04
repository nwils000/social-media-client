import ProfilePostCard from './ProfilePostCard';
import '../styles/profile-posts.css';
import { useState } from 'react';
import ProfilePostModal from './ProfilePostModal';

export default function ProfilePostsGrid() {
  const [modalDisplay, setModalDisplay] = useState('none');

  return (
    <div>
      <ProfilePostModal modalDisplay={modalDisplay} />
      <div className="profile-posts-grid">
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
        <ProfilePostCard
          modalDisplay={modalDisplay}
          setModalDisplay={setModalDisplay}
        />
      </div>
    </div>
  );
}
