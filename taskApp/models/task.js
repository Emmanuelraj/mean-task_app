const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongooseSchema = new Schema ({
           items :
           {
             type: String,
             required : true
           }

         });

module.exports  = mongoose.model('tasks',mongooseSchema);
