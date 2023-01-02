const express = require('express');
const app = express();
const db = require('./db');
const conn = db.conn;

app.set("view engine", "ejs");
app.set("views", __dirname  + "/views"); //__dirname 은 현재폴더
app.use('/uploads', express.static('uploads'));

//참여프로젝트
//약력
//기술스택
//소개 + 사진

app.get('/', function (req, res) {
  //res.send('Hello World');
  conn.query("SELECT 1 as val", (err, rows) => {
    console.log(rows); //[ {val: 1}, meta: ... ]
    
});
conn.query("SELECT * FROM member_table", (err, res) => {
  console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
  conn.end();
});
res.render("main");
})


app.listen(3000)