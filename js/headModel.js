document.write('<div class="top-header">'
+'<div class="loginBox fl">'
+'<ul>'
+'<li>你好！请<a href="#">登录</a></li>'
+'<li><a href="#">QQ登录</a></li>'
+'<li><a href="#">免费注册</a></li>'
+'<li><a href="../index2.html" class="backIndex">返回首页&lt;&lt;</a></li>'
+'</ul>'
+'</div>'
+'<div class="funcBox fr">'
+'<ul>'
+'<li><a href="#">买家中心</a></li>'
+'<li><a href="#">卖家中心</a></li>'
+'<li><a href="#">充值</a></li>'
+'<li><a href="#">提现</a></li>'
+'<li><a href="#">购物车</a></li>'
+'<li><a href="#">客服中心</a></li>' 
+'</ul>'
+'</div>'
+'</div>'
+'<div class="nav-header cl">'
+'<div class="logo fl">'
+'<a href="../index2.html"><h1 style="width:100px;margin:0px auto;font-size: 36px;color:black;">9126Logo</h1></a>'
+'</div>'
+'<div class="navBar fr">'
+'<div class="cl"></div>'
+'<ul>'
+'<li><a href="tradeUser.html">账号交易</a></li>'
+'<div class="underLine"></div>'
+'<li><a href="tradeEquip.html">装备交易</a></li>'
+'<li><a href="tradeMoney.html">金币交易</a></li>'
+'<li><a href="tradeCard.html">点卡交易</a></li>'
+'<li><a href="tradeMobileGame.html">手游交易</a></li>'
+'<li><a href="tradeWebGame.html">页游交易</a></li>'
+'<li><a href="tradePC.html">PC及次世代游戏</a></li>'
+'<li><a href="tradePlay.html">游戏代练</a></li>'
+'</ul>'
+'</div>'
+'</div>'
+'<div class="bigImg">'
+'<div class="box">'
+'<div class="slogan">'
+'<h1>slogan</h1>'
+'</div>'
+'<div class="backDiv"></div>' 
+'<div class="searchBox">'
+'<form>'
+'<input type="text" placeholder="游戏名称" class="gameShow">'
+'<input type="text" placeholder="游戏区" class="areaShow">'
+'<input type="text" placeholder="游戏服务器" class="serverShow">'
+'<input type="text" placeholder="商品分类" class="goodsShow">'
+'<input type="text" placeholder="关键字">'
+'<input type="submit" value="搜索" class="submitBtn">'
+'</form>'
+'<script src="../js/showChoiceBox.js"></script>'
+'</div>'
+'<script>'
+'setInterval(function(){'
    +'var seLeft=$(".searchBox").offset().left-25;'
    +'$(".backDiv").css({'
        +'"left":seLeft'
    +'})'
+'},50);'
+'</script>'
+'<div class="hotSearch">'
+'<ul>热门搜索:'
+'<li><a href="#">魔兽世界</a></li>'
+'<li><a href="#">地下城与勇士</a></li>'
+'<li><a href="#">仙侠情缘</a></li>'
+'<li><a href="#">问道</a></li>'
+'<li><a href="#">天涯明月刀</a></li>'
+'<li><a href="#">天谕</a></li>'
+'<li><a href="#">穿越火线</a></li>'
+'<li><a href="#">逆战</a></li>'
+'<li><a href="#">冒险岛</a></li>'
+'</ul>'
+'</div>'
+'</div>'
+'</div>'
+'<div class="twoModule">'
+'<div class="moduleBox">'
+'<a class="fl" href="estimate.html"><h1>我要评估</h1></a>'
+'<a class="fl" href="buy.html"><h1>求购专区</h1></a>'
+'<div class="cl"></div>'
+'</div>'
+'</div>'
+'<script src="../js/tagChange.js"></script>'
+'<script>$(document).ready(function(){'
+'tagChange(".showBox .topBox")})</script>');

