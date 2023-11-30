// tasks.js

const express = require('express');
const router = express.Router();

let tasks = [];

// GET all tasks
router.get('/', (req, res) => {
  res.status(200).json(tasks);
});

// GET a specific task
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const task = tasks.find(task => task.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  res.status(200).json(task);
});

// POST a new task
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  const newTask = {
    id: tasks.length + 1,
    title,
    description
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update a task

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  const task = tasks.find(task => task.id === parseInt(id));
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  task.title = title || task.title;
  task.description = description || task.description;
  res.status(200).json(task);
});

// DELETE a task
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.status(200).json({ message: 'Task deleted' });
});

module.exports = router;
