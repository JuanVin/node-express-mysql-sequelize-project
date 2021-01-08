const express = require ("express");
const router = express.Router();

const logController = require('../controller/logcontroller');
const signController = require('../controller/signcontroller');

router.get('/', (req, res) => {
    res.send("Holis");
})
router.get('/login', logController.log);
router.post('/login', logController.newlog);
router.get('/signup', signController.add);
router.post('/signup', signController.save);

module.exports = router;