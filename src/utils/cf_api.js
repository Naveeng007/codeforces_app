var request=require('request');
const calc=require('./calc.js')
const profile_detail=require('./profile_detail.js')
get_data=(valued,callback)=>{
const url="https://codeforces.com/api/user.status?handle="+valued+"&from=1";
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
      console.log("hell2");
      var ur="https://codeforces.com/api/user.info?handles="+valued;
      profile_detail(ur,(obj)=>
       {
        var obj1= calc(response.body.result);
        var val={
            object1:obj,
            object2:obj1
        }
        // console.log("hell3");
         callback("Fine",val)
       });
       
       
    }

})
}

module.exports=get_data;
