$("ul").on("click","li",function(){
	// // $(this).css("color","red");
	// // $(this).css("text-decoration","line-through");
	// if($(this).css("color")==="rgb(128, 128, 128)")
	// {
	// 	// $(this).css("color","black");
	// 	$(this).css({
	// 	color:"black";
	// 	textDecoration: "none"
	// });
	// }
	// else
	// {
	// 	$(this).css({
	// 	color:"gray";
	// 	textDecoration: "line-through"
	// });
	// }
	$(this).toggleClass("completed");

	
});
// click on x to delete todo
$("ul").on("click","span",function(event){
	// $(this).parent().remove();	// with the help of jquery library function we removing this element
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});
// $("ul").click(function(){

// });
// $("#container").click(function(){

// });
// $("body").click(function(){

// });
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText=$(this).val();
		

		$("ul").append("<li><span><i class='fa fa-trash' ></i></span>"+ todoText +"</li>")
		
		

	}	
	form.reset();
	
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
	
});