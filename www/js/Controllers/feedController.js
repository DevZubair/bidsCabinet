myApp.controller('FeedCtrl', function ($scope, $stateParams, OpenFB, $ionicLoading) {

    $scope.show = function() {
        $scope.loading = $ionicLoading.show({
            content: 'Loading feed...'
        });
    };
    $scope.hide = function(){
        $scope.loading.hide();
    };

    function loadFeed() {
        $scope.show();
        OpenFB.get('/' + $stateParams.personId + '/home', {limit: 30})
            .success(function (result) {
                $scope.hide();
                $scope.items = result.data;
                // Used with pull-to-refresh
                $scope.$broadcast('scroll.refreshComplete');
            })
            .error(function(data) {
                $scope.hide();
                alert(data.error.message);
            });
    }

    $scope.doRefresh = loadFeed;

    loadFeed();

});