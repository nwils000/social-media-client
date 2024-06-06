import { useContext, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { updateProfile } from '../api';
import { ProfileContext } from '../context';

export default function EditProfilePostModal({
  setProfilePostModal,
  profilePostModal,
}) {
  const [profileImage, setProfileImage] = useState('');
  const [biography, setBiography] = useState('');
  const { profile } = useContext(ProfileContext);

  return (
    <div
      className="profile-post-modal"
      style={{
        display: 'block',
        height: '100vh',
        width: '100vw',
        margin: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 3,
      }}
      onClick={() => {
        profilePostModal === false
          ? setProfilePostModal(true)
          : setProfilePostModal(false);
      }}
    >
      <RxCross2
        className="cross"
        style={{
          color: 'white',
          fontSize: '2rem',
          position: 'absolute',
          right: '2rem',
          top: '1rem',
        }}
      />
      <div
        style={{
          backgroundColor: 'white',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '32rem',
          height: '39.6rem',
          margin: 'auto',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div style={{ width: '30rem', padding: '1rem' }}>
          <label htmlFor="profileImage">Profile Image:</label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={(e) => {
              setProfileImage(e.target.files[0]);
            }}
          />
          <label htmlFor="biography">Biography:</label>
          <textarea
            id="biography"
            rows="4"
            cols="33"
            placeholder="Your biography..."
            value={biography}
            onChange={(e) => {
              setBiography(e.target.value);
            }}
          />
          <button
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(24, 119, 242, 255)',

              zIndex: 3,
            }}
            onClick={() => {
              profilePostModal === false
                ? setProfilePostModal(true)
                : setProfilePostModal(false);
              updateProfile({ profile, image: profileImage, bio: biography });
            }}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
