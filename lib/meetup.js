'use strict';

function Meetup(month, year){
	this.day = 1;
	this.month  = month;
	this.year = year
};

Meetup.prototype.monteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 1 && i < 20){ result.push(date)}
	}
		return result[result.length-1]
};

Meetup.prototype.tuesteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 2 && i < 20 ){ result.push(date)}
	}
	return result[result.length-1]
};

Meetup.prototype.wednesteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 3 && i < 20 ){ result.push(date)}
	}
	return result[result.length-1]
};

Meetup.prototype.thursteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 4 && i < 20 ){ result.push(date)}
	}
	return result[result.length-1]
};

Meetup.prototype.friteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 5 && i < 20 ){ result.push(date)}
	}
	return result[result.length-1]
};

Meetup.prototype.saturteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 6 && i < 20 ){ result.push(date)}
	}
	return result[result.length-1]
};

Meetup.prototype.sunteenth = function () {
	var that = this, result = [];
	for(var i = 10; i <= 31 ; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 0 && i < 20 ){ result.push(date)}
	}
	return result[result.length-1]
};

Meetup.prototype.firstMonday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 1){return date}
	}
};

Meetup.prototype.firstTuesday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 2){return date}
	}
};

Meetup.prototype.firstWednesday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 3){return date}
	}
};

Meetup.prototype.firstThursday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 4){return date}
	}
};

Meetup.prototype.firstFriday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 5){return date}
	}
};

Meetup.prototype.firstSaturday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 6){return date}
	}
};

Meetup.prototype.firstSunday = function () {
	var that = this;
	for(var i = 1; i <= 10; i++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 0){return date}
	}
};

Meetup.prototype.secondMonday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 1){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.secondTuesday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 2){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.secondWednesday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 3){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.secondThursday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 4){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.secondFriday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 5){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.secondSaturday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 6){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.secondSunday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 2; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 0){result.push(date)}
	}
	return result[1];
};

Meetup.prototype.thirdMonday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 1){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.thirdTuesday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 2){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.thirdWednesday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 3){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.thirdThursday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 4){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.thirdFriday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 5){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.thirdSaturday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 6){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.thirdSunday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 3; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 0){result.push(date)}
	}
	return result[2];
};

Meetup.prototype.fourthMonday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 1){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.fourthTuesday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 2){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.fourthWednesday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 3){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.fourthThursday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 4){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.fourthFriday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 5){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.fourthSaturday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 6){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.fourthSunday = function () {
	var that = this, result = [];
	for(var i = 1; result.length <= 4; i ++){
		var date = new Date(that.year, that.month, i);
		if(date.getDay() == 0){result.push(date)}
	}
	return result[3];
};

Meetup.prototype.lastMonday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 1 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};

Meetup.prototype.lastTuesday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 2 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};

Meetup.prototype.lastWednesday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 3 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};

Meetup.prototype.lastThursday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 4 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};

Meetup.prototype.lastFriday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 5 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};

Meetup.prototype.lastSaturday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 6 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};

Meetup.prototype.lastSunday = function () {
	var that = this, result = [];
	for(var i = 20; i <= 31; i++){
		var date = new Date(that.year, that.month, i);
		if (date.getDay() == 0 && date.getMonth() == that.month){result.push(date)}
	}
	return result[result.length-1];
};
