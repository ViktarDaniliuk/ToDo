const { Router } = require('express');
const Todo = require('../models/todo');
const router = Router();
const fs = require('fs');
const todo = require('../models/todo');

router.get('/', async (req, res) => {
   const todos = await Todo.find();

   const data = {
      title: 'ToDo List',
      isIndex: true,
      todos: JSON.parse(JSON.stringify(todos))
   }
   res.render('index', data);
});

router.get('/create', (req, res) => {
   res.render('create', { 
      title: 'Create To Do',
      isCreate: true
   });
});

router.post('/create', async (req, res) => {
   const todo = new Todo({
      title: req.body.title
   });

   await todo.save();

   res.redirect('/');
});

module.exports = router;