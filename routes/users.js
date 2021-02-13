const express = require('express');
const router = express.Router();

router.get('/', (req , res) => {
    res.json({
        message: 'Testroute'});
} );

router.get('/:id', (req , res) => {
    const id = req.params.id;
    res.json({
        message: `your id is ${id}`});
} );


module.exports = router;