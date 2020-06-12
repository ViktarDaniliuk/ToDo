const { Schema, model } = require('mongoose');

const schema = new Schema({
   title: {
      type: String,
      requierd: true
   },
   completed: {
      type: Boolean,
      default: false
   }
});

module.exports = model('Todo', schema);