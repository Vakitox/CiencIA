const express = require ('express');
const router = express.Router();
const { noestaLogeado } = require('../lib/auth');

router.get('/', noestaLogeado, (req, res) => {
    res.render('links/index');
});

module.exports = router;