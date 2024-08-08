import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import List from "./components/List/List";
import AddItem from "./components/List/AddItem";
import ListSelector from "./components/List/ListSelector";
import { items, appointments, todoList } from "./components/List/data";

const App = () => {

	const [currentListType, setCurrentListType] = useState('checklist');
	const [itemList, setItemList] = useState(items);
	const [appointmentList, setAppointmentList] = useState(appointments);
	const [checklist, setChecklist] = useState(todoList);

	const addToList = (newItem) => {
		newItem.id = uuidv4();
		if (currentListType === 'checklist') setChecklist(prevChecklist => [...prevChecklist, newItem]);
		if (currentListType === 'items') setItemList(prevChecklist => [...prevChecklist, newItem]);
		if (currentListType === 'appointments') setAppointmentList(prevChecklist => [...prevChecklist, newItem]);
	}
	const removeFromList = (id) => {
		if (currentListType === 'checklist') setChecklist(prevChecklist => prevChecklist.filter(item => item.id !== id));
		if (currentListType === 'items') setItemList(prevChecklist => prevChecklist.filter(item => item.id !== id));
		if (currentListType === 'appointments') setAppointmentList(prevChecklist => prevChecklist.filter(item => item.id !== id));

	}

	return (
		<div className="container mt-3">
			<h1>Build-a-List</h1>
			<ListSelector setCurrentListType={setCurrentListType} />
			{currentListType === 'items' && <>
				<AddItem currentListType={currentListType} addItem={addToList} />
				<List items={itemList} setItemList={setItemList} removeItem={removeFromList} />
			</>}
			{currentListType === 'appointments' && <>
				<AddItem currentListType={currentListType} addItem={addToList} />
				<List items={appointmentList} setItemList={setAppointmentList} removeItem={removeFromList} />
			</>}
			{currentListType === 'checklist' && <>
				<AddItem currentListType={currentListType} addItem={addToList} />
				<List items={checklist} setItemList={setChecklist} removeItem={removeFromList} />
			</>}

		</div>
	);
};

export default App;
