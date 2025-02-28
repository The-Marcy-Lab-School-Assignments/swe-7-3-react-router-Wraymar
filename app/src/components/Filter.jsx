const Filter = ({ setBotTypeFilter }) => {
    return (
        <div>
            <label>Filter Bots:</label>
            <select className="ui dropdown" onChange={(e) => setBotTypeFilter(e.target.value)}>
                <option value="">--Select Bot Type--</option>
                <option value="Defender" >Defender</option>
                <option value="Assault" >Assault</option>
                <option value="Support" >Support</option>
            </select>
        </div>
    )
}

export default Filter