const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
   res.render('index', {
      title: 'ToDo List',
      isIndex: true
   });
});

router.get('/create', (req, res) => {
   res.render('create', { 
      title: 'Create To Do',
      isCreate: true
   });
});

module.exports = router;