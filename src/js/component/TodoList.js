import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const TodoList = props => {
	const [todoList, setTodoList] = useState([]);
	let [newTask, setNewTask] = useState("");

	const handleTask = () => {
		if (event.key === "Enter" && newTask != "") {
			setNewTask("");
			setTodoList(todoList.concat(newTask));
		}
	};
	const deleteTask = value => {
		setTodoList(todoList.filter(task => task !== value));
	};

	return (
		<div>
			<input
				value={newTask}
				placeholder=" Your List here !"
				onChange={e => setNewTask(e.target.value)}
				onKeyPress={e => handleTask(e)}
			/>
			<ul>
				{todoList.map((item, index) => (
					<li key={index}>
						{item}
						<label
							onClick={() => {
								deleteTask(item);
							}}>
							x
						</label>
					</li>
				))}
			</ul>
			<label className="numberList">{todoList.length} Tasks</label>
		</div>
	);
};
