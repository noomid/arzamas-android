'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
// import { AnimatedCircularProgress } from 'react-native-circular-progress';
// var CircularProgressDisplay = require('react-native-progress-circular');

var {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
} = React;

var { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
    container : {
        backgroundColor: 'none',
    },

    image: {
        flex: 1,
        width: 320,
        height: 140,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    nextButton : {
        width:45,
        alignItems: 'center',
    },

    content : {
        alignItems: 'center',
        justifyContent: 'center',
    },

    title : {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    authors : {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    rotated : {
        transform: [{rotate : '-90deg'}],
    },
    
    progress : {
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{rotate : '-90deg'}],
    },
    progressText : {
        marginTop: -20,
        marginBottom: 20,
        color: '#fff',
        fontSize: 8,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },

    line : {
        width: 25,
        borderTopColor: '#fff',
        borderTopWidth: 2
    },
});

var CatalogItem = React.createClass({
    onPressBack: function() {
        console.log('course select', this.props.course.title);
        this.props.navigator.push({ id: 'course', course: this.props.course});
    },

    //https://github.com/bgryszko/react-native-circular-progress
    render: function() {
        //course
        var progress = 5;
        var innerDisplay = (
          <View style={{width: 200, height: 200, flex:1, justifyContent: 'center',
          alignItems: 'center', backgroundColor: '#036282'}}>
            <Text style={{fontSize: 30}}>{progress + "%"}</Text>
          </View>
        );
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPressBack}>
                <Image source={{uri: this.props.course.image}} style={styles.image}>
                    <View style={styles.nextButton}></View>
                    <View style={styles.content}>
                        <View style={styles.progress}>
                        </View>
                        <Text style={styles.progressText}>
                          {progress/10}
                        </Text>
                        <View style={styles.line} />
                        <Text style={styles.title}>{this.props.course.title}</Text>
                        <Text style={styles.authors}>{this.props.course.authors}</Text>
                    </View>
                    <View style={styles.nextButton}><Image source={require('../images/nextButton.png')} /></View>
                </Image>
                </TouchableOpacity>
            </View>
        );
    }
});

module.exports = CatalogItem;
