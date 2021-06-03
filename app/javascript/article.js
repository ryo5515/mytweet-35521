document.addEventListener("turbolinks:load", function(){
  $(function(){
    $(".like").on("click", function(){
      $.ajax({
        url: $(this).attr("action"),
        type: "get"
      }).done(function(json){
        $(`#article${json.article}`).text(`いいね！${json.like}`);
        if(json.liked == "like"){
          $(`#article${json.article}`).addClass("active");
        }else{
          $(`#article${json.article}`).removeClass("active");
        }
      })
    })
    $("#follow").on("click", function(){
      $.ajax({
        url: $(this).attr("action"),
        type: "get"
      }).done(function(json){
        if(json.follow == "follow"){
          $("#follow").text("フォロー中");
          $("#follower").text(`フォロワー数:${json.follower}`);
          json.followers.forEach(function(follower){
            $("#follower").append(`
              <a href="${follower.link}">${follower.name}</a>さん 
            `);
          })
        }else{
          $("#follow").text("フォローする");
          $("#follower").text(`フォロワー数:${json.follower}`);
          json.followers.forEach(function(follower){
            $("#follower").append(`
              <a href="${follower.link}">${follower.name}</a>さん 
            `);
          })
        }
      })
    })
  })
})