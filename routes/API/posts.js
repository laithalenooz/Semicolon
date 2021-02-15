const express = require('express');
const router = express.Router();

// @route     GET api/posts
// @desc      Get all posts
// @access    public
router.get('/', (req, res) => {
    res.send('Get all posts');
});

// @route     POST api/posts
// @desc      Add new posts
// @access    public
router.post('/', (req, res) => {
    res.send('Add posts');
});

// @route     PUT api/posts/:id
// @desc      Update posts
// @access    public
router.put('/:id', (req, res) => {
    res.send('Update posts');
});

// @route     DELETE api/posts/:id
// @desc      Delete posts
// @access    public
router.delete('/:id', (req, res) => {
    res.send('Delete posts');
});

module.exports = router;