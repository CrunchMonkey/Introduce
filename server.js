const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname  + "/views"); //__dirname 은 현재폴더
app.use('/uploads', express.static('uploads'));

//참여프로젝트
//약력
//기술스택
//소개 + 사진

app.get('/', function (req, res) {
  res.render("main");
})

app.listen(3000)