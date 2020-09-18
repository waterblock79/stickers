var req=new XMLHttpRequest();
var res={};
var i;
req.open("GET",'resources/all.json',false);
req.send();
res=JSON.parse(req.responseText);
document.write("<span class='top_title'>"+res[getQueryVariable("id")].name+"</span><br/>");
if(res[getQueryVariable("id")].about!=undefined){document.write("<span class='top_about'><strong>关于表情</strong>："+res[getQueryVariable("id")].about+"</span><br/>");}
document.write("<span class='top_about'><strong>表情Tag</strong>："+getTag()+"</span><br/>");
document.write("<small><span class='top_about'>表情资源文件名："+res[getQueryVariable("id")].img+"</span></small><br/>");
window.onload=function (){
  document.getElementById("bqimg").src="resources/"+res[getQueryVariable("id")].img;
};//因为这个js在<img>前面执行，所以执行时还没有<img>，所以页面需要完全加载后再设置img.src

function getTag() {
   var tags="";
   for(var i=0;i<res[getQueryVariable("id")].tag.length;i++)
   {
      tags=tags+"<span style='line-height:200%;background:red;border-radius:2px;padding:0.1em 0.3em 0.1em 0.3em;'>"+res[getQueryVariable("id")].tag[i]+"</span>&nbsp;";
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
