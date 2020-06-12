const { Router } = require('express');
const Todo = require('../models/todo');
const router = Router();

router.get('/', async (req, res) => {
   const todos = await Todo.find({});

   res.render('index', {
      title: 'ToDo List',
      isIndex: true,
      todos: todos
   });
});

router.get('/create', (req, res) => {
   res.render('create', { 
      title: 'Create To Do',
      isCreate: true
   });
});

module.exports = router;