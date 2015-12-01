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
        hAxis: {
            title: 'Major',
            gridlines: {count: 9}
        },
        vAxis: {
            title: ''
        },
	legend: { 
	    position: 'top' 
	},
	series: {
		0: {color: '#551a8b'},
		1: {color: '#999999'}
	},
	animation: {
		"startup" : true,
		"duration" : 500
	}
    };
    
    
function vizInit() {

	chart = new google.visualization.ColumnChart(document.getElementById('ex0'));
    // STEP 3: STORE THE DATA.
	var query= "SELECT MAJOR, 'Database Research Confidence', 'Research Training Satisfaction' FROM 1n9vywcLACFd3BjZ8tqkwSPAMnxByOCpQwdCh_g0f";
	
	
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
			

            // Get a subset of the columns.                                                                            
           // views.setColumns([0, 2]);

			console.log(views.toDataTable());
			
            // Draw the chart for the initial academic year.                                                           
            chart.draw(views.toDataTable(), options);
			console.log(views);

	});
    
}





function vizInit2(){
	data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Major');
    data2.addColumn('number', 'Average Confidence');
	data2.addColumn('number', 'Number of Assignments');
	

    // Add 12 rows to the DataTable, January - December of
    // 2014.
    data2.addRows([
        ['Business', 2.5,3.02],
        ['Humanities and History',2.33,5.14],
        ['Arts', 3,3.17],
        ['Hard Sciences', 2.90,3.54],
        ['Engineering', 2.67,2.69],
        ['Health Profession', 2.64,3.81],
        ['Social and Behavioral Sciences', 3.4,4.2],
        ['Education', 2.76,3.64],
        ['Other', 2.77,3.47],
      
      ]);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.  Finally
    // turn off the legend.
    var options2 = {
        width: 800,
        height: 500,
	title: 'Confidence Level and Number of Assignments',
	titleTextStyle: {
		fontSize: 25,
		bold: true
	},
        hAxis: {
            title: 'Major',
            gridlines: {count: 12}
        },
        
		series: {
		0: {color: '#551a8b'},
		1: {color: '#999999'}
	},
	legend: { 
	    position: 'top' 
	}
	
    };

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    var chart2 = new google.visualization.ColumnChart(document.getElementById('ex1'));

    // STEP 7: SHOW THE DATA
    // Draw the chart with the supplied options.
    chart2.draw(data2, options2);

}
/*
function vizInit2() {

	chart2 = new google.visualization.ColumnChart(document.getElementById('ex1'));
    // STEP 3: STORE THE DATA.
	var query= "SELECT MAJOR, AVE_CONF, NUM_ASS FROM 1PR8WpkTsHQ2pzOcKn80E0ZEkhg4Pu96Nfpha_pv8";
	
	
	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tqx=', opts);

	// Send the query and handle the response by logging the data
// to the console.                                                                
	queryObj.setQuery(query);
	queryObj.send(function(e) {

            data2 = e.getDataTable();

            console.log(data2);

            // Create a view for academic year 2013-2014 that                                                          
            // is the first two columns of the data, just the                                                          
            // rows that have 2013-2014 for the value.                                                                 

            // First, get the textualized range of the year.                                                           
            //var thisYear = "" + year[0] + "-" + year[1];

            // Next, create the object and get the rows 
// corresponding to "thisYear".                                   
            views2 = new google.visualization.DataView(data2);
			

            // Get a subset of the columns.                                                                            
           // views.setColumns([0, 2]);

			console.log(views2.toDataTable());
			
            // Draw the chart for the initial academic year.                                                           
            chart2.draw(views2.toDataTable(), options);
			console.log(views2);

	});
    
}

*/


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
           // views.setColumns([0, 2]);

            // Draw the chart for the initial academic year.                                                           
            chart.draw(views.toDataTable(), options);
	}
console.log(views);

}