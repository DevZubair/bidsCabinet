// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

//For web, ngFacebook in the injection

var myApp=angular.module('starter', ['ionic','openfb']);

myApp.run(function($ionicPlatform,$rootScope,$window, OpenFB,$state) {

    //For web,add $facebook

    OpenFB.init('778214432215760');

    $ionicPlatform.ready(function () {
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeStart', function(event, toState) {
        if (toState.name !== "home" && toState.name !== "app.logout" && !$window.sessionStorage['fbtoken']) {
            $state.go('home');
            event.preventDefault();
        }
    });

    $rootScope.$on('OAuthException', function() {
        $state.go('home');
    });


    //Code starts for Web Facebook Login

  /*  (function(){
        // If we've already installed the SDK, we're done
        if (document.getElementById('facebook-jssdk')) {return;}

        // Get the first script element, which we'll use to find the parent node
        var firstScriptElement = document.getElementsByTagName('script')[0];

        // Create a new script element and set its id
        var facebookJS = document.createElement('script');
        facebookJS.id = 'facebook-jssdk';

        // Set the new script's source to the source of the Facebook JS SDK
        facebookJS.src = 'http://connect.facebook.net/en_US/all.js';

        // Insert the Facebook JS SDK into the DOM
        firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }());*/

    //SDK ends for Web Facebook Login

    /*  $ionicPlatform.ready(function() {
     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
     // for form inputs)
     if(window.cordova && window.cordova.plugins.Keyboard) {
     cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
     }
     if(window.StatusBar) {
     StatusBar.styleDefault();
     }
     });
     */


});

myApp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    //For web, add $facebookProvider

    $httpProvider.defaults.useXDomain = true;

    //Remove the header containing XMLHttpRequest used to identify ajax call
    //that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    //SDK for Web Login Facebook
    /* $facebookProvider.setAppId('778214432215760');
     $facebookProvider.setVersion("v2.2");
*/

    $urlRouterProvider.otherwise('/');


    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller:'loginController'




    })



        .state('ionBarStripped',{
            abstract:true,
            templateUrl:"templates/ionBarStriped.html"
        })

        .state('ionBarStripped.yourTeam',{


            url:'/yourTeam',
            views:{
                yourTeamTab:{


                    templateUrl:"templates/yourCreatedTeams.html",
                    controller: 'yourTeamController'

                }

            }

        })

        .state('ionBarStripped.createTeam',{
            url:'/createTeamTab',
            views:{
                yourTeamTab:{

                    templateUrl:"templates/createTeamPage.html",
                    controller:"createTeam"
                }
            }

        })

        .state('ionBarStripped.allTeams',{


            url:'/allTeams',
            views:{
                allTeamsTab:{

                    templateUrl: "templates/allTeamsPage.html",
                    controller: 'allTeamController'

                }
            }

        })


        .state('loginPage.ionBarStriped.yourCreatedTeams.createTeam',{

            url:'/createTeam',
            templateUrl: "templates/createTeamPage.html",
            controller: 'createTeam'

        })

        .state('loginPage.ionBarStriped.yourCreatedTeams.teamInfo',{

            url:'/teamInfo',
            templateUrl: "templates/teamInfo.html",
            controller: 'teamController'

        })

        .state('loginPage.ionBarStriped.allTeams.teamInfo',{

            url:'/teamInfo',
            templateUrl: "templates/teamInfo.html",
            controller: 'teamController'

        });





});

myApp.controller('HomeTabCtrl', function($scope,$facebook) {

});

