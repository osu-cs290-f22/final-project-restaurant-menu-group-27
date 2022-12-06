// Server-Side JavaScript

//var path = require('path')

var express = require('express')
var express_handlebars = require('express-handlebars')
var app = express()
var port = process.env.PORT || 3000
var menuData = require('./menuData')


app.engine('handlebars', express_handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get(['/', '/menu'], function (req, res, next) {       // displays index.html
    res.status(200).render('menuPage', {
        breakfast: menuData.breakfast,
        lunch: menuData.lunch,
        dinner: menuData.dinner,
        specials: menuData.specials 
    })
})

app.get('*', function (req, res) {
    res.status(404).render('404', {})
})



app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
});