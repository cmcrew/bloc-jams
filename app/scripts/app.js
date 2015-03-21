var albumPicasso = {
  name: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: '/images/album-placeholder.png',
  songs: [
    { name: 'Blue', length: '4:26' },
    { name: 'Green', length: '3:14' },
    { name: 'Red', length: '5:01' },
    { name: 'Pink', length: '3:21'},
    { name: 'Magenta', length: '2:15'}
  ]
};

blocJams = angular.module('BlocJams', ['ui.router']);

blocJams.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider.state('landing', {
    url: '/',
    views: {
      "viewA": { 
        templateUrl: '/templates/landing.html',
        controller: 'Landing.controller'
      }
    }
  });

  $stateProvider.state('collection', {
    url: '/collection',
    views: {
      "viewA": { 
        templateUrl: '/templates/collection.html',
        controller: 'Collection.controller'
      },
      "viewB": { 
        templateUrl: '/templates/player_bar.html',
        controller: 'Collection.controller'
      }
    }
  });

  $stateProvider.state('album', {
    url: '/album',
    views: {
      "viewA": { 
        templateUrl: '/templates/album.html',
        controller: 'Album.controller'
      },
      "viewB": { 
        templateUrl: '/templates/player_bar.html',
        controller: 'Album.controller'
      }
    }
  });

  $stateProvider.state('song', {
    url: '/song',
    views: {
      "viewA": { 
        templateUrl: '/templates/song.html',
        controller: 'Song.controller'
      }
    }
  });
}]);

blocJams.controller('Landing.controller', ['$scope', function($scope) {
  function shuffle(o) {
    for (var i = o.length; i > 0; i--) {
      var j = Math.floor(Math.random() * i);
      var x = o[i-1];
      o[i-1] = o[j];
      o[j] = x;
    } 
    return o;
  };
  $scope.subText = "Turn the music up!";
  $scope.appName = "Bloc Jams"
  $scope.subTextClicked = function() {
    $scope.subText += '!';
  };
  $scope.albumURLs = [
    '/images/album-placeholders/album-1.jpg',
    '/images/album-placeholders/album-2.jpg',
    '/images/album-placeholders/album-3.jpg',
    '/images/album-placeholders/album-4.jpg',
    '/images/album-placeholders/album-5.jpg',
    '/images/album-placeholders/album-6.jpg',
    '/images/album-placeholders/album-7.jpg',
    '/images/album-placeholders/album-8.jpg',
    '/images/album-placeholders/album-9.jpg',
  ];
  $scope.shuffleImages = function() {
    shuffle($scope.albumURLs);
  };
}]);

blocJams.controller('Collection.controller', ['$scope', function($scope) {
  $scope.hideOverlay = true;
  $scope.albums = [];
  for (var i = 0; i < 33; i++) {
    $scope.albums.push(angular.copy(albumPicasso));
  }
}]);

blocJams.controller('Album.controller', ['$scope', function($scope) {
  $scope.album = angular.copy(albumPicasso);
  var hoveredSong = null;
  var playingSong = null;

  $scope.onHoverSong = function(song) {
    hoveredSong = song;
  };

  $scope.offHoverSong = function(song) {
    hoveredSong = null;
  };

  $scope.getSongState = function(song) {
    if (song === playingSong) {
      return 'playing';
    }
    else if (song === hoveredSong) {
      return 'hovered';
    }
    return 'default';
  };

  $scope.playSong = function(song) {
    playingSong = song;
  };

  $scope.pauseSong = function(song) {
    playingSong = null;
  };
}]);

blocJams.controller('Song.controller', ['$scope', function($scope) {
  console.log("Song Template");
}]);
