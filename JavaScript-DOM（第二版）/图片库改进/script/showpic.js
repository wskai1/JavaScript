function showpic(whichpic) {
    if (!whichpic.getAttribute || !document.getElementById) {
        return "该浏览器不支持"
    }
    var sourse = whichpic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", sourse)
    var description = document.getElementById("description")
    if(description){
        var text=whichpic.getAttribute("title")?whichpic.getAttribute("title"):""// var text = whichpic.getAttribute("title")
        description.innerText = text
    }
    return true
}

function onclick() {
    if (!document.getElementById || !document.getElementsByTagName) {
        return "浏览器不支持"
    }
    var piclist = document.getElementById("piclist").getElementsByTagName("a")
    if(!piclist){
        return "piclist元素不存在"
    }
    for (var i = 0, j = piclist.length; i < j; i++) {
        piclist[i].onkeypress=piclist[i].onclick;
        piclist[i].onclick = function () {
            return !showpic(this);
        }
    }
}

window.onload = onclick();
//
//
// function countBodyChildren() {
//     var  bodyChildren=document.getElementsByTagName("body")[0]
//     console.log(bodyChildren.length)
// }
// window.onload=countBodyChildren()