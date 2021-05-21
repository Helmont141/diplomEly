var express = require('express');
var router = express.Router();
const knex = require("../module/db");
/* GET home page. */
router.get('/', async function(req, res, next) {
  const news = await knex.select("*").from("news");
  const product = await knex.select("*").from("products");
  let newToPage = [];
  for (var i = news.length-1; i >= 0; i--){
    if(newToPage.length < 5){
      newToPage.push(news[i]);
    }else return;
  }

  res.render('index', {
    product: product,
    news:newToPage
    });
});

module.exports = router;
