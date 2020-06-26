calc=(data)=>{
  // console.log(data);
  var ans=[]
  var i;
  console.log("calc");
 // console.log(data.length)
  for(i=0;i<data.length;i++)
  {
      var j;
    
      var check=1;
      var myProp = 'index';
      
      if(data[i].problem&&data[i].problem.rating)
      {
          if(data[i].problem.index&&data[i].verdict==='OK')
          {

          // console.log(1);
         
          var temp={
              contestId:data[i].contestId,
             index:data[i].problem.index,
            rating:data[i].problem.rating,
              tags:data[i].problem.tags,
              time:data[i].creationTimeSeconds
          }
          var flag=1;
          for(j=0;j<ans.length;j++)
          {
              if(temp.contestId==ans[j].contestId&&temp.index==ans[j].index)
                  {
                      flag=0;
                      break;
                  }
          }
          if(flag)
              ans.push(temp);
        }
      }
  
  }
  
  var maths=["math","probabalities","combinatorics","number theory","geometry"]//3
  var greedy=["greedy"]//4
  var dp=["dp"]//1
  var graph=["graphs","dfs and similar","flows","shortest paths","trees"]//2
  //console.log(ans);
  // console.log(data);

  i=0;
  //graph ....
  var m=0,g=0,d=0,gre=0,mi=0;
  var graph1=new Array();
   graph1[0]=new Array("string","maths","graph","dp","greedy","Misc");
 var gr=[]
   var r1=0,r2=0,r3=0,r4=0,r5=0;
  for(i=0;i<ans.length;i++)
  { 
    if(ans[i].rating>1000)
      continue;
   
    var j=0;
    var a1=0,a2=0,a3=0,a4=0,a5=0;
    for(j=0;j<ans[i].tags.length;j++)
    {
        var f=1;
      //  console.log(ans[i].tags[j]);
        for(k=0;k<maths.length;k++)
        {
         
            if(ans[i].tags[j]===maths[k])
              {
                f=0;
                a1=1;
              } 
        
        }
        for(k=0;k<greedy.length;k++)
        {
            if(ans[i].tags[j]===greedy[k])
             { a2=1;f=0;}
        }
        for(k=0;k<dp.length;k++)
        {
          if(ans[i].tags[j]===dp[k])
           { a3=1;f=0;}
        }
        for(k=0;k<graph.length;k++)
        {
          if(ans[i].tags[j]===graph[k])
           { a4=1;f=0;}
        }
        if(f)
          a5=1;
        f=0;
    }
    r1+=a1;
    r2+=a2;
    r3+=a3;
    r4+=a4;
    r5+=a5;
   
    a1=a2=a3=a4=a5=0;
  }

  m+=r1;
  g+=r2;
  d+=r3;
  gre+=r4;
  mi+=r5;
  graph1[1]=new Array('0-1000',r1,r2,r3,r4,r5);

  gr.push(r1)
  gr.push(r2)
  gr.push(r3)
  gr.push(r4)
  gr.push(r5)
  r1=r2=r3=r4=r5=0;
  
  for(i=0;i<ans.length;i++)
  { 
    if(ans[i].rating>1500||ans[i].rating<1100)
      continue;
   
    var j=0;
    var a1=0,a2=0,a3=0,a4=0,a5=0;
    for(j=0;j<ans[i].tags.length;j++)
    {
        var f=1;
      //  console.log(ans[i].tags[j]);
        for(k=0;k<maths.length;k++)
        {
         
            if(ans[i].tags[j]===maths[k])
              {
                f=0;
                a1=1;
              } 
        
        }
        for(k=0;k<greedy.length;k++)
        {
            if(ans[i].tags[j]===greedy[k])
             { a2=1;f=0;}
        }
        for(k=0;k<dp.length;k++)
        {
          if(ans[i].tags[j]===dp[k])
           { a3=1;f=0;}
        }
        for(k=0;k<graph.length;k++)
        {
          if(ans[i].tags[j]===graph[k])
           { a4=1;f=0;}
        }
        if(f)
          a5=1;
        f=0;
    }
    r1+=a1;
    r2+=a2;
    r3+=a3;
    r4+=a4;
    r5+=a5;
   
    a1=a2=a3=a4=a5=0;
  }
  graph1[2]=new Array('1100-1500',r1,r2,r3,r4,r5);

  gr.push(r1)
  gr.push(r2)
  gr.push(r3)
  gr.push(r4)
  gr.push(r5)

  m+=r1;
  g+=r2;
  d+=r3;
  gre+=r4;
  mi+=r5;
  r1=r2=r3=r4=r5=0;
  //console.log(r1,r2,r3,r4,r5);
  for(i=0;i<ans.length;i++)
  { 
    if(ans[i].rating>2000||ans[i].rating<1600)
      continue;
   
    var j=0;
    var a1=0,a2=0,a3=0,a4=0,a5=0;
    for(j=0;j<ans[i].tags.length;j++)
    {
        var f=1;
      //  console.log(ans[i].tags[j]);
        for(k=0;k<maths.length;k++)
        {
         
            if(ans[i].tags[j]===maths[k])
              {
                f=0;
                a1=1;
              } 
        
        }
        for(k=0;k<greedy.length;k++)
        {
            if(ans[i].tags[j]===greedy[k])
             { a2=1;f=0;}
        }
        for(k=0;k<dp.length;k++)
        {
          if(ans[i].tags[j]===dp[k])
           { a3=1;f=0;}
        }
        for(k=0;k<graph.length;k++)
        {
          if(ans[i].tags[j]===graph[k])
           { a4=1;f=0;}
        }
        if(f)
          a5=1;
        f=0;
    }
    r1+=a1;
    r2+=a2;
    r3+=a3;
    r4+=a4;
    r5+=a5;
   
    a1=a2=a3=a4=a5=0;
  }
 // console.log(r1,r2,r3,r4,r5);
  graph1[3]=new Array('1600-2000',r1,r2,r3,r4,r5);

  gr.push(r1)
  gr.push(r2)
  gr.push(r3)
  gr.push(r4)
  gr.push(r5)

  m+=r1;
  g+=r2;
  d+=r3;
  gre+=r4;
  mi+=r5;
  r1=r2=r3=r4=r5=0;
  //console.log(r1,r2,r3,r4,r5);
  for(i=0;i<ans.length;i++)
  { 
    if(ans[i].rating<2100)
      continue;
   
    var j=0;
    var a1=0,a2=0,a3=0,a4=0,a5=0;
    for(j=0;j<ans[i].tags.length;j++)
    {
        var f=1;
      //  console.log(ans[i].tags[j]);
        for(k=0;k<maths.length;k++)
        {
         
            if(ans[i].tags[j]===maths[k])
              {
                f=0;
                a1=1;
              } 
        
        }
        for(k=0;k<greedy.length;k++)
        {
            if(ans[i].tags[j]===greedy[k])
             { a2=1;f=0;}
        }
        for(k=0;k<dp.length;k++)
        {
          if(ans[i].tags[j]===dp[k])
           { a3=1;f=0;}
        }
        for(k=0;k<graph.length;k++)
        {
          if(ans[i].tags[j]===graph[k])
           { a4=1;f=0;}
        }
        if(f)
          a5=1;
        f=0;
    }
    r1+=a1;
    r2+=a2;
    r3+=a3;
    r4+=a4;
    r5+=a5;
   
    a1=a2=a3=a4=a5=0;
  }
 // console.log(r1,r2,r3,r4,r5);
  graph1[4]=new Array('2100-2500',r1,r2,r3,r4,r5);

  gr.push(r1)
  gr.push(r2)
  gr.push(r3)
  gr.push(r4)
  gr.push(r5)

  m+=r1;
  g+=r2;
  d+=r3;
  gre+=r4;
  mi+=r5;
//  console.log(graph1);
 var g2=[]
 
 g2.push(m);
 g2.push(g);
 g2.push(d);
 g2.push(gre);
 g2.push(mi);

  var graph2=new Array();
   graph2[0]=new Array("name","frequency");
  graph2[1]=new Array("Maths",m);
  graph2[2]=new Array("graph",g);
  graph2[3]=new Array("DP",d);
  graph2[4]=new Array("Greedy",gre);
  graph2[5]=new Array("Misc",mi);

  var obj={
    g1:gr,
    g2:g2,
    total:ans.length
  }

  return obj;
}
module.exports=calc;



