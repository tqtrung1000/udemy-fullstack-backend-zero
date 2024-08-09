const express = require('express');
const router = express.Router();
const { getHomepage, getABC, hoidanit, postCreateUser, getCreatePage } = require('../controllers/homeController')

// các câu lệnh
router.get('/abc', getABC)

router.get('/', getHomepage)

router.get('/hoidanit', hoidanit)

router.get('/create', getCreatePage)//trả

router.post('/creat-user', postCreateUser) //nhập


module.exports = router;