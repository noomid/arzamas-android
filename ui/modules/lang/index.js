'use strict';

var Lang = (function(){
    var _data = require('./data'),
    	_current_lang;

    return {
        getData: function(){
        	
            return _data;
        },
        setLang: function(lang){

    		_current_lang = lang;
        },
        getCurrentLang: function(){

        	return _current_lang;
        }
    }
}());

module.exports = Lang;
