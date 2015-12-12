'use strict';

var React = require('react-native');
// var Dimensions = require('Dimensions');
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} = React;

// var { width, height } = Dimensions.get('window');

var styles = StyleSheet.create({
    container : {
        backgroundColor: 'none',
        flexDirection: "row",
        height: 73,

    },

    content : {
        borderBottomColor:"#f2f2f2",
        borderBottomWidth: 1,
        flex:1,
        justifyContent: "center"
    },

    title : {
        color: '#000',
        fontSize: 12,
        fontWeight: 'bold',
    },
    authors : {
        color: '#000',
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
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftPart : {
        width: 92,
        alignItems: 'center',
        justifyContent: 'center',
    }

});

var CourseItem = React.createClass({
    onPressEpisod: function() {
        
        this.props.navigator.push({ id: 'challenge', edisod: this.props.edisod});
    },

    render: function() {
        return (
            <View >
            <TouchableOpacity style={styles.container} onPress={this.onPressEpisod}>
                <View style={styles.leftPart}>
                    <View style={styles.progress}>
                        
                    </View>
                    <Text style={styles.progressText}>
                      {this.props.index+1}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.episod.title}</Text>
                    <Text style={styles.authors}>{this.props.episod.authors}</Text>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
});

module.exports = CourseItem;