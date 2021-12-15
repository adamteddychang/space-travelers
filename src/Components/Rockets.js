import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRockets } from '../Redux/rockets/rocket';
import Rocket from './Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    if (rockets.length === 1) {
      dispatch(fetchAllRockets());
    }
  }, [dispatch]);
  return (
    <div className="Rockets">
      <ul>
        {rockets.map((rocket) => (
          <Rocket
            key={rocket.id}
            rocket={rocket}
          />
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
