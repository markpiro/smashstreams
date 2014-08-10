$(document).ready(function() {

  function create_html_string(data) {
    html_str = '<a href="' + data.channel.url + '"target=_blank title="' +
                    data.channel.status + '"><div class="col-xs-5 main-col-left">' +
                    data.channel.display_name + '</div></a> \
                    <div class="col-xs-5 main-col-right">' + data.viewers + '</div>';
    return html_str;
  }

  base_url = 'https://api.twitch.tv/kraken/streams?game=';

  $.getJSON(base_url + 'Super%20Smash%20Bros.&callback=?',
    function(d) {
      $.each(d.streams, function(i, stream){
        $("#64").append(create_html_string(stream));
    });
  });

  $.getJSON(base_url + 'Super%20Smash%20Bros.%20Melee&callback=?',
    function(d) {
      $.each(d.streams, function(i, stream){
        $("#melee").append(create_html_string(stream));
    });
  });

  $.getJSON(base_url + 'Super%20Smash%20Bros.%20Brawl&callback=?',
    function(d) {
      $.each(d.streams, function(i, stream){
        $("#brawl").append(create_html_string(stream));
    });
  });

  $.getJSON(base_url + 'Project%20M&callback=?',
    function(d) {
      $.each(d.streams, function(i, stream){
        $("#projectm").append(create_html_string(stream));
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
