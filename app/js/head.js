var galleryApp = angular.module('galleryApp', []);

galleryApp.controller('GalleryImageController', function ($scope) {
  $scope.images = [
    {
        src: '/app/images/2-nyc-empire-nina-papiorek.jpg',
        tags: 'nyc,skyline,day'
    },
    {
        src: '/app/images/nyc-skyline-2.jpg',
        tags: 'nyc,skyline,day'
    },
    {
        src: '/app/images/nyc-skyline-3.jpg',
        tags: 'nyc,skyline,night'
    },
    {
        src: '/app/images/nyc-skyline.jpg',
        tags: 'nyc,skyline,night'
    },
    {
        src: '/app/images/NYC.jpg',
        tags: 'nyc,skyline,day'
    },
    {
        src: '/app/images/Top_10_Universities_in_New_York_City.jpg',
        tags: 'nyc,skyline,night'
    }
  ];
});