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
  // conn.query("SELECT 1 as val", (err, rows) => {
  //     console.log(rows); //[ {val: 1}, meta: ... ]
  // });
  var skill;
  conn.query("SELECT * FROM skill_table", (err, res) => {
    //console.log(res[1]);
    skill = res;
    //conn.end();
  });
  console.log(skill);
  res.render("main", skill);
})


app.listen(3000)