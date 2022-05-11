// 1.求出来到底有多少列
window.onload = function(){
    // 实参是名字    id名字  和   class名字
    fn("content","box");

    var sj = [
        "images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg","images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg","images/19.jpg","images/20.jpg"
    ]
    // jz();
    // 加载图片
    window.onscroll = function(){
        if(jz()){
            var parent = document.getElementById("content");
            for(var i=0;i<sj.length;i++){
                var box = document.createElement("div");
                box.className = "box";
                var pic = document.createElement("div");
                pic.className = "pic";
                var img = document.createElement("img");
                img.src = sj[i];
                box.appendChild(pic);
                pic.appendChild(img);
                parent.appendChild(box);
                fn("content","box");
            }
        }
    }
}
// 1.计算整个页面有多少列
// 获取元素
// 2.计算父级的宽度，并且居中


// 封装函数
function fn(parent,child){
    // parent对应上面调用的content,child对应上面调用的box
    // 获取父元素
    var fu = document.getElementById(parent);           //content
    // 获取box
    // var zi = document.getElementsByClassName(child);
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
    // fu.style.margin = "0 auto";
    // fu.style.width = lie*boxW+"px";

    // 创建一个数组，存放每一列的高度
    var arr = [];
    for(var i=0;i<boxs.length;i++){
        // 保存第一行的高度
        if(i<lie){      //i  0 1 2 3 4
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
            arr[index]+=boxs[i].offsetHeight;
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


function jz(){
    // 1.最后一张图片距离顶部的位置
    // 2.最后一张图片高度的一半
    // 3.页面可视区域高度
    // 4.页面滚走距离
    var parent = document.getElementById("content");
    var boxs = ziyuansu(parent,"box");
    // console.log(boxs);
    // 获取最后一张图片距离顶部的位置
    var gao1 = boxs[boxs.length-1].offsetTop;
    // 获取最后一张图片高度的一半
    var gao2 = boxs[boxs.length-1].offsetHeight/2;
    // 页面可视区域高度
    var gao3 = document.documentElement.clientHeight;
    // 页面滚走距离
    var gao4 = document.documentElement.scrollTop;
    return (gao3+gao4>=gao1+gao2)?true:false;
    // 返回值是true的情况下进行加载

}