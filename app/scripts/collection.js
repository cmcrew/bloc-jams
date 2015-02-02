var buildAlbumThumbnail = function() {
  var template = 
    '<div class="collection-album-container col-md-2">'
    + '  <div class="collection-album-image-container">'
    + '    <img src="/images/album-placeholder.png"/>'
    + '  </div>'
    +   '<div class="collection-album-info caption">'
    +     '<p>'
    +       '<a href="/album.html" class="album-name">The Colors</a>'
    +       '<br/>'
    +       '<a href="/album.html">Pablo Picasso</a>'
    +       '<br/>'
    +       'X song'
    +       '<br/>'
    +       'X:XX Total Length'
    +       '<br/>'
    +     '</p>'
    +   '</div>'
    + '</div>'
    ;

  return $(template);
};

var buildAlbumOverlay = function(albumURL) {
  var template = 
    '<div class="collection-album-image-overlay">'
    + '<div class="collection-overlay-content">'
    + '    <a class="collection-overlay-button" href="' + albumURL + '">'
    + '      <i class="fa fa-play"></i>'
    + '    </a>'
    + '    &nbsp;'
    + '    <a class="collection-overlay-button">'
    + '      <i class="fa fa-plus"></i>'
    + '    </a>'
    + '  </div>'
    + '</div>'
    ;
    return $(template);
}
var numberOfAlbums = Math.floor(Math.random() * 75)+25;

var updateCollectionView = function() {
  var $collection = $('.collection-container .row');
  $collection.empty();

  for (var i = 0; i < numberOfAlbums; i++) {
    var $newThumbnail = buildAlbumThumbnail();
    $collection.append($newThumbnail);
  }

  var onHover = function(e) {
    $(this).append(buildAlbumOverlay("/album.html"));
  };

  var offHover = function(e) {
    $(this).find('.collection-album-image-overlay').remove();
  };

  $collection.find('.collection-album-image-container').hover(onHover, offHover);
}

if (document.URL.match(/\/collection.html/)) {
  
  $(document).ready(function() {
    updateCollectionView();
  });
  
}