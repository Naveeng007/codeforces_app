const get_data=require('./cf_api.js')
const calc=require('./calc.js')
const profile=require('./profile_detail.js')
const fs=require('fs');
// const { profile } = require('console');
var val;
get_data("https://codeforces.com/api/user.status?handle=kumar_naveen&from=1",(error,data)=>{
    
    if(error!=="Fine")
        console.log(data)
    console.log("cf_fun")
    console.log(data)
   // else
  //  fs.writeFileSync(JSON.stringify(data),'./data.json')
 //  var obj= calc(data);
   
   
})

