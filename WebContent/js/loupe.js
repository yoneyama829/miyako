
$(function(){

//global nav
 var btn = $(".mod_dropnavi parent");
 var submenu = $(".mod_dropnavi_child");
 var submenulink = $(".mod_dropnavi_child input #id");
    //click
    $(btn).bind("click", "focus", function(event){
     var shownav = $(this).find(".mod_dropnavi_child");
    if($(shownav).css("display")=="none"){
        $(shownav).slideDown("fast");
    }else{
        $(shownav).slideUp("fast");
   }
 });
  //hover
//    $(btn).hover(function () {
//     },
//      function () {
//        $(submenu).slideUp("fast");
//  });
});