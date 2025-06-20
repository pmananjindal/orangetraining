const express = require("express");
const router = express.Router();
const Course = require("../models/courseschema");
// Define user routes
// router.get("/", (req, res) => {
//   res.send("List of Courses");
// });
// router.get("/", async (req, res) => {
//     try {
//         const courses = await Course.find({});
//         res.status(200).send(courses);
//       } catch (err) {
//         console.error('Error fetching courses:', err);
//         res.status(500).send({ error: 'Failed to fetch courses' });
//       }
// });
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
  router.put("/:id", async (req, res) => {
    try {
        const updateCourse = await Course.findByIdAndUpdate(req.params.id, {courseFee :req.body.courseFee,courseName: req.body.courseName},{new:true});
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
      else
      {
        const updateCourse = await Course.findByIdAndDelete(req.params.id);
        res.send({ message: 'Course deleted successfully', course: updateCourse });
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
// router.get("/:id", (req, res) => {
//   const userId = req.params.id;
//   res.send(`User ID: ${userId}`);
// });
// router.post("/", (req, res) => {
//  console.log(req.body);
//   res.send("Course created");
// });
// router.put("/:id", (req, res) => {
//   // Update user information
//   const userId = req.params.id;
//   res.send(`User ID ${userId} updated`);
// });
// router.delete("/:id", (req, res) => {
//   // Delete a user
//   const userId = req.params.id;
//   res.send(`User ID ${userId} deleted`);
// });
module.exports = router;