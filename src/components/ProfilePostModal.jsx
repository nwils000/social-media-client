import { RxCross2 } from 'react-icons/rx';

export default function ProfilePostModal({
  profilePostModal,
  setProfilePostModal,
}) {
  return (
    <div
      className="profile-post-modal"
      style={{
        display: profilePostModal,
        height: '100vh',
        width: '100vw',
        margin: 'auto',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 3,
      }}
      onClick={() => {
        profilePostModal === 'none'
          ? setProfilePostModal('block')
          : setProfilePostModal('none');
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
    </div>
  );
}
