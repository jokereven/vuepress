$(window).on("load",function(){
    
    fn();

    $(window).scroll(function(){
        if(gd()){
            // console.log("aa")
            $.ajax({
                // 传输类型
                type:"get",
                // 路径
                url:"index.json",
                // 是否异步
                async:true,
                // 执行成功函数
                success:function(date){
                    // console.log(date)
                    $(date).each(function(index,value){
                        var boxs = $("<div class='box'></div>")
                        var pics = $("<div class='pic'></div>")
                        var imgs = $("<img />")
                        // console.log(value.url);
                        imgs.attr("src",value.url);
                        boxs.append(pics);
                        pics.append(imgs);
                        $("#content").append(boxs);
                        fn()
                    })
                },
                // 执行失败的函数
                error:function(xhr){
                    document.write("<p style='font-size:60px;text-align:center;'>"+xhr.status+"<p>")
                }
            })
        }
    })


    $(window).resize(function(){
        fn();
    })

})

function fn(){
    // 获取到所有要操作的盒模型
    var boxs = $("#content>.box");
    // console.log(boxs);
    // 计算列数
    // 整体页面的宽度/一个盒模型宽度
    // 取出来一个盒模型的宽度
    var boxW = boxs.eq(0).outerWidth();
    // padding在内的全部获取，实际的宽度
    // console.log(boxW);
    // 计算列
    var lie = Math.floor($(window).width()/boxW);
    // console.log(lie);
    // console.log($(window).height())          浏览器窗口可用范围
    // console.log($(document).height())        整体文档的高度
    // 计算父级的宽度，并设置样式
    $("#content").css({
        "width":lie*boxW+"px",
        "margin":"0 auto"
    })
    // 创建一个空数组，用来存放每一列的高度
    var arr = [];
    boxs.each(function(index,value){
        // 取出来所有盒模型的高度
        var boxH = boxs.eq(index).outerHeight();
        if(index<lie){
            // 0 1 2 3 4 5
            arr[index] = boxH;
            // console.log(arr);
            boxs.eq(index).css("position","static");
        }else{
            // left   top
            // 取出数组的最小值
            var minH = Math.min.apply(null,arr);
            // console.log(minH);
            // 取出最小值的下标
            var minIndex = $.inArray(minH,arr);
            // console.log(minIndex);
            // console.log(value);
            // 设置css样式
            $(value).css({
                "position":"absolute",
                "left":minIndex*boxW+"px",
                "top":minH+"px"
            })
            arr[minIndex] += boxs.eq(index).outerHeight();
        }
    })
}

// 封装一个函数，用来判断是否加载
function gd(){
    var boxs = $("#content>.box");
    // 页面高度
    var winH = $(window).height();
    // 页面滚动距离
    var winS = $(window).scrollTop();
    // console.log(winH);
    // console.log(winS);
    // 获取最后一张图片中心点到页面顶部的距离
    // 最后一张图片距离顶部的位置+自身高度的一半
    var lastboxT = boxs.last().offset().top;
    // console.log(winH);
    // console.log(winS);
    // console.log(lastboxT);
    // console.log(lastboxT);
    // var lastboxT = boxs.last().get(0);
    // console.log(lastboxT.offsetTop);
    // 三元运算符给一个返回值
    return winH+winS>lastboxT?true:false;
}
