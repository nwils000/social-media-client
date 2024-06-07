import React, { useContext, useEffect, useState } from 'react';
import { getAllProfiles } from '../api';
import { ProfileContext } from '../context';

export default function SearchProfiles({}) {
  const [filter, setFilter] = useState('');
  const [profiles, setProfiles] = useState([]);
  const { profile } = useContext(ProfileContext);

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
      {filteredProfile.map((profile, index) => (
        <div key={index}>
          {profile.user.username} -{' '}
          <span style={{ color: 'lightgray' }}>
            {profile.first_name} {profile.last_name}
          </span>
        </div>
      ))}
    </div>
  );
}
