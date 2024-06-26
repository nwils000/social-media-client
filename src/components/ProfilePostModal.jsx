import { useContext, useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { addLikeToPost, deletePost, fetchUser, updatePost } from '../api';
import { ProfileContext } from '../context';
import { FaRegHeart } from 'react-icons/fa';

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
            src={`https://app-social-media.fly.dev${post.image}`}
            alt=""
          />
        </div>
        <div
          style={{
            backgroundColor: 'white',
            minWidth: '33rem',
          }}
        >
          {' '}
          {thePost.profile.id === profile.state.profile.id && (
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          )}
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
            <div>
              <div
                className="interaction-bar"
                onClick={() => {
                  addLikeToPost({ profile, postId: post.id });
                }}
              >
                <FaRegHeart className="hover" style={{ fontSize: '2rem' }} />
              </div>
              <p>Likes: {thePost.likes.length}</p>
              <p>{thePost.description}</p>
              {thePost.comments.map((comment) => {
                return (
                  <div
                    className="comments hover"
                    style={{ fontSize: '1.2rem' }}
                  >
                    <span
                      onClick={() => {
                        console.log('HSFIAHASFIFSA', comment);
                        const fetchProfileImClicking = async () => {
                          try {
                            const theProfile = await getProfileToSee({
                              profile,
                              profileId: comment.profile.id,
                            });
                            profile.dispatch({
                              type: 'SET_PROFILE_IM_SEEING',
                              theProfile: theProfile,
                            });
                            navigate('/profile');
                            console.log('PrOFILe To SeE', theProfile);
                          } catch (error) {
                            console.log('Error:', error);
                          }
                        };
                        fetchProfileImClicking();
                      }}
                      style={{ fontWeight: 'bold' }}
                    >
                      @{comment.profile.user.username}{' '}
                    </span>
                    <span>{comment.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
