'use strict';

var React = require('react-native');
var NavigationImageHeader = require('./NavigationImageHeader');
var CourseItem = require('./CourseItem');

var {
    StyleSheet,
    View,
    ListView,
} = React;

var styles = StyleSheet.create({
    course : {
        flex:1,
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    navigator : {
        height: 192/2,
    },
    listView : {
        backgroundColor: '#fff',
    },
});

var CourseView = React.createClass({
    getInitialState: function(){
        return {
            loaded: false
        }
    },

    componentDidMount: function() {
        var list = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.course = this.props.course;

        this.setState({
            dataSource: list.cloneWithRows(this.course.episods),
            loaded: true,
            courseProgress: '5/10'
        });
    },

    renderLoadingView: function() {

        return (
            <View style={styles.course}>
            </View>
        );
    },

    renderEpisod: function(episod, id, index) {
        
        return (
            <CourseItem episod={episod} index={parseInt(index)} navigator={this.props.navigator} />
        );
    },

    render: function() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.course}>
                <NavigationImageHeader navigator={this.props.navigator} title={this.course.title} image={this.course.image} progress={this.state.courseProgress} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderEpisod}
                    style={styles.listView}
                />
            </View>
        );
    }
});

module.exports = CourseView;
