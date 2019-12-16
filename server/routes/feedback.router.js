const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(results.rows);
    })
    .catch((err) => {
        console.log('ERROR with /feedback GET: ', err)
        res.sendStatus(500);
    });
})

// router.post('/', (req,res) => {
//     console.log('POST /feedback');
//     pool.query('INSERT INTO "feedback" ();')
// })

module.exports = router;