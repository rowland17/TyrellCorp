/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */
var librs = librs || {};
librs.ui = {};
librs.ui = function() {
var fetch = function() {
	var el = document.getElementById('year');
	var elVal = el.value;
	console.log(elVal);
	vizController(elVal);
};
var toggle = function() {

    //console.log('About!');
    
    // Grab the html element with the ID “about”
    var el = document.getElementById('ex0');
	var el2 = document.getElementById('ex1');

    // Add the class “show” to the element.
    if(librs.utility.hasClass(el, 'show') && librs.utility.hasClass(el2, 'show'))
    {
   		librs.utility.removeClass(el, 'show');
		librs.utility.removeClass(el2, 'show');
    }
    else
    {
    	librs.utility.addClass(el, 'show');
		librs.utility.addClass(el2, 'show');
    }
    

};

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('graphBut');
    //var btn = document.getElementById('submit-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
   // btn.onclick = fetch;
    

};

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();

}; //end module librs

// Invoke module. After invocation, the module’s code is now added to
// the namespace and is accessible through the librs object.                                                                                                                                                   
librs.ui();