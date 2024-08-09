// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//     console.log('Server running at http://' + hostname + ':' + port + '/');
// });

require('dotenv').config()
const express = require('express') // common js

const configViewEngine = require('./config/viewEngine') //láy dữ liệu từ config
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express() //app express
const port = process.env.PORT     // port
const hostname = process.env.HOST_NAME

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//lấy file config từ config
configViewEngine(app);

//khai bao router
app.use('/', webRouter);

//test conect data Dock



//simple query
connection.query(
    'select *from Users',
    function (err, results, fields) {
        console.log('>>> results= ', results);
    }
)

//chạy server
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})