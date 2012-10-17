
$(document).ready(function(){
    $("#menu li").click(function(){
        var section_id = $(this).children("a").attr("id");
        $(".section").hide();
        $(".section").filter("."+section_id).show();
        $(this).siblings().find("a").removeClass("active");
        $(this).find("a").addClass("active");
    });
    $("#menu li:eq(4)").click() 
});

