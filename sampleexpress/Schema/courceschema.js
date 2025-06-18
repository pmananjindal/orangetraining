const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    courseName:{
        type:String,
        required:"this field is required"
    },
    courseId:{
        type:String
    },
    courseDuration:{
        type:String
    },
    courseFee:{
        type:String
    }
});
const Course = mongoose.model('COurse',courseSchema);
module.exports = Course;