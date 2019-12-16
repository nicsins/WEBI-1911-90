
var states = new Array("Iowa","Minnesota","Wisconsin");

var Iowa = new Array("Adams","Clayton","Harrison");
var Minnesota = new Array("Anoka","Hennepin","Ramsey");
var Wisconsin = new Array("Ashland","Bayfeild","Racine");

function changeval()
{
    // If the states select menu is set to choose a state, clear the counties select menu and add the choose a county option.
    if(document.getElementById('sel_state').selectedIndex==0)
    {
        var the_counties = document.getElementById('sel_county');

        //the_counties.options.length=0;

        var length = the_counties.options.length;
        for (i = 0; i < length; i++) {
            the_counties.options[i] = null;
        }

        the_counties.options[0] = new Option("Choose a county","none");
    }
    // if a state is chosen, populate the counties select menu.
    else
    {
        // get the value of the selected state.
        var the_state = document.getElementById('sel_state').value;

        // use the selected state to reference the counties array. note: the counties arrays are named using the values of the states array.
        // I use the window[] object to reference the correct counties array.
        var optionArray = window[the_state];

        //alert(optionArray);

        // clear out the counties select menu in case it was populated previously.
        var the_counties = document.getElementById('sel_county');

        //the_counties.options.length=0;

        var length = the_counties.options.length;
        for (i = 0; i < length; i++) {
            the_counties.options[i] = null;
        }

        // populate the counties menu based on the selected state.
        for(var i=0; i < optionArray.length; i++)
        {
            var text = optionArray[i] + " County";
            var val = optionArray[i];
            // the first parameter in the Option object is the text
            // the second parameter in the Option object is the value
            the_counties.options[i] = new Option(text,val);
        }
    }

}
