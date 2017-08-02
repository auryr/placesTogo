const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();

require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3003 ;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Our index route!
app.get("/", function(req,res){
  res.render("index",{
    message:'',
    currentPage:'',
    subTitle:''
  })
})
// const todoListRoutes = require('./routes/todoList-routes');
// app.use('/todoList', todoListRoutes);
// const categoryRoutes = require('./routes/categories-routes');
// app.use('/categories', categoryRoutes);

const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

const getPlacesToGoRoutes = require('./routes/getPlacesToGo-routes');
app.use('/getPlacesToGo', getPlacesToGoRoutes);

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
