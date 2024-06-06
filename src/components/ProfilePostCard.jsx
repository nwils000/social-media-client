import { useContext } from 'react';
import { ProfileContext } from '../context';

export default function ProfilePostCard({
  profilePostModal,
  setProfilePostModal,
  setProfilePostInfo,
  post,
}) {
  const { profile } = useContext(ProfileContext);
  const openModal = async () => {
    try {
      setProfilePostInfo(post);
      setProfilePostModal(true);
    } catch (e) {
      console.log('open modal error', e);
    }
  };
  return (
    <>
      <img
        className="profile-post-card"
        src={`http://127.0.0.1:8000/${post.image}`}
        alt=""
        style={{ width: '20rem', height: '20rem', objectFit: 'cover' }}
        onClick={() => {
          profile.dispatch({
            type: 'SET_POST_LOOKING_AT',
            postLookingAt: post,
          });
          if (profilePostModal === false) {
            openModal();
          } else {
            setProfilePostModal(false);
          }
        }}
      />
    </>
  );
}
