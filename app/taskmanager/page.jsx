/* eslint-disable react/jsx-key */
"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React, { useState } from "react";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Math.random().toString() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const TaskList = ({ tasks, deleteTask }) => {
    return (
      <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <h3>{task.title}</h3>
            </CardHeader>
            <CardBody>
              <p className="text-right">وضعیت: {task.status}</p>
            </CardBody>
            <CardFooter>
              <Button onClick={() => deleteTask(task.id)} color="danger">
                حذف وظیفه
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  };

  const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      onAddTask({ title, status });
      setTitle("");
      setStatus("");
    };

    const selectItems = [
      { label: "انجام نشده", value: "انجام نشده" },
      { label: "در حال انجام ", value: "در حال انجام " },
      { label: "انجام شده", value: "انجام شده" },
    ];

    return (
      <div className="w-max">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3"
            placeholder="عنوان وظیفه"
            required
          />

          <Select
            required
            items={selectItems}
            label="وضعیت"
            placeholder="انتخاب کنید"
            className="max-w-xs"
            onSelectionChange={setStatus}
          >
            {(task) => <SelectItem key={task.value}>{task.label}</SelectItem>}
          </Select>
          <Button type="submit" className="mt-3" fullWidth color="primary">
            افزودن وظیفه
          </Button>
        </form>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="p-10 border border-gray-700 rounded-lg bg-darkLighter">
        <div className="text-center text-xl font-bold">مدریت وظایف</div>
        <div className="flex justify-center mt-5 w-full">
          <AddTaskForm onAddTask={addTask} />
        </div>
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
