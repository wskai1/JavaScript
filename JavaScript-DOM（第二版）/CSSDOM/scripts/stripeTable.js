function addLoadEvent(func) {
    var oldload=window.onload;
    if (typeof window.onload!="function"){
        window.onload=func;
    } else {
        window.onload=function () {
            oldload();
            func();
        }
    }
}
 function stripeTables() {
    if (!document.getElementsByTagName) return false;
    var trs=document.getElementsByTagName("table")[0].getElementsByTagName("tr");
    var s=false;
    for (var i=0;i<trs.length;i++){
        if (s==true){
            trs[i].style.backgroundColor="#ffc"
            s=false;
        }else s=true
    }
 }
 addLoadEvent(stripeTables) //可以实现CSS中的 tr:nth-child(odd){background-color: #ffc;}