// Server-Side JavaScript


var express = require('express')
var express_handlebars = require('express-handlebars')
var app = express()
var port = process.env.PORT || 3000                     // process.env.PORT if defined, 3000 otherwise
var menuData = require('./menuData')


app.engine('handlebars', express_handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get(['/', '/menu'], function (req, res, next) {   
    res.status(200).render('menuPage', {
        breakfast: menuData.breakfast,      // Breakfast Menu
        lunch: menuData.lunch,              // Lunch Menu
        dinner: menuData.dinner,            // Dinner Menu
        specials: menuData.specials         // Specials Menu
    })
})

app.get('*', function (req, res) {
    res.status(404).render('404', {})       // Displays 404 Error Message and gives status code 404
})



app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);       // Prints the port that server is listening on to console
});