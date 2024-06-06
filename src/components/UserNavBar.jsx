import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { MdCreate } from 'react-icons/md';
import { CreatePostContext, ProfileContext } from '../context';
import { useContext, useState } from 'react';

export default function UserNavBar({}) {
  const navigate = useNavigate();
  const { modalDisplay, setModalDisplay } = useContext(CreatePostContext);
  const { profile } = useContext(ProfileContext);

  let theProfile = profile.state.profile;

  return (
    <>
      <div className="navbar" style={{ justifyContent: 'end' }}>
        <div
          className="nav-links-wrapper"
          style={{ alignItems: 'center', gap: '2.3rem' }}
        >
          <MdCreate
            className="create-post"
            style={{ fontSize: '2.7rem' }}
            onClick={() => {
              modalDisplay === 'none'
                ? setModalDisplay('block')
                : setModalDisplay('none');
            }}
          />
          <Link
            to="/feed"
            className="nav-link"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <IoMdHome style={{ fontSize: '2.7rem' }} />
          </Link>
          <div
            style={{ display: 'flex', alignItems: 'center' }}
            onClick={() => {
              profile.dispatch({
                type: 'SET_PROFILE_IM_SEEING',
                theProfile: theProfile,
              });
              navigate('/profile');
            }}
          >
            <img
              className="hover"
              src="https://images.pexels.com/photos/24252211/pexels-photo-24252211/free-photo-of-a-table-with-flowers-and-watercolor-paints.jpeg"
              style={{ width: '3rem', height: '3rem', borderRadius: '100%' }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div style={{ height: '6rem' }}></div>
    </>
  );
}
