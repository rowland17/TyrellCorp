/*
 * viz.js
 *
 * Defines:
 * - The data to be visualized in the chart.
 * - The options for the look of the chart to be drawn.
 * - How to draw the chart.
 *
 * @author: Tanya L. Crenshaw
 * @author: Scott Rowland
 * @since: Jan 6, 2015
 */

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(vizInit);

var data;
var chart;

var views ;
var totals = {};
var year = [2013, 2014];
var options = {
        width: 700,
        height: 400,
	title: 'Confidence and Satisfaction',
        hAxis: {
            title: 'Major',
            gridlines: {count: 9}
        },
        vAxis: {
            title: ''
        },
	legend: { 
	    position: 'none' 
	},
	animation: {
		"startup" : true,
		"duration" : 500
	}
    };
    
    
function vizInit() {

	chart = new google.visualization.ColumnChart(document.getElementById('ex0'));
    // STEP 3: STORE THE DATA.
	var query= "SELECT MAJOR, AVE_CONF, SATISFACTION FROM 1n9vywcLACFd3BjZ8tqkwSPAMnxByOCpQwdCh_g0f";
	
	
	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

	// Send the query and handle the response by logging the data
// to the console.                                                                
	queryObj.setQuery(query);
	queryObj.send(function(e) {

            data = e.getDataTable();

            console.log(data);

            // Create a view for academic year 2013-2014 that                                                          
            // is the first two columns of the data, just the                                                          
            // rows that have 2013-2014 for the value.                                                                 

            // First, get the textualized range of the year.                                                           
            //var thisYear = "" + year[0] + "-" + year[1];

            // Next, create the object and get the rows 
// corresponding to "thisYear".                                   
            views = new google.visualization.DataView(data);
        
		//views.setRows(views.getFilteredRows([{column: 1}]));
		//views.setRows(views.getFilteredRows([{column: 2}]));

            // Get a subset of the columns.                                                                            
            views.setColumns([0, 2]);

            // Draw the chart for the initial academic year.                                                           
            chart.draw(views.toDataTable(), options);

	});
    
}


function vizController() {

//    console.log(thisYear);
	console.log(views);
	if(views == undefined)
	{
		views = new google.visualization.DataView(data);
        //views.setRows(views.getFilteredRows([{column: 2}]));
//		views.setRows(views.getFilteredRows([{column: 1}]));		
	//	views.setRows(views.getFilteredRows([{column: 2}]));

            // Get a subset of the columns.                                                                            
            views.setColumns([0, 2]);

            // Draw the chart for the initial academic year.                                                           
            chart.draw(views.toDataTable(), options);
	}


}