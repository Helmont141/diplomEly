var express = require('express');
var adminRouter = express.Router();
const knex = require("../module/db");
const adminCeck = require('../module/isAdmin');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0 / \ / \ P4 $$ w0rD';
const someOtherPlaintextPassword = 'not_bacon';

/* GET home page. */
adminRouter.get('/', function (req, res, next) {
  res.render('login');
});

adminRouter.post('/', async function (req, res, next) {
  const {
    login,
    password
  } = req.body;
  const [user] = await knex.select("*").from('user').where('login', login);

  bcrypt.compare(password, user.password).then(function(result) {
    if (user && result) {
      req.session.nameUser = "admin";
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  });

  
});

adminRouter.post('/addUser', async (req, res, next) => {
  let {
    login,
    password
  } = req.body;
  bcrypt.hash(password, saltRounds).then( async function(hash) {
    await knex('user').insert({
        login: login,
        password: hash
      })
  });
  res.end();
})
// news crud show all

adminRouter.get('/news', adminCeck, async function (req, res, next) {
  const result = await knex.select("*").from("news");
  res.render('news', {
    news: result
  });
});
// newsAdd
adminRouter.get('/newsAdd', adminCeck, async function (req, res, next) {
  res.render('newsAdd');
});
// add to db
adminRouter.post('/news/newsAdd', adminCeck, async function (req, res, next) {
  const {
    date,
    title,
    description
  } = req.body;
  try {
    await knex('news').insert({
      date: date,
      title: title,
      description:description
    });
    res.end();
  } catch (error) {
    console.log(error);
    next(error);
  }

});
// page uodate news
adminRouter.get('/news/update:id', adminCeck, async function (req, res, next) {
  try {
    let id = req.params.id;
    const [result] = await knex.select("*").from("news")
      .where({
        'id': id
      });
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
  const {
    date,
    title,
    description
  } = req.body;
  const id = req.params.id;
  await knex('news').where('id', id).update({
    date: date,
    title: title,
    description: description
  });
  res.end();
});
// news/delite
adminRouter.delete('/news/delite:id', adminCeck, async function (req, res, next) {
  let id = req.params.id
  try {
    await knex('news').where('id', id).del();
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

adminRouter.get('/product', adminCeck, async function (req, res, next) {
  const result = await knex.select("*").from("products");
  res.render('product', {
    product: result
  });
});

adminRouter.get('/productAdd', adminCeck, function (req, res, next) {
  res.render('productAdd');
});

// add to db
adminRouter.post('/product/productAdd', adminCeck, async function (req, res, next) {
  const {
    priceS,
    priceM,
    priceL,
    title,
    description
  } = req.body;
  // console.log(price, title, description);
  try {
    if (priceS > 0) {
      await knex('products').insert({
        priceS: priceS,
        priceM: priceM,
        priceL: priceL,

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

adminRouter.get('/product/update:id', adminCeck, async function (req, res, next) {
  try {
    let id = req.params.id;
    const [result] = await knex.select("*").from("products")
      .where({
        'id': id
      });
    req.status = 201;
    res.render('productUpdate', {
      result
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});


adminRouter.patch('/product/update:id', adminCeck, async function (req, res, next) {
  const {
    priceS,
    priceM,
    priceL,
    title,
    description
  } = req.body;
  const id = req.params.id;
  try {
    if (priceS > 0) {
      await knex('products').where('id', id).update({
        priceS: priceS,
        priceM: priceM,
        priceL: priceL,

        name: title,
        description: description
      });
      res.end();
    }
  } catch (error) {

  }

});

adminRouter.delete('/product/delite:id', adminCeck, async function (req, res, next) {
  let id = req.params.id
  try {
    await knex('products').where('id', id).del();
    res.status(200).end();
  } catch (error) {
    next(error);
  }
});

module.exports = adminRouter;