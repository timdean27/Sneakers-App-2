require('dotenv').config()
const express = require('express')
const app = express()
require('ejs')
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')


const requireRouter = require('./Controllers/router');
const requireReleaseRouter = require('./Controllers/releaseRoutes');
const requireAccountingRouter = require('./Controllers/accountingRoutes');
app.set('view engine', 'ejs');



app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.json());
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.get('/favicon.ico', (req, res) => {res.send("dummy")})
app.use('/home', requireRouter);
app.use('/releases', requireReleaseRouter);
app.use('/accounting', requireAccountingRouter);


app.set('port', process.env.PORT || 4000);


app.listen(process.env.PORT || 4000, function(){
  console.log("Express server listening on port", this.address().port, app.settings.env);
});