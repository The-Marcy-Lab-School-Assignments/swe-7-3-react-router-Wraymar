/* 
A "page" is distinct from a component in that a page 
is made up of components. A page simply organizes the 
components, using props to pass down shared state.
*/

import BotsList from "../components/BotsList";
import Filter from "../components/Filter";
import { useState } from "react";

const BotPage = () => {
    const [botTypeFilter, setBotTypeFilter] = useState('');

    return (
        <main>
            <h1>Robot Army:</h1>
            <Filter setBotTypeFilter={setBotTypeFilter} />
            <BotsList botTypeFilter={botTypeFilter} />
        </main>
    )
}

export default BotPage