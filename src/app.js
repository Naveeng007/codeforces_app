//main page for creating server
const express = require('express')
const path = require('path')
const app = express();
const get_data = require('./utils/cf_api.js')//get data function is here
//var fs = require('fs')

const port=process.env.PORT||3000
const hbs = require('hbs')
//setup path config
const publicDirectory = path.join(__dirname, '../public')//contains static files
const viewpath = path.join(__dirname, '../templates/views')//contains views
//const partialpath = path.join(__dirname, '../templates/partials') //just for using partials

//setup view and view templates
app.set('view engine', 'hbs')//setting view engine handlebars
app.set('views', viewpath);//path for view
app.use(express.static(publicDirectory));//for serving static things such as js,css,img..

//hbs.registerPartials(partialpath) //for partial which i haven't used

app.get('', (req, res) => {//default page
    var handle = req.query.handle;//when open page it must be with query of any handle
 //   console.log(handle);
    if (!handle) {//initially it will go here as no handle provided
      return  res.render("profile") //this is dashboard where we will type handle
        // return res.send({
        //     error: "May be handle field is empty or Net is not connected"
        // })
    }
    get_data(handle, (error, data) => {
        console.log(error);
        if (error != "Fine") {
            return res.send({
                error: error,
                data:data
            })
        }
  
        console.log(data.object2.g2)
    
      //object2 contains graph data
      //object1 contains profile data
        console.log(data.object2.g1)
        //     console.log(data.object2.g1);
        
        var val = {

            handle: data.object1.handle,
            max: data.object1.maxrating,
            rating: data.object1.rating,
            solved: data.object2.total,
            color:col,
            
            g1: {
                a1: data.object2.g1,
                a2: data.object2.g2

            }
        }

        
        //res.send(val);

        //val contains data which is used in handlebar for showing on frontend
        res.render("index", val);
    })
    console.log("checkpoint 1")
    // res.render("index")
    //console.log(data1)

})




app.get('/', (req, res) => {
    res.render("index");
})
//these pages to be added soon...................
app.get('/dashboard', (req, res) => {
    res.render("dashboard")
})

app.get('/profile', (req, res) => {
    res.render("profile")
})

app.get('/profile/*', (req, res) => {
    res.send('404')
}) 

//if no page matches
app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(port, () => {
    console.log("app is listening...")
})