var buildAlbumThumbnail = function() {
  var template = 
    '<div class="collection-album-container col-md-2">'
    +   '<img src="/images/album-placeholder.png"/>'
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

  return $(template);
};

var numberOfAlbums = Math.floor(Math.random() * 75)+25;
console.log(numberOfAlbums);

var updateCollectionView = function() {
  var $collection = $('.collection-container .row');
  $collection.empty();

  for (var i = 0; i < numberOfAlbums; i++) {
    var $newThumbnail = buildAlbumThumbnail();
    $collection.append($newThumbnail);
  }
}

if (document.URL.match(/\/collection.html/)) {
  
  $(document).ready(function() {
    updateCollectionView();
  });
  
}