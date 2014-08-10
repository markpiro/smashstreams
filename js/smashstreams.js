$(document).ready(function() {
  function create_html_string(data) {
    html_str = '<a href="' + data.channel.url + '"target=_blank title="' +
                    data.channel.status + '"><div class="col-xs-5 main-col-left">' +
                    data.channel.display_name + '</div></a> \
                    <div class="col-xs-5 main-col-right">' + data.viewers + '</div>';
    return html_str;
  }

  base_url = 'https://api.twitch.tv/kraken/streams?game=';

  apis = {
    'SuperSmashBros': 'Super%20Smash%20Bros.&callback=?',
    'SuperSmashBrosMelee': 'Super%20Smash%20Bros.%20Melee&callback=?',
    'SuperSmashBrosBrawl': 'Super%20Smash%20Bros.%20Brawl&callback=?',
    'ProjectM': 'Project%20M&callback=?'
  };

  for (key in apis) {
    $.getJSON(base_url + apis[key], function(d) {
      $.each(d.streams, function(i, stream) {
        s = stream.game.replace(/[\s.]/g, '');
        $('#' + s).append(create_html_string(stream));
      });
    });
  }

  $('.game').click(function() {
    $('.header-col').css({"background-color":"#f9f9f9"});
    $(this).css({"background-color":"#ffe"});
    $('.gamelist').each(function() {
        $(this).hide();
    });
    $('#' + this.title).show();
  });
});
