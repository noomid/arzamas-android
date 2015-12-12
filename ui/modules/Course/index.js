var Course = function(lang){
	var _data = this.courses[lang];

	this.getData = function(){

		return _data;
	}
};

Course.prototype.courses = {
	en: require('./courses/en')
};

module.exports = Course;