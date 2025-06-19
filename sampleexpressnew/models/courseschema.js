const courseScheme = new mongoose.Schema({
    courseName: {
        type : String,
        required: 'This field is required!'
    },
    couseId: {
        type: String
    },
    couseDuration: {
        type: String
    },
    couseFee: {
        type: String
    }
});

const Course = mongoose.model('course', courseScheme);
module.exports = Course;


