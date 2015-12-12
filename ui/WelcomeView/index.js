'use strict';

var ScrollableTabView = require('react-native-scrollable-tab-view');
var React = require('react-native');
var Dimensions = require('Dimensions');
var Lang = require('../modules/lang');

var {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} = React;

var { width, height } = Dimensions.get('window');


var styles = StyleSheet.create({
    wrapper: {

    },
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lang: {
        color: '#fff',
        fontSize: 9,
        fontWeight: 'bold',
        marginTop: 15,
    },
    card: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 315,
    },
    play: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    button: {
        width: 160,
        height: 45,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    header: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 275/2,
        width: width,
        alignItems: 'center',
        backgroundColor: 'none',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        width: width,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    buttonInfo: {
        width: 40,
        height: 40,
        borderWidth: 2,
        marginHorizontal: 10,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

    controlButtons: {
        paddingHorizontal: 30,
        paddingTop: 330,
        alignItems: 'flex-start',
    },
});

var WelcomeView = React.createClass({
    onPressFeed: function(langID) {
        
        // Lang.setLang(langID);
        this.props.navigator.push({ id: 'catalog', lang: langID});
    },
    
    getInitialState: function(){
        return {
            loaded: false
        }
    },

    componentDidMount: function() {
        this.data = Lang.getData();
        this.setState({
            loaded: true
        });
    },

    render: function() {
        if (!this.state.loaded) {
            return (
                <View></View>
            )
        } else {
            return (
                <ScrollableTabView renderTabBar={() => <View />}>
                    {this.data.langs.map(function(lang) {
                        var data = this.data[lang];

                        return (
                            <View key={lang} tabLabel={data.language} >
                                <View style={styles.slide}>
                                    <Image style={styles.card} source={{uri: data.image, width:width, height:height}}>
                                        <TouchableOpacity onPress={this.onPressFeed.bind(this, lang)}>
                                            <View style={styles.button}><Text style={styles.play}>{data.title.toUpperCase()}</Text></View>
                                            </TouchableOpacity>
                                        <Text style={styles.lang}>{data.language.toUpperCase()}</Text>
                                    </Image>
                                </View>
                                <View locked={true} style={styles.header} pointerEvents={'none'}>
                                    <Image source={require('../images/title.png')} />
                                </View>
                                <View style={styles.footer}>
                                    <Text style={styles.buttonInfo}>1</Text>
                                    <Text style={styles.buttonInfo}>1</Text>
                                    <Text style={styles.buttonInfo}>1</Text>
                                </View>
                            </View>
                        )
                    }.bind(this))}
                </ScrollableTabView>
            )
        }
    }
});

module.exports = WelcomeView;