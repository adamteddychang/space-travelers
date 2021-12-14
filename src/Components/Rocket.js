/* eslint-disable */
import { useDispatch } from "react-redux";
import { bookRocket } from "../Redux/rockets/rocket";

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  console.log(rocket.reserved);
  const bookIURocket = () => {
    dispatch(bookRocket(rocket.id));
  }
  return (
    <li className="rocket-item" key={rocket.id}>
      <div className="rocket-img"><img src={rocket.flickr_images} alt={rocket.name} /></div>
      <div className="rocket-description">
        <h2>{rocket.rocket_name}</h2>
        <p>
        {rocket.description}
        </p>
        <div>
          {rocket.reserved === false || rocket.reserved === undefined ?
          <button type="button" className="available-button" onClick={bookIURocket}>Reserve Rocket</button> :
          <button type="button" className="reserved-button">Cancel Reservation</button>
          }
        </div>
      </div>
    </li>
  );
}

export default Rocket;