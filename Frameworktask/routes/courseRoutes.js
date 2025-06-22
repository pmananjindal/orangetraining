const express = require("express");
const router = express.Router();
const Course = require("../models/courseSchema");
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).send(courses);
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send({ error: 'Failed to fetch courses' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }
        res.status(200).send(course);
    } catch (err) {
        console.error('Error fetching course:', err);
        res.status(500).send({ error: 'Failed to fetch course' });
    }
});

router.post("/", (req, res) => {
    console.log(req.body);
    // Insert the data into DB using Schema
    let newCourse = new Course({
        courseName: req.body.courseName,
        courseId: req.body.courseId,
        courseDuration: req.body.courseDuration,
        courseFee: req.body.courseFee
    });
    newCourse.save().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).send({ error: 'Failed to create course' });
    });
});

// router.put("/:id", async (req, res) => {
// try {
// const updateCourse = await Course.findByIdAndUpdate(req.params.id, {courseFee:50000});
// res.send({ message: 'Course updated successfully', course: updateCourse });
//   } catch (err) {
// res.status(500).send({ error: err.message });
//   }
// });

router.put("/:id", async (req, res) => {
    try {
        const updateCourse = await Course.findByIdAndUpdate(req.params.id, { courseFee: req.body.courseFee, courseName: req.body.courseName }, { new: true });
        res.send({ message: 'Course updated successfully', course: updateCourse });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).send({ error: 'Course not found' });
        }
        const updateCourse = await Course.findByIdAndDelete(req.params.id);
        res.send({ message: 'Course Deleted Successfully', course: updateCourse });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;