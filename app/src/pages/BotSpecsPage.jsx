/* 
A "page" is distinct from a component in that a page 
is made up of components. A page simply organizes the 
components, using props to pass down shared state.
*/

import GoHomeButton from "../components/GoHomeButton";
import BotSpecs from "../components/BotSpecs";

const BotSpecsPage = () => {
  return (
    <main>
      <BotSpecs />
      <GoHomeButton />
    </main>
  );
}

export default BotSpecsPage;