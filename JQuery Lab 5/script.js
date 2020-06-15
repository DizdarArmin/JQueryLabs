function attachEvents()
{
    $("#items li").on("click", function(){ 
        $(this).toggleClass("selected");                             
    }); 



    $("#showTownsButton").on("click",function()
    {
       let selected = [];
       $(".selected").each(function()
       {
           selected.push($(this).text());
       })
       $("#selectedTowns").text("Selected towns: " + selected.join(", "));
    });
}