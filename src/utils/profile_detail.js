var request=require('request');
const calc=require('./calc.js')
profile_detail=(valued,callback)=>{
const url=valued;
request({url:url,json:true},(error,response)=>{
    if(error)
    {
        callback("Wifi Recharge krwa",'kuch bhi nhi')
    }
    else if(response.body.status!=="OK")
    {
        callback("wrong name typed bro!",'kuch bhi nhi')
    }
    else
    {
        // var get_data=(dataa,callback)=>
        // {
        //     setTimeout(()=>{
        //         const data ={
        //             kela:2,
        //             angoor:3
        //         }
        //         callback(data);
        //     },2000)
        // }
        // get_data("hello",(data)=>{
        //     console.log(data);
        // })
      // console.log(response.body.result[0]);
       // var last=response.body.result;
       // var bookCount = Object.keys(last).length;
     // console.log(bookCount);
      //  console.log(last);
        //callback("Fine",response.body.result[bookCount-1])
       // console.log(response.body);
      // console.log("hell2");


    //    if(response.body.status==="OK")
    //    {
           var ob=response.body.result;
           //console.log(ob)
           var obj={
               handle:ob[0].handle,
               rating:ob[0].rating,
               maxrating:ob[0].maxRating

           }
    //    var obj;
          // console.log(obj)
          callback(obj);
    //    }
    //    else
    //    {
    //        return "error in name ...."
    //    }


    //    var obj= calc(response.body.result);
    //    var obj1=profile_detail("kumar_naveen");
      // console.log(obj)
      //console.log("hell1");
        
    }

})
}

module.exports=profile_detail;
