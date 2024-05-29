const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "Admin created Successfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    title = req.body.title;
    description = req.body.description;
    imageLink = req.body.imageLink;
    price = req.body.price;
    
   const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price,
    })

    res.json({
        msg: "Course created successfully", courseId: newCourse._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses: response,
    })
});

module.exports = router;