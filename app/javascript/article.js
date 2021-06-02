document.addEventListener("turbolinks:load", function(){
  $(function(){
    $(".title").on("click", function(){
      $(this).css("color", "black");
    })
  })
})