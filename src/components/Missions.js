import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, fetchMissionData, cancelMission } from '../redux/missions/missions';

const Missions = () => {
  const showMissions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showMissions.length) dispatch(fetchMissionData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const manageMissionsJoin = (id) => {
    dispatch(joinMission(id));
  };

  const manageMissionsLeave = (id) => {
    dispatch(cancelMission(id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th className="mission_name"><h3>Mission</h3></th>
          <th className="mission_description"><h3>Description</h3></th>
          <th className="mission_status"><h3>Status</h3></th>
          <th>{' '}</th>
        </tr>
      </thead>
      <tbody>
        {showMissions.map((mission, index) => (
          <tr className="missionRow" key={[index]}>
            <td><h4>{mission.name}</h4></td>
            <td>{mission.description}</td>
            <td className="status-div mission_status">
              {(mission.joined)
                ? <span className="member-division active_member">Active Member</span>
                : <span className="member-division not_member">Not a Member</span>}
            </td>
            <td className="status-div mission-action">
              {(mission.joined)
                ? <button type="button" className="button-mission leave-mission" onClick={() => manageMissionsLeave(mission.id)}>Leave Mission</button>
                : <button type="button" className="button-mission join-mission" onClick={() => manageMissionsJoin(mission.id)}>Join Mission</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Missions;
