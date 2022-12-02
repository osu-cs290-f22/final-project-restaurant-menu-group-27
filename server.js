// Server-Side JavaScript

//var path = require('path')

var express = require('express')
var express_handlebars = require('express-handlebars')
var app = express()
var port = process.env.PORT || 3000
var fs = require("fs")
var http = require("http")
var menuData = require('./menuData')


app.engine('handlebars', express_handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get(['/', '/index.html'], function (req, res, next) {       // displays index.html
    res.status(200).render('menuPage', {
        post: menuData
    })
})

app.get('*', function (req, res) {
    res.status(404).render('404', {})
})


/*var server = http.createServer(function (req, res) {                            // Begins server

    if (req.url == ("/index.html")) {                                           // Checks against requested URL
        fs.readFile("./public/index.html", function (error, data) {
            console.log("  -- URL:", req.url)
            res.writeHead(200, {
                'Content-Type': 'text/html'                                     // Status code 200, content type HTML
            })
            res.write(data)                                                     // Writes data of page
            res.end()
        })
    }
})*/


/*app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
});*/

app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
});