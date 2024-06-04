export default function ProfilePostCard({
  profilePostModal,
  setProfilePostModal,
}) {
  return (
    <>
      <img
        className="profile-post-card"
        src="https://images.pexels.com/photos/24252211/pexels-photo-24252211/free-photo-of-a-table-with-flowers-and-watercolor-paints.jpeg"
        alt=""
        style={{ width: '20rem', height: '20rem', objectFit: 'cover' }}
        onClick={() => {
          profilePostModal === 'none'
            ? setProfilePostModal('block')
            : setProfilePostModal('none');
        }}
      />
    </>
  );
}
