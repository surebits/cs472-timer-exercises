/**
 * 1. 
 * setTimeout(booyah, 2000);   // allows booyah function to run after 2seconds
 * 
 * 
 * setTimeout(booyah(), 2000); returns 0, not quite a valid way of using setTimeout as setimeout requires a callback/function as the first argument
 * 
 * 
 * 
 * 
 * 
 * 
 * 2. Both alert calls display the 6
 **/

function booyah1() {
    alert("BOOYAH!");
}

function booyah2(){
    alert("BOOYAH!");
}

setTimeout(booyah1, 2000);
setTimeout(booyah2, 2000);


/*
    Unobtrusive Javascript is a technique used in making your site and it's content accessible in case Javascript is unavailable by using a clear seperation of behaviour from markup or structure.

    It's core tenents are usability, graceful degradation or progressive enhancement i.e customizing features to work with different browsers or user agents, accessibility (commensurate user experience for all users)


    Practical applications

    Displaying user entered input on a page when user type as opposed to displaying the text when the button is clicked. 
    
    The former is unobtrusive because it works even if Javascript is removed. The core functionality still works even if the ehanced functionality of displaying text when button clicked no longer works, the end result is the same. The users enters their name and the webpage displays it back to them.
*/