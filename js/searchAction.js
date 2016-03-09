$(document).ready(function(){
    var searchAction=(function(){
        return function(name){
            var inputBox=$("."+name+"Show");
            var choiceBox=$("."+name+"Choice");
            var list=choiceBox.children(".choiceMainBox").find("li");
            for(var i=0;i<list.length;i++){
                list.eq(i).click(function () {
                    var yourChoice = $(this).html();
                    inputBox.val(yourChoice);
                });
            }
            inputBox.focusin(function(){
                choiceBox.show(0);
                $(".showBox").not(choiceBox).hide(0);
            });
        }
    })();
    $(".searchBox").click(function(e){
        e.stopPropagation();
    });
    $("body").click(function(){
        $(".showBox").hide(0);
    });
    searchAction("game");
    searchAction("area");
    searchAction("server");
    searchAction("goods");
});