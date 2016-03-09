var ListChange=(function() {
        return function (box) {
            var list = $(box + " li")
            for (var i = 0; i < list.length; i++) {
                list.eq(i).click(function () {
                    var preItem = $(box + " .active");
                    preItem.children('.before').remove();
                    preItem.children('.info').remove();
                    if (box == '.unsoldAcc') {
                        preItem.children('.buyBtn').remove();
                    }
                    else {
                        preItem.children('.checkBtn').remove();
                    }
                    preItem.removeClass("active");
                    var nextItem = $(this);
                    nextItem.addClass("active");
                    var cl = $("<div class='before cl'></div>");
                    var info = box == '.unsoldAcc' ?$("<span class='info fl'>帝血弑天 男 86</span>"):$("<span class='info fl'>【逍遥 男 1...</span>");
                    var btn = box == '.unsoldAcc' ? $("<button class='buyBtn fr'>购买</button>") : $("<button class='checkBtn fr'>查看</button>");
                    cl.insertAfter(box+" .active .cost");
                    info.insertAfter(box+" .active .before");
                    btn.insertAfter(box+" .active .info");
                })
            }
        }
    }
)();
