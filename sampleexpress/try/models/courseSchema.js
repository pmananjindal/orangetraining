const mongoose = require('mongoose');
//attributes of the course object

const courseScheme = new mongoose.Schema({
    courseName: {
        type: String,
        required: 'This field isn required!'
    },
    courseId: {
        type: String
    },
    courseDuration: {
        type: String
    },
    courseFee: {
        type: String
    }
});


const Course = mongoose.model('Course', courseScheme);
module.exports = Course;