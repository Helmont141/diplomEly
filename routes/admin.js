var express = require('express');
var adminRouter = express.Router();
const knex = require("../module/db");
const adminCeck = require('../module/isAdmin');

/* GET home page. */
adminRouter.get('/', function(req, res, next) {
  res.render('login');
});

adminRouter.post('/', async function(req, res, next) {
  const {login, password} = req.body;
    const [user] = await knex.select("*").from('user').where('login',login);

    if (user && password == user.password) {
        req.session.nameUser = "admin";
        res.status(200).end(); 
    } else {
        res.status(400).end();
    }
});
// news crud show all

adminRouter.get('/news', adminCeck, async function(req, res, next) {
  const result = await knex.select("*").from("news");
  res.render('news', {news: result});
});
// newsAdd
adminRouter.get('/newsAdd', adminCeck, async function(req, res, next) {
  res.render('newsAdd');
});
// add to db
adminRouter.post('/news/newsAdd', adminCeck, async function(req, res, next) {
  const {date, title, description} = req.body;
  try {
    await knex('news').insert({
      date: date,
      title: title,
      description: description
    });
    res.end();
  } catch (error) {
    console.log(error);
    next(error);
  }
    
});
// page uodate news
adminRouter.get('/news/update:id', adminCeck, async function(req, res, next) {
  try {
    let id = req.params.id;
    const [result] = await knex.select("*").from("news")
    .where({'id': id});
    req.status = 201;
    res.render('newsUpdate', {
        result
    });
  } catch (error) {
      console.log(error);
      next(error);
  }
});
// rout update news
adminRouter.patch('/news/update:id', adminCeck, async function (req, res, next) {
  const {date, title, description} = req.body;
  const id = req.params.id;
  await knex('news').where('id', id).update({
    date: date,
    title: title,
    description: description
  });
  res.end();
});
// news/delite
adminRouter.delete('/news/delite:id',adminCeck, async function (req, res, next) {
  let id = req.params.id
  try {
      await knex('news').where('id', id).del();
      res.status(200).end();
  } catch (error) {
      next(error);
  }
});

adminRouter.get('/product', adminCeck, async function(req, res, next) {
  const result = await knex.select("*").from("product");
  res.render('product', {product: result});
});

adminRouter.get('/productAdd', adminCeck, function(req, res, next) {
  res.render('productAdd');
});

// add to db
adminRouter.post('/product/productAdd', adminCeck, async function(req, res, next) {
  const {price, title, description} = req.body;
  try {
    if (price >0) {
      await knex('product').insert({
        price: price,
        name: title,
        description: description
      });
      res.end();
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

adminRouter.get('/product/update:id', adminCeck, async function(req, res, next) {
  try {
    let id = req.params.id;
    const [result] = await knex.select("*").from("product")
    .where({'id': id});
    req.status = 201;
    res.render('productUpdate', {
        result
    });
  } catch (error) {
      console.log(error);
      next(error);
  }
});


adminRouter.patch('/product/update:id',adminCeck, async function (req, res, next) {
  const {price, title, description} = req.body;
  const id = req.params.id;
  try {
    if (price >0) {
      await knex('product').where('id', id).update({
        price: price,
        name: title,
        description: description
      });
      res.end();
    }
  } catch (error) {
    
  }
  
});

adminRouter.delete('/product/delite:id',adminCeck, async function (req, res, next) {
  let id = req.params.id
  try {
      await knex('product').where('id', id).del();
      res.status(200).end();
  } catch (error) {
      next(error);
  }
});

module.exports = adminRouter;
