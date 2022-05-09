function ajax(url, suFn, faFn) {
    var xhr;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("get",url);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                suFn(xhr.responseText);
            }else{
                faFn(xhr.status);
            }
        }
    }
}
