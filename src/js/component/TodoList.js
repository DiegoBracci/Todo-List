import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const TodoList = props => {
	const [todoList, setTodoList] = useState([]);
	let [newTask, setNewTask] = useState("");

	useEffect(
		() =>
			fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/alesanchezr"
			)
				.then(r => r.json())
				.then(data => setTodoList(data)),
		[]
	);

	const handleTask = () => {
		if (event.key === "Enter" && newTask != "") {
			// setNewTask("");
			// function addTask() {
			// 	todoList.concat(newTask);
			// }
			//setTodoList(todoList.concat(newTask));

			useEffect(
				() =>
					fetch(
						"https://assets.breatheco.de/apis/fake/todos/user/alesanchezr",
						{
							method: "PUT",
							body: JSON.stringify(todoList),
							headers: { "Content-type": "aplications/json" }
						}
					)
						.then(r => r.json())
						.then(data => {
							setTodoList(todoList.concat(newTask));
						}),
				[]
			);
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
						{item.label} : {item.done ? "yes" : "no"}
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
