/*
 * viz.js
 *
 * Defines:
 * - The data to be visualized in the chart.
 * - The options for the look of the chart to be drawn.
 * - How to draw the chart.
 *
 * @since: Jan 6, 2015
 */

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(initialize);

var data;
var data2;
var chart;
var chart2;
var views2;
var views ;

function initialize(){
	vizInit();
	vizInit2();
}  
//var totals = {};
//var year = [2013, 2014];
var options = {
        width: 800,
        height: 500,
	title: 'Confidence and Satisfaction',
	titleTextStyle: {
		fontSize: 25,
		bold: true
	},
	focusTarget: 'category',
    trigger: 'both',
        hAxis: {
            title: 'Major',
            gridlines: {count: 9}
        },
        vAxis: {
            title: ''
        },
	legend: { 
	    position: 'right' 
	},
	series: {
		0: {color: '#551a8b',width:100},
		1: { color: '#999999' },
        2: {color: '#ffffff'}
	},
    bar: {groupWidth:"125%"},
	animation: {
		"startup" : true,
		"duration" : 500
	}
    };
	
	var options2 = {
        width: 800,
        height: 500,
	title: 'Confidence and Number of Assignments',
	titleTextStyle: {
		fontSize: 25,
		bold: true
	},
	focusTarget: 'category',
    trigger: 'both',
        hAxis: {
            title: 'Major',
            gridlines: {count: 9}
        },
        vAxis: {
            title: ''
        },
	legend: { 
	    position: 'right' 
	},
	series: {
		0: {color: '#551a8b',width:100},
		1: { color: '#999999' },
        2: {color: '#ffffff'}
	},
    bar: {groupWidth:"125%"},
	animation: {
		"startup" : true,
		"duration" : 500
	}
    };
    
    
function vizInit() {

	chart = new google.visualization.ColumnChart(document.getElementById('ex0'));
    // STEP 3: STORE THE DATA.
	var query= "SELECT MAJOR, 'Database Research Confidence', 'Research Training Satisfaction', 'Students Surveyed' FROM 1n9vywcLACFd3BjZ8tqkwSPAMnxByOCpQwdCh_g0f";
	
	
	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

	// Send the query and handle the response by logging the data
// to the console.                                                                
	queryObj.setQuery(query);
	queryObj.send(function(e) {
	    console.log(e.getDataTable());
	    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
            data = e.getDataTable();

            console.log(data);

            // Create a view for academic year 2013-2014                                                               

      

                                               
            views = new google.visualization.DataView(data);
			

           

			console.log(views.toDataTable());
			var view = views.toDataTable();
			view.addColumn({ type: "number", role: "tooltip" }, "Students Surveyed");
			//add number of students surveyed as a tooltip
			view.setCell(0, 4, 40);
			view.setCell(1, 4, 6);
			view.setCell(2, 4, 6);
			view.setCell(3, 4, 21);
			view.setCell(4, 4, 33);
			view.setCell(5, 4, 55);
			view.setCell(6, 4, 15);
			view.setCell(7, 4, 34);
			view.setCell(8, 4, 35);
            // Draw the chart for the initial academic year.                                                           
            chart.draw(view, options);
			console.log(views);

	});
    
}


/*
*	Initialize the second graph
*
*/
function vizInit2() {

	chart2 = new google.visualization.ColumnChart(document.getElementById('ex1'));
    // STEP 3: STORE THE DATA.
	var query= "SELECT MAJOR, 'Database Research Confidence', 'Number of Assignments','Students Surveyed' FROM 1PR8WpkTsHQ2pzOcKn80E0ZEkhg4Pu96Nfpha_pv8";
	
	
	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tqx=', opts);

	// Send the query and handle the response by logging the data
// to the console.                                                                
	queryObj.setQuery(query);
	queryObj.send(function(e) {
	    console.log(e.getDataTable());
	    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
            data2 = e.getDataTable();

            console.log(data2);

            // Create a view for academic year 2013-2014                                  
            views2 = new google.visualization.DataView(data2);
			

            // Get a subset of the columns.                                                                            
            //views.setColumns([0, 2]);

			console.log(views2.toDataTable());
			
			var view2 = views2.toDataTable();
			view2.addColumn({ type: "number", role: "tooltip" });
			//add number of students surveyed as tooltip
			view2.setCell(0, 4, 40);
			view2.setCell(1, 4, 6);
			view2.setCell(2, 4, 6);
			view2.setCell(3, 4, 21);
			view2.setCell(4, 4, 33);
			view2.setCell(5, 4, 55);
			view2.setCell(6, 4, 15);
			view2.setCell(7, 4, 34);
			view2.setCell(8, 4, 35);

            // Draw the chart for the initial academic year.                                                           
            chart2.draw(view2, options2);
			console.log(views2);

	});
    
}

//*/


function vizController() {

//    console.log(thisYear);
	console.log(views);
	if(views == undefined)
	{
		views = new google.visualization.DataView(data);                                                          
            chart.draw(views.toDataTable(), options);
	}
console.log(views);

}