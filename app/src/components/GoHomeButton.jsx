// TODO:
// - Import the Link component from React Router
// - Make the button navigate the user back to the home page
import { Link } from "react-router-dom";

//using the Link component
const GoHomeButton = () => {
  return (
    <Link to="/">
      <button className="ui button fluid">Go Home</button>
    </Link>
  );
};

//To use useNavigate
//the button would receive a callback that determines what to do when the button is clicked

// const GoHomeButton = ({ onClick }) => {
//   return (
//     <button className="ui button fluid" onClick={onClick}>
//       Go Home
//       </button>
//   );
// };

export default GoHomeButton;
