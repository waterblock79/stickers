var req=new XMLHttpRequest();
var res={};
var i;
req.open("GET",'resources/all.json',false);
req.send();
res=JSON.parse(req.responseText);
for(i=0;i<res.length;i++)
{
   document.write("<a href='"+"bq.html?id="+i+"'><div class='card' style='background:url(\"resources/"+res[i].img+"\");background-repeat:no-repeat;background-size:100% 100%;'>");
   document.write("<div class='card_about'><center>"+sub(res[i].name)+"</center></div>");
   document.write("</div></a>");
}

function sub(n)
{
   if(n.length>5) {
      return n.substring(0,5)+"...";
   }
   else {
      return n;
   }
}
