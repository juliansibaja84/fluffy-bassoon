const express = require('express');
const dreamRoutes = express.Router();
dreamRoutes
    .get('/', (req,res) => {
        res.json(...);
    })
    .get('/2', (req,res) => {
        res.json(...);
    })
export default dreamRoutes;
