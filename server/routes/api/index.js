//api index

const router = require('express').Router();

const characterRoutes = require('./character-routes');
    //characterRoutes.x should be each function I need from the controller

router.use('/character', characterRoutes);
// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
// router.use('/tags', tagRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;