angular.module('starter.controllers', [])

.filter('reverse', function () {  // custom filter to reverse lists
        return function (items) {
            return items.slice().reverse();
        }
    })
.controller('PlayerCtrl', function($scope,gitEventFactory) {
    $scope.myVideo = document.getElementById("video1");


    $scope.users = [];
    $scope.userInterval = 25;
    $scope.userCounter = 0;
    $scope.playPause = function(){
        if ($scope.myVideo.paused){
            $scope.myVideo.play();
        } else {
            $scope.myVideo.pause();
        }
    };

    $scope.makeSmall = function() {
        $scope.myVideo.width = 120;
    };
    $scope.makeLarge = function() {
        $scope.myVideo.width = 320;
    };

    $scope.$on('locationUpdate',
        function(event, obj) {

            $scope.userCounter = $scope.userCounter + 1;
            if( ($scope.userCounter % $scope.userInterval )==1) {

                console.log(obj);


                $scope.users.push( {
                    name:obj.user.name,
                    avatar_url:obj.event.actor.avatar_url,
                    timestamp:obj.event.created_at,
                    event:obj.event.type,
                    location:obj.user.location

                });



                $scope.$apply();
            }
            });




})





.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})
.controller('FavoritesCtrl', function($scopeFriends) {
  $scope.friends = Friends.all();
});
