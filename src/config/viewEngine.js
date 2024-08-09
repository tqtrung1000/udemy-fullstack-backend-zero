
const path = require('path')
const express = require('express')// khai báo express


const configViewEngine = (app) => {

    //khai báo view engine trong express và set vị trí lưu view --> sau đó sẻ lấy ra để dùng
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    //khai báo static file --> trỏ đến file public trong src
    app.use(express.static(path.join('./src', 'public')))
}


//xuất file
module.exports = configViewEngine;
