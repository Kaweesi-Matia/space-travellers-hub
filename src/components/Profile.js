import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const showRockets = useSelector((state) => state.rockets);
  const showMissions = useSelector((state) => state.missions);
  const reserveRockets = showRockets.filter((rocket) => rocket.reserved);
  const joinedMissionz = showMissions.filter((mission) => mission.joined);

  return (
    <div className="profileContainer">
      <div className="all_missions">
        <h2> Missions</h2>
        <div className="missionsList">
          {(!joinedMissionz.length) ? <h4 key="0" className="display_nothing">Please join Missions</h4> : ''}
          {joinedMissionz.map((mission) => (
            <h4 key={mission.id}>{mission.name}</h4>
          ))}
        </div>
      </div>
      <div className="all_rockets">
        <h2> Rockets</h2>
        <div className="rocketsList">
          {(!reserveRockets.length) ? <h4 key="0" className="display_nothing">Please reserve Rockets</h4> : ''}
          {reserveRockets.map((rocket) => (
            <h4 key={rocket.id}>{rocket.name}</h4>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
