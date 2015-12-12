'use strict';

var NavigationHeader = require('./NavigationHeader');
var CatalogItem = require('./CatalogItem');
var Course = require('../modules/Course');
var React = require('react-native');

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
        backgroundColor: '#222',
    },
    navigator : {
        height: 64,
    },
    listView : {
        backgroundColor: '#222',
    },
});

var CatalogView = React.createClass({
    getInitialState: function(){
        return {
            loaded: false
        }
    },

    componentDidMount: function() {
        var list = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2  
        });
        this.course = new Course(this.props.langID);
        this.data = this.course.getData();
        this.setState({
            loaded: true,
            dataSource: list.cloneWithRows(this.data.courses),
            courseTitle: this.data.title
        })
    },

    renderLoadingView: function() {
        return (
            <View style={styles.course}>
                <NavigationHeader navigator={this.props.navigator} title=""/>
            </View>
        );
    },

    renderCourse: function(course) {
        
        return (
            <CatalogItem course={course} navigator={this.props.navigator} />
        );
    },

    render: function() {
        
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View style={styles.course}>
                <NavigationHeader navigator={this.props.navigator} title={this.state.courseTitle}/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderCourse}
                    style={styles.listView}
                />
            </View>
        );
    }
});

module.exports = CatalogView;
