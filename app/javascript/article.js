document.addEventListener("turbolinks:load", function(){
  $(function(){
    $(".title").on("click", function(){
      $.ajax({
        url: $(this).attr("action"),
        type: "get"
      }).done(function(json){
        $(`#article${json.article}`).text(`いいね！${json.like}`);
        if(json.liked == "like"){
          $(`#article${json.article}`).parent().addClass("active");
        }else{
          $(`#article${json.article}`).parent().removeClass("active");
        }
      })
    })
  })
})