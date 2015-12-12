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
    backgroundImage: {
        flexDirection: 'row',
        backgroundColor: 'none',
        height: 192/2,
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
    line : {
        width: 25,
        borderTopColor: '#fff',
        borderTopWidth: 2
    },
});

var NavigationImageHeader = React.createClass({
    onPressBack: function() {
        console.log('back press');
        this.props.navigator.pop();
    },

    render: function() {
        return (
            <View>
            <Image style={styles.backgroundImage} source={{uri:this.props.image}}>
                <TouchableOpacity style={styles.backButton} onPress={this.onPressBack}>
                <Image source={require('../images/prevButton.png')} />
                </TouchableOpacity>
                <View style={styles.titleView}>
                    <Text style={styles.title}>{this.props.title.toUpperCase()}</Text>
                    <View style={styles.line} />
                    <Text style={styles.title}>{this.props.progress}</Text>
                </View>
            </Image>
            </View>
        );
    }
});

module.exports = NavigationImageHeader;
