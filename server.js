// Server-Side JavaScript

//var path = require('path')

var express = require('express')
var express_handlebars = require('express-handlebars')
var app = express()
var port = process.env.PORT || 3000
var fs = require("fs")


app.engine('handlebars', express_handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.get(['/', '/index.html'], function (req, res, next) {
    fs.readFile("./public/index.html", function (error, data) {
        console.log("  -- URL:", req.url)
        res.writeHead(200, {
            'Content-Type': 'text/html'                                     // Status code 200, content type HTML
        })
        res.write(data)                                                     // Writes data of page
        res.end()
    //res.status(200).render('postPage', {
    //    post: postData
    })
})



app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log("== Server listening on port", port);
});