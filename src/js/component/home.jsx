import React from "react";
import { ToDoList } from "./ToDoList.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ToDoList/>
		</div>
	);
};

export default Home;
