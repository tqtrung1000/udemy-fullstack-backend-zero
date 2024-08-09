const connection = require('../config/database')
const mysql = require('mysql2');

const getHomepage = async (req, res) => {

    let [results, fields] = await connection.query('select * from Users u');
    console.log(results);

    return res.render('home.ejs', { listtUsers: results });

}

const getABC = (req, res) => {
    res.send('check ABC')
}
const hoidanit = (req, res) => {
    res.render('sample.ejs')
}


const getCreatePage = (req, res) => {
    res.render("create.ejs")
}


// nhận kết quả từ trang nhập
const postCreateUser = async (req, res) => {
    // res.send('create new user')
    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?,?,?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send("create user sucsse");
        }
    )
    // const [results, fields] = await connection.query(
    //     'select * from Users u'
    // );
}



module.exports = {
    getHomepage,
    getABC,
    hoidanit,
    postCreateUser,
    getCreatePage
}