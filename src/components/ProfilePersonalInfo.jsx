import { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../context';
import { useNavigate } from 'react-router-dom';
import EditProfilePostModal from './EditProfilePostModal';

export default function ProfilePersonalInfo({ profileImSeeing }) {
  const { profile } = useContext(ProfileContext);
  const [modalShowing, setModalShowing] = useState(false);

  useEffect(() => {
    console.log('PROFILE TO SEE', profileImSeeing);
  }, []);

  const navigate = useNavigate();

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
        <img
          src={`http://127.0.0.1:8000/${profile.state.profileImSeeing.profile_picture}`}
          alt=""
          style={{ width: '10rem', height: '10rem', borderRadius: '100%' }}
        />
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
            {profileImSeeing.id === profile.state.profile.id && (
              <>
                <button
                  style={{
                    border: 'none',
                    padding: '8px 16px',
                    backgroundColor: 'rgb(227, 227, 227)',
                    fontWeight: '500',
                    borderRadius: '10px',
                    fontSize: '.9rem',
                  }}
                  onClick={() => {
                    modalShowing
                      ? setModalShowing(false)
                      : setModalShowing(true);
                  }}
                >
                  Edit profile
                </button>
                <button
                  style={{
                    border: 'none',
                    padding: '8px 16px',
                    backgroundColor: 'rgb(227, 227, 227)',
                    fontWeight: '500',
                    borderRadius: '10px',
                    fontSize: '.9rem',
                  }}
                  onClick={() => {
                    profile.dispatch({
                      type: 'LOGOUT',
                    });
                    navigate('/');
                  }}
                >
                  Log out
                </button>
              </>
            )}
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>
              <span style={{ fontWeight: 'bold' }}>
                {profileImSeeing.posts.length}{' '}
              </span>
              <span>posts</span>
            </span>
            <span>
              <span style={{ fontWeight: 'bold' }}>
                {profileImSeeing.followers.length}{' '}
              </span>
              <span>followers</span>
            </span>
            <span>
              <span style={{ fontWeight: 'bold' }}>
                {profileImSeeing.following.length}{' '}
              </span>
              <span>following</span>
            </span>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: 0 }}>
              {profileImSeeing.first_name} {profileImSeeing.last_name}
            </p>
            <p>{profile.state.profileImSeeing.description} </p>
          </div>
        </div>
      </div>
    </>
  );
}
