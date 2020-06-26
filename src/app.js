const express = require('express')
const path = require('path')
const app = express();
const get_data = require('./utils/cf_api.js')
var fs = require('fs')

const port=process.env.PORT||3000
const hbs = require('hbs')
//setup path config
const publicDirectory = path.join(__dirname, '../public')
const viewpath = path.join(__dirname, '../templates/views')
const partialpath = path.join(__dirname, '../templates/partials')

//setup view and view templates
app.set('view engine', 'hbs')
app.set('views', viewpath);
app.use(express.static(publicDirectory));

hbs.registerPartials(partialpath) //faltu

app.get('', (req, res) => {
    var handle = req.query.handle;
    console.log(handle);
    if (!handle) {
        return res.send({
            error: "you must provide valid handle"
        })
    }
    get_data(handle, (error, data) => {
        console.log(error);
        if (error != "Fine") {
            return res.send({
                error: "you must provide valid handle"
            })
        }
        data1 = data;
        console.log(data.object2.g2)
        var obj = {
            g1: data.object2.g1,
            g2: data.object2.g2,

        }
        //  var oo=JSON.stringify(obj)
        //  var arr=new Array()
        //  var i=0;
        //  for(i=0;i<data.object2.g1.lenght;i++)
        //  {
        //      var j=0;
        //     //  for(j=0;j<data.object2.g1[i].lenght;j++)
        //         arr.push(i);
        //  }
        console.log(data.object2.g1)
        //     console.log(data.object2.g1);
        var val = {

            handle: data.object1.handle,
            max: data.object1.maxrating,
            rating: data.object1.rating,
            solved: data.object2.total,
            // color:col,
            // g1:data.object2.g1,
            // g2:data.object2.g2,
            g1: {
                a1: data.object2.g1,
                a2: data.object2.g2

            }
        }

        // fs.writeFileSync('../public/css/data.json',oo);


        //  console.log(val)
        //res.send(val);
        res.render("index", val);
    })
    console.log("ddd")
    // res.render("index")
    //console.log(data1)

})


// app.get('/friends',(req,res)=>{
//     res.send("bachale bhai")
// })

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/dashboard', (req, res) => {
    res.render("dashboard")
})

app.get('/profile', (req, res) => {
    // if(!req.query.address){
    //     console.log(req.query);
    //     return res.send("glt hai bhai");
    // }
    res.render("profile")
})

app.get('/profile/*', (req, res) => {
    res.send('404')
}) //instead of profile in render send anohter error page
app.get('*', (req, res) => {
    res.send('404 page')
})

app.listen(port, () => {
    console.log("app is listening...")
})