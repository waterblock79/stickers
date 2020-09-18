# meme-collect
这是一个收集各种表情、段子（目前还没做）的存储库。  
表情、段子均来自互联网，如有侵权请发送Issue删除。

---

## 如何贡献表情(或表情包)、段子？  
* 方案1 :   
   1. 创建一个自己的分支;  
   2. 在`resources/all.json`最后添加表情的信息，格式如下  
    ```json
    {
       "name":"这个表情的名字",
       "tag":[
        "你觉得这个表情的特点",
        "可以参考其他的表情的Tag哦！"
       ],
       "img":"图片文件名（如：“sample.png”）",
       "about":"关于这个表情的描述"
    }
    ```
   3. 在resources文件夹中添加表情或表情包。  
      （注：如果您正在贡献系列表情，可以在“img”中填写预览图的文件名，在“about”中标注系列表情的下载地址（最好为Zip文件，链接支持html语法））  
   4. 发送[Pull Requests](https://github.com/waterblock79/meme-collect/pulls)

* 方案2 :  
   
   1. 发送Issue，并注明表情的名称、Tag、文件名和描述。