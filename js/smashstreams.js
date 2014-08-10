$(document).ready(function() {
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        // $("#64").append('<div class="col-xs-5 main-col-left"> <a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></div><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
        $("#64").append('<a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'"><div class="col-xs-5 main-col-left"> '+stream.channel.display_name+' </div></a><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');

    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20Melee&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        // $("#melee").append('<div class="col-xs-5 main-col-left"> <a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></div><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
        $("#melee").append('<a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'"><div class="col-xs-5 main-col-left"> '+stream.channel.display_name+' </div></a><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Super%20Smash%20Bros.%20Brawl&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        // $("#brawl").append('<div class="col-xs-5 main-col-left"> <a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></div><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
        $("#brawl").append('<a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'"><div class="col-xs-5 main-col-left"> '+stream.channel.display_name+' </div></a><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
    });
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?game=Project%20M&callback=?', function(d) {
    $.each(d.streams, function(i, stream){
        // $("#projectm").append('<div class="col-xs-5 main-col-left"> <a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'">'+stream.channel.display_name+'</a></div><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
        $("#projectm").append('<a href="'+stream.channel.url+'" target=_blank title="'+stream.channel.status+'"><div class="col-xs-5 main-col-left"> '+stream.channel.display_name+' </div></a><div class="col-xs-5 main-col-right">'+stream.viewers+'</div>');
    });
  });

  $('#btn-64').click(function(){
    $('#64').show();
    $('.header-col').css({"background-color":"#f9f9f9"});
    $(this).css({"background-color":"#ffe"});
    $('#melee').hide();
    $('#brawl').hide();
    $('#projectm').hide();
  });

  $('#btn-melee').click(function(){
    $('.header-col').css({"background-color":"#f9f9f9"});
    $(this).css({"background-color":"#ffe"});
    $('#64').hide();
    $('#melee').show();
    $('#brawl').hide();
    $('#projectm').hide();
  });

  $('#btn-brawl').click(function(){
    $('.header-col').css({"background-color":"#f9f9f9"});
    $(this).css({"background-color":"#ffe"});
    $('#64').hide();
    $('#melee').hide();
    $('#brawl').show();
    $('#projectm').hide();
  });

  $('#btn-pm').click(function(){
    $('.header-col').css({"background-color":"#f9f9f9"});
    $(this).css({"background-color":"#ffe"});
    $('#64').hide();
    $('#melee').hide();
    $('#brawl').hide();
    $('#projectm').show();
  });

});
