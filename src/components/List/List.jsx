import { useState } from "react";

const List = ({ items, setItemList }) => {
    const [listItems, setListItems] = useState(items.map(item => ({
        ...item,
        isActive: item.isActive !== undefined ? item.isActive : false
    })));
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
                    return (
                        <li key={item.id} className={classList} onClick={() => toggleActive(item.id)}>
                            <div className="m-0">
                                <h4>{item.name}</h4>
                                {item.description && <p>{item.description}</p>}
                                {item.price && <span>${item.price}</span>}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;