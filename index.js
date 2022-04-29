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
app.use('/home', requireRouter);
app.use('/releases', requireReleaseRouter);
app.use('/accounting', requireAccountingRouter);


app.set('port', process.env.PORT || 3000);


app.listen(3000, () => {
    console.log("app listening on port 3000")
  })