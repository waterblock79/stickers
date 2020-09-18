var req=new XMLHttpRequest();
var res={};
//Req      : Request对象
//Res[]    : 资源JSON
//==========================
req.open("GET",'resources/all.json',false);
req.send();
res=JSON.parse(req.responseText);

function go()
{
   var keyword=document.getElementById("search").value;
   var result=[];
   var resultvalue=[];
   //KeyWord  : 搜索关键词
   //Result[] : 搜索结果(ID)
   //Result.Value[] : 搜索结果价值
   //==================================================
   document.getElementById("result").innerHTML="<br/>";
   for(i=0;i<res.length;i++)
   {
      res[i].name.split("").forEach(function(item)
      {//该层为将Name中每个字循环查找
         if(keyword.indexOf(item)!=-1)//如果搜索词中包含这个词，就：
         {
            gotit(i);
         }
      });
      res[i].tag.forEach(function(item)
      {//该层为循环每个Tag
         item.split("").forEach(function(item)
         {//该层为将Tag中每个字循环查找
            if(keyword.indexOf(item)!=-1)//如果搜索词中包含这个词，就：
            {
               gotit(i);
            }
         });
      });
   }
   sortresult();
   for(var i=0;i<result.length;i++)
   {
      document.getElementById("result").innerHTML+="<span style='position:relative;color:white;left:10%;font-size:125%'><a href='bq.html?id="+result[i]+"'>"+res[result[i]].name+"</a></span></br>";
      document.getElementById("result").innerHTML+="<span style='position:relative;color:white;left:10%;'>表情Tag："+getTag(result[i])+"</span><br/>";
   }
   //========== 搜索到的操作 =========
   function gotit(i)
   {
      //备注 : i即为表情ID
      if(result.indexOf(i)==-1)//如果当前搜索结果列表中不包含这个结果，就push进去这个结果
      {
         result.push(i);
         resultvalue.push(1);
      }
      if(result.indexOf(i)!=-1)//如果包含，就把这个搜索结果的价值++
      {
         resultvalue[result.indexOf(i)]++;
      }
   }
   //========= 根据搜索结果价值进行二分排序 =========
   function sortresult()
   {
      qsort(0,result.length-1);
      function par(p,q)
      {
         var j=p;
         for(var i=p+1;i<=q;i++)
         {
            if(resultvalue[i]>=resultvalue[p])
            {
               var swap;
               //SWAP resultvalue[i] with resultvalue[++j]
               swap=resultvalue[i];
               resultvalue[i]=resultvalue[++j];
               resultvalue[j]=swap;
               //SWAP result[i] with result[j]
               swap=result[i];
               result[i]=result[j];
               result[j]=swap;
            }
            var swap;
            //SWAP result[p] with result[j]
            swap=result[p];
            result[p]=result[j];
            result[j]=swap;
            //SWAP resultvalue[p] with resultvalue[j]
            swap=resultvalue[p];
            resultvalue[p]=resultvalue[j];
            resultvalue[j]=swap;
         }
         return j;
      }
      function qsort(p,q)
      {
         if(p<q)
         {
            var mid=par(p,q);
            qsort(p,mid-1);
            qsort(mid+1,q);
         }
         return;
      }
   }
   //======= END =======
}
//========= 返回好看的Tag =========
function getTag(id) {
   var tags="";
   for(var i=0;i<res[id].tag.length;i++)
   {
      tags=tags+"<span style='line-height:200%;background:red;border-radius:2px;padding:0.1em 0.3em 0.1em 0.3em;'>"+res[id].tag[i]+"</span>&nbsp;";
   }
   return tags;
}
