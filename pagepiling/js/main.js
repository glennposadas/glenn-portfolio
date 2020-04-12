var deleteLog = false;

$(document).ready(function() {
    $('#pagepiling').pagepiling({
      menu: '#menu',
      anchors: ['profile', 'about', 'page3'],
      navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            'tooltips': ['Profile', 'About', 'Page 3', 'Page 4']
        }
  });
  });