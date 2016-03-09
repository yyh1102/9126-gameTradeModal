var tagChange=(function(){
    return function(parent){
        var tagString=parent+" ul li";
        var tagDiv=$(tagString);
        for(var i=0;i<tagDiv.length;i++){
            tagDiv.eq(i).click(function(){
                $(this).addClass('active');
                tagDiv.not(this).removeClass('active');
            })
        }
    }
})();
