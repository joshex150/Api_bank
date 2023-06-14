// Importing modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db/db');
const signupController = require('./controllers/signupController');
const registernewsletterController = require('./controllers/registernewsletterController');
const checknewsletter = require('./controllers/checknewsletter');
const registerInvoiceController = require('./controllers/registerInvoiceController');
const loginController = require('./controllers/loginController');
const refreshController = require('./controllers/refreshController');
const updateBalanceController = require('./controllers/updateBalanceController')

// Creating the app
const app = express();

// Setting up the middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'https://huddle-git-main-joshex150.vercel.app' || '*'
}));
app.use(express.static('public'));

// Setting up the routes
app.post('/signup', signupController);
app.post('/register/newsletter',registernewsletterController);
app.post('/subscription',checknewsletter);
app.post('/invoice',registerInvoiceController);
app.post('/update',updateBalanceController);
app.post('/login', loginController);
app.post('/refresh', refreshController);

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
