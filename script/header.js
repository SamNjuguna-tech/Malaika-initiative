var doc = document.getElementById("header_elements");
function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
      console.log('false')
      
    } else {
     document.body.style.backgroundColor = "pink";
     console.log('true')
    }
  }
                      
 
  