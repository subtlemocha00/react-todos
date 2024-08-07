const ListSelector = ({ setCurrentListType }) => {
    const handleClick = (e, listType) => {
        setCurrentListType(listType);
        document.querySelectorAll('.btn-group > .btn').forEach(button => button.classList.remove('active'));
        // const currentListId = '#' + listType;
        // document.querySelector(currentListId);
        e.target.classList.add('active');
    }
    return (
        <div className="container my-3">
            <span>Choose Your List:</span>
            <div className="btn-group">
                <button id="checklist" type="button" className="btn btn-dark active" onClick={(e) => handleClick(e, "checklist")}>Checklist</button>
                <button id="appointments" type="button" className="btn btn-dark" onClick={(e) => handleClick(e, "appointments")}>Appointments</button>
                <button id="items" type="button" className="btn btn-dark" onClick={(e) => handleClick(e, "items")}>Item List</button>
            </div>
        </div>
    )
}

export default ListSelector;