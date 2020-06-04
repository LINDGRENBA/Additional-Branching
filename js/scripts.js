$(document).ready(function() {
  $("form#petSelector").submit(function(event){
    const hasYard = $("#yard").val();
    const yesOutdoors = $("#outdoors").val();
    
    if (hasYard === "yesYard" && yesOutdoors === "goesOutdoors"){
      $(".petOne").show();
      
    } else {
      $(".petTwo").show();
    }
    
    event.preventDefault();
  });
});
