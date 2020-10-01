var req=new XMLHttpRequest();
var res={};
var i;
req.open("GET",'resources/all.json',false);
req.send();
res=JSON.parse(req.responseText);
document.getElementById("bqimg").src = "resources/" + res[getQueryVariable("id")].img;
document.getElementById("bqname").innerHTML = res[getQueryVariable("id")].name;
document.getElementById("bqtags").innerHTML = getTag();
if (res[getQueryVariable("id")].about!=undefined){document.getElementById("bqabout").innerHTML = res[getQueryVariable("id")].about;}
function getTag() {
   var tags="";
   for(var i=0;i<res[getQueryVariable("id")].tag.length;i++)
   {
      tags += "<span style='line-height:200%;background:red;border-radius:2px;padding:0.1em 0.3em 0.1em 0.3em;opacity:0.5;color:white;'>"+res[getQueryVariable("id")].tag[i]+"</span>&nbsp;";
   }
   return tags;
}

//==以下代码来自Runoob.com/w3cnote/js-get-url-param.html==
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
