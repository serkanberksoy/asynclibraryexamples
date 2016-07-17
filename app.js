var taskHelper = require('./taskHelper');

var defaultDuration = 500; // milliseconds

function exampleUsage(){
	// simple usage
	taskHelper.startTask(function(){});

	// extended usage
	taskHelper.startTask(function(){}, 'My Task', defaultDuration);
}


function waterfallExample(){
	// waterfall
	taskHelper.startTask(function(){
		taskHelper.startTask(function(){
			taskHelper.startTask(function(){
			}, 'Waterfall Task 3', defaultDuration);		
		}, 'Waterfall Task 2', defaultDuration);
	}, 'Waterfall Task 1', defaultDuration);
}


function parallelExample(){
	taskHelper.startTask(function(){}, 'Parallel Task 1', defaultDuration);
	taskHelper.startTask(function(){}, 'Parallel Task 2', defaultDuration);
	taskHelper.startTask(function(){}, 'Parallel Task 3', defaultDuration);
}

function foreachExample(){
	var tasks = [];

	for (var i = 0; i < 5; i++){
		tasks.push(new taskHelper.TaskObject());	
	}

	tasks.forEach(function(item, index){
		item.startTask(function(){}, 'Task at ' + index, defaultDuration);
	});
}



// waterfallExample();
// parallelExample();
// foreachExample();