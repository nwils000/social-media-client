import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../context';
import { useNavigate } from 'react-router-dom';
import EditProfilePostModal from './EditProfilePostModal';
import { followUser, unfollowUser } from '../api';

export default function ProfilePersonalInfo({ profileImSeeing }) {
  const { profile } = useContext(ProfileContext);
  const [modalShowing, setModalShowing] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    console.log('PROFILE TO SEE', profileImSeeing);
    setIsFollowing(
      profile.state.profile.following.some(
        (follow) => follow.id === profileImSeeing.id
      )
    );
  }, [profile.state.profile, profileImSeeing]);

  const navigate = useNavigate();

  const handleFollow = () => {
    const userIdToFollow = profileImSeeing.id;
    followUser({
      profile: profile,
      userIdToFollow: userIdToFollow,
    });
  };

  const handleUnfollow = () => {
    const userIdToUnfollow = profileImSeeing.id;
    unfollowUser({
      profile: profile,
      userIdToUnfollow: userIdToUnfollow,
    });
  };

  return (
    <>
      {modalShowing && (
        <EditProfilePostModal
          profilePostModal={modalShowing}
          setProfilePostModal={setModalShowing}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          right: '9rem',
          gap: '5rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }}
      >
        {profileImSeeing.profile_picture != null ? (
          <img
            className="hover"
            src={`https://app-social-media.fly.dev${profileImSeeing.profile_picture}`}
            style={{
              width: '10rem',
              height: '10rem',
              borderRadius: '100%',
              objectFit: 'cover',
            }}
            alt=""
          />
        ) : (
          <img
            className="hover"
            src={
              'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
            }
            style={{
              width: '10rem',
              height: '10rem',
              borderRadius: '100%',
              objectFit: 'cover',
            }}
            alt=""
          />
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <h2
              style={{
                fontSize: '1.4rem',
                fontWeight: 'normal',
              }}
            >
              {profileImSeeing.user.username}
            </h2>
            {profileImSeeing.id === profile.state.profile.id ? (
              <>
                <button
                  style={buttonStyle}
                  onClick={() => setModalShowing(!modalShowing)}
                >
                  Edit profile
                </button>
                <button
                  style={buttonStyle}
                  onClick={() => {
                    profile.dispatch({ type: 'LOGOUT' });
                    navigate('/');
                  }}
                >
                  Log out
                </button>
              </>
            ) : isFollowing ? (
              <button style={buttonStyle} onClick={handleUnfollow}>
                Unfollow
              </button>
            ) : (
              <button style={buttonStyle} onClick={handleFollow}>
                Follow
              </button>
            )}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>
              <strong>{profileImSeeing.posts.length}</strong> posts
            </span>
            <span>
              <strong>{profileImSeeing.followers.length}</strong> followers
            </span>
            <span>
              <strong>{profileImSeeing.following.length}</strong> following
            </span>
          </div>
          <div>
            <strong>
              {profileImSeeing.first_name} {profileImSeeing.last_name}
            </strong>
            <p>{profileImSeeing.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

const buttonStyle = {
  border: 'none',
  padding: '8px 16px',
  backgroundColor: 'rgb(227, 227, 227)',
  fontWeight: '500',
  borderRadius: '10px',
  fontSize: '.9rem',
};
