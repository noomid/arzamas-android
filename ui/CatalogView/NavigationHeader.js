'use strict';

var React = require('react-native');

var {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} = React;

var styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        height: 128/2,
        paddingTop:35,
        paddingBottom:10,
    },
    backButton : {
        width:45,
        alignItems: 'center',
    },
    title : {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        flex:1,
        textAlign:'center',
        marginRight:45,
    },
    titleView : {
        alignItems:'center',
    },
});

var NavigationHeader = React.createClass({

    onPressBack: function() {
        console.log('back press');
        this.props.navigator.pop();
    },

    render: function() {
        return (
            <View style={styles.background}>
                <TouchableOpacity style={styles.backButton} onPress={this.onPressBack}>
                <Image source={require('../images/prevButton.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
            </View>
        );
    }
});

module.exports = NavigationHeader;
