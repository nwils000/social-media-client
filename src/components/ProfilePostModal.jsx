import { useContext, useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { deletePost, fetchUser, updatePost } from '../api';
import { ProfileContext } from '../context';

export default function ProfilePostModal({
  setProfilePostModal,
  profilePostModal,
  post,
  thePost,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(post.description);

  const { profile } = useContext(ProfileContext);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setProfilePostModal(false);
    deletePost({ profile, postId: post.id });
  };

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
          zIndex: 4,
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div style={{ width: '33rem', display: 'flex' }}>
          <img
            style={{ objectFit: 'scale-down' }}
            src={`http://127.0.0.1:8000/${post.image}`}
            alt=""
          />
        </div>
        <div
          style={{
            backgroundColor: 'white',
            minWidth: '33rem',
          }}
        >
          {isEditing ? (
            <div>
              <input
                type="text"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              />
              <button
                onClick={() => {
                  fetchUser({
                    accessToken: profile.state.accessToken,
                    profile,
                  });
                  setIsEditing(false);
                  updatePost({
                    profile,
                    description: editedDescription,
                    postId: post.id,
                  });
                  profilePostModal === false
                    ? setProfilePostModal(true)
                    : setProfilePostModal(false);
                }}
              >
                Finish
              </button>
            </div>
          ) : (
            thePost.description
          )}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
