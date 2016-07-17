var taskHelper = require('./taskHelper');

var defaultDuration = 500; // milliseconds

console.log('EXTENDED WATERFALL EXAMPLE \n');


function runEverytime(message){
	console.log('This method runs everytime a task is completed: ', message);
}

function runAtTheEnd(message){
	console.log('This method runs everytime a task is completed: ', message);
}

function waterfallExample(){
	// waterfall
	taskHelper.startTask(function(){
		runEverytime('Waterfall Task 1');

		taskHelper.startTask(function(){
			runEverytime('Waterfall Task 2');

			taskHelper.startTask(function(){
				runEverytime('Waterfall Task 3');

				runAtTheEnd();

			}, 'Waterfall Task 3', defaultDuration);		
		}, 'Waterfall Task 2', defaultDuration);
	}, 'Waterfall Task 1', defaultDuration);
}

waterfallExample();