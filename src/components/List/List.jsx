import { useState, useEffect } from "react";

const List = ({ items, setItemList, removeItem }) => {
    const [listItems, setListItems] = useState(items.map(item => ({
        ...item,
        isActive: item.isActive !== undefined ? item.isActive : false
    })));

    useEffect(() => {
        setListItems(items.map(item => ({
            ...item,
            isActive: item.isActive !== undefined ? item.isActive : false
        })));
    }, [items]);

    const toggleActive = (key) => {
        setListItems(prevItems =>
            prevItems.map((item) =>
                item.id === key ? { ...item, isActive: !item.isActive } : item
            )
        );
        setItemList(prevItems =>
            prevItems.map((item) =>
                item.id === key ? { ...item, isActive: !item.isActive } : item
            )
        );
    }

    return (
        <div className="container p-0">
            <ul className="list-group">
                {listItems.map((item) => {
                    let classList = 'list-group-item'
                    item.isActive ? classList = 'list-group-item bg-dark border-0 ' + 'active' : classList = 'list-group-item bg-light border-0';
                    let buttonClassList = 'btn btn-dark col-auto m-auto';
                    item.isActive ? buttonClassList = 'btn btn-light col-auto m-auto' : buttonClassList = 'btn btn-dark col-auto m-auto';
                    return (
                        <li key={item.id} className={classList} onClick={() => toggleActive(item.id)}>
                            <div className="m-0 row">
                                <div className="col">
                                    <h4>{item.name}</h4>
                                    {item.description && <p>{item.description}</p>}
                                    {item.price && <span>${item.price}</span>}
                                </div>
                                <button className={buttonClassList} onClick={() => removeItem(item.id)}>X</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;