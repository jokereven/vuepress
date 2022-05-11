// 1.求出来到底有多少列
window.onload = function(){
    // 实参是名字    id名字  和   class名字
    fn("content","box");
}
// 封装函数
function fn(parent,child){
    // parent对应上面调用的content,child对应上面调用的box
    // 获取父元素
    var fu = document.getElementById(parent);           //content
    // 获取box
    var zi = document.getElementsByClassName(child);
    // console.log(fu)
    // console.log(zi)
    // 用一个变量接收获取到的所有的box
    // 获取到父级内部所有class名是box的元素
    var boxs = ziyuansu(fu,"box");
    // console.log(boxs);
    // 取出来一个盒模型的宽度
    var boxW = boxs[0].offsetWidth;
    // console.log(boxW);
    // 计算列数
    var lie = Math.floor(document.documentElement.clientWidth/boxW);
    // console.log(lie);
    // 计算content的宽度
    // 列数*盒模型宽度
    fu.style.cssText = "width:"+lie*boxW+"px;margin:0 auto;";
    // fu.style.width = lie*boxW+"px";

    // 创建一个数组，存放每一列的高度
    var arr = [];
    for(var i=0;i<boxs.length;i++){
        // 保存第一行的高度
        if(i<lie){
            arr[i] = boxs[i].offsetHeight;
            // console.log(arr);
        }else{
            // 找到数组当中的最小值
            // console.log(Math.min(10,20,30))
            var minIndex = Math.min.apply(null,arr);
            // console.log(minIndex);
            // 通过数组和最小值，找到这个最小值的下标值
            var index = zuixiaozhi(arr,minIndex);
            // console.log(index);
            // 设置定位
            boxs[i].style.position = "absolute";
            // top值就是数组当中最小的值
            boxs[i].style.top = minIndex+"px";
            // left就是最小值的下标*宽度
            boxs[i].style.left = index*boxW+"px";
            // arr[index]+=boxs[i].offsetHeight;
        }
    }
}
function ziyuansu(par,chl){
    // 将父级里面的所有class名字为box的元素取出来
    var arr = [];
    // 将父元素内部所有的元素全部取出来
    var yuansu = par.getElementsByTagName("*")
    // console.log(yuansu);         //90
    for(var i=0;i<yuansu.length;i++){
        // 进行判断，如果元素的class名字等于box，那就放到上面创建的空数组里
        if(yuansu[i].className==chl){
            // 数组添加
            arr.push(yuansu[i]);
        }
    }
    return arr;
}


function zuixiaozhi(arr,value){
    // arr是数组，value是最小值
    // 遍历所有数据
    for(var i in arr){
        // 判断
        if(arr[i]==value){
            return i;
        }
    }
}
