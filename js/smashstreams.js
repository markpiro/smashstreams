$(document).ready(function() {
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#64Stream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20Melee&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#meleeStream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20Brawl&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#brawlStream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></td><td>'+stream.viewers+'</td></tr>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Project%20M&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        $("#pmStream").append('<tr><td><a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></td><td>'+stream.viewers+'</td></tr>');
    });
  });

  $('.64').click(function(){
    $('#64').show();
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#Melee').hide();
    $('#Brawl').hide();
    $('#ProjectM').hide();
  });

  $('.melee').click(function(){
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#64').hide();
    $('#Melee').show();
    $('#Brawl').hide();
    $('#ProjectM').hide();
  });

  $('.brawl').click(function(){
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#64').hide();
    $('#Melee').hide();
    $('#Brawl').show();
    $('#ProjectM').hide();
  });

  $('.pm').click(function(){
    $('th').css({"background-color":"#f5f5f5"});
    $(this).css({"background-color":"#ffe"});
    $('#64').hide();
    $('#Melee').hide();
    $('#Brawl').hide();
    $('#ProjectM').show();
  });

  $('th').hover(function(){
    $(this).css({"opacity":"0.6"});
  },function(){
    $(this).css({"opacity":"1"});
  }

  );

});