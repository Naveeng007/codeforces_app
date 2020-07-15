var request=require('request');
const calc=require('./calc.js')
profile_detail=(valued,callback)=>{
const url=valued;
request({url:url,json:true},(error,response)=>{
    if(error)
    {
        callback("Wifi Recharge krwa bhai",'kuch bhi nhi')
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
 


    
           var ob=response.body.result;
           var obj={
               handle:ob[0].handle,
               rating:ob[0].rating,
               maxrating:ob[0].maxRating,
               contribution:ob[0].contribution,
               friends:ob[0].friendOfCount,
               lastonline:ob[0].lastOnlineTimeSeconds

           }
   
          callback(obj);
    
        
    }

})
}

module.exports=profile_detail;
