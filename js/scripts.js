$(document).ready(function() {
  $("form#petSelector").submit(function(event){
    const hasYard = $("#yard").val();
    const goesOutdoors = $("#outdoors").val();
    
    if (hasYard === "yesYard"){
      
    }
    
    event.preventDefault();
  });
});