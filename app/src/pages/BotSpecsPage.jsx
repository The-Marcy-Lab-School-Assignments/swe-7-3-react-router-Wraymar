/* 
A "page" is distinct from a component in that a page 
is made up of components. A page simply organizes the 
components, using props to pass down shared state.
*/

import GoHomeButton from "../components/GoHomeButton";
import BotSpecs from "../components/BotSpecs";
import { useNavigate } from "react-router-dom";

const BotSpecsPage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <BotSpecs />
      {/* <GoHomeButton onClick={() => navigate(`/`)} /> */}
      <GoHomeButton onClick={() => navigate(`/`)} />
    </main>
  );
};

export default BotSpecsPage;
