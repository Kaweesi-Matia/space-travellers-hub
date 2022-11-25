import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket, cancelReserved, fetchRocketData } from '../redux/rockets/rockets';

const Rockets = () => {
  const showRockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!showRockets.length) dispatch(fetchRocketData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const manageReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const manageRemoveReserved = (id) => {
    dispatch(cancelReserved(id));
  };

  return (
    <div className="rocketContainer">
      {showRockets.map((rocket, index) => (
        <div key={[index]} className="rockets-division">
          <img className="rocket_image" src={rocket.image} alt={rocket.name} />
          <div className="rocket_description">
            <h2>{rocket.name}</h2>
            <p>
              {(rocket.reserved) ? <span>Reserved</span> : '' }
              {rocket.description}
            </p>
            {(rocket.reserved) ? <button type="button" className="cancel_reserved" onClick={() => manageRemoveReserved(rocket.id)}>Cancel Reservation</button>
              : <button type="button" className="selectReserve" onClick={() => manageReserve(rocket.id)}>Reserve Rocket</button> }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
