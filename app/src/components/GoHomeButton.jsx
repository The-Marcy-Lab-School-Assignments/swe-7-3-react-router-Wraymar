// TODO:
// - Import the Link component from React Router
// - Make the button navigate the user back to the home page
import { Link } from "react-router-dom";

const GoHomeButton = ({ onClick }) => {
  return (
    <button className="ui button fluid" onClick={onClick}>
      Go Home
    </button>
  );
};

export default GoHomeButton;
