/*
	Author: Serkan Berksoy, 2016

	This module is a task helper that emulates long running tasks.
	You can start a task using startTask method or you can use the task object.
	Check the detailed usage examples on app.js
*/

var defaultMessage = 'Long Running Task';
var defaultDuration = 2000;

var startTask = function(message, duration, callback){
	console.log('starting ', message);

	setTimeout(function(){
		console.log('completed', message);
		callback();
	}, duration);
}


var longRunningTaskObject = function(){
	this.message = defaultMessage;
	this.duration = defaultDuration;

	this.startTask = function(callback, message, duration){	
		startTask(message || defaultMessage, duration || defaultDuration, callback);
	}
}


// EXPORTS
exports.startTask = function(callback, message, duration){	
	startTask(message || defaultMessage, duration || defaultDuration, callback);
}

exports.TaskObject = longRunningTaskObject;