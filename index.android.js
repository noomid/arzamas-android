/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var WelcomeView = require('./ui/WelcomeView');
var CatalogView = require('./ui/CatalogView');
var CourseView = require('./ui/CourseView');

var {
  AppRegistry,
  Navigator,
} = React;

var App = React.createClass({
  renderScene: function(route, nav) {
      console.log(route);
        switch (route.id) {
            case 'catalog':

                return <CatalogView navigator={nav} lang={route.lang} />;
            case 'course':

                return <CourseView navigator={nav} course={route.course} />;
            case 'challenge':

                return <ChallengeView navigator={nav} edisod={route.edisod} />;
            default:

                return (
                    <WelcomeView
                      navigator={nav}
                    />
                );
        }
    },

    render: function() {
        return (
            <Navigator
              initialRoute={{ message: 'Arzamas Game', }}
              renderScene={this.renderScene}

              configureScene={(route) => ({
                  ...route.sceneConfig || Navigator.SceneConfigs.HorizontalSwipeJump,
                  gestures: route.gestures
              })}
            />
        );
    }
});

AppRegistry.registerComponent('arzamas_android', () => App);
