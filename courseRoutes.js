// const express = require("express");
// const Course = require("../schema/courseSchema");
// const router = express.Router();

// router.get("/", async (req, res) => {
//     try {
//         const courses = await Course.find({});
//         res.status(200).send(courses);
//       } catch (err) {
//         console.error('Error fetching courses:', err);
//         res.status(500).send({ error: 'Failed to fetch courses' });
//       }
// });

// router.post("/", (req, res) => {
//     console.log(req.body);
//     // Insert the data into DB using Schema
//     let newCourse = new Course({
//         courseName: req.body.courseName,
//         courseId: req.body.courseId,
//         courseDuration: req.body.courseDuration,
//         courseFee: req.body.courseFee
//     });
//     newCourse.save().then((result) => {
//         res.send(result);
//     }).catch((err) => {
//         console.error(err);
//         res.status(500).send({ error: 'Failed to create course' });
//     });
// });

const express = require("express");
const Course = require("../schema/courseSchema");
const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).send(courses);
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).send({ error: 'Failed to fetch courses' });
    }
});

// Get course by ID
router.get("/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).send({ error: "Course not found" });
        }
        res.status(200).send(course);
    } catch (err) {
        console.error('Error fetching course by ID:', err);
        res.status(500).send({ error: 'Failed to fetch course' });
    }
});

// Create new course
router.post("/", (req, res) => {
    console.log(req.body);
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

module.exports = router;
