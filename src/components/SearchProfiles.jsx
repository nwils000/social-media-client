import React, { useContext, useEffect, useState } from 'react';
import { getAllProfiles, getProfileToSee } from '../api';
import { ProfileContext } from '../context';
import { useNavigate } from 'react-router-dom';

export default function SearchProfiles({}) {
  const [filter, setFilter] = useState('');
  const [profiles, setProfiles] = useState([]);
  const { profile } = useContext(ProfileContext);

  const navigate = useNavigate();

  useEffect(() => {
    const getProfiles = async () => {
      try {
        let profiles = await getAllProfiles({ profile });
        setProfiles(profiles);
      } catch (error) {
        console.log(error);
      }
    };
    getProfiles();
  }, []);

  const filteredProfile = profiles.filter((profile) => {
    return (
      profile.first_name.toLowerCase().includes(filter.toLowerCase()) ||
      profile.user.username.toLowerCase().includes(filter.toLowerCase()) ||
      profile.last_name.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search profiles"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filter &&
        filteredProfile.slice(0, 5).map((prof, index) => (
          <div
            key={index}
            onClick={() => {
              console.log('HSFIAHASFIFSA', prof);
              const fetchProfileImClicking = async () => {
                try {
                  const theProfile = await getProfileToSee({
                    profile: profile,
                    profileId: prof.id,
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
          >
            @{prof.user.username} -{' '}
            <span style={{ color: 'lightgray' }}>
              {prof.first_name} {prof.last_name}
            </span>
          </div>
        ))}
    </div>
  );
}
