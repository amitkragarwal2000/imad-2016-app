var button = document.getElementById("counter");

button.onclick = function(){
    // make a request to counter endpoint
    var request = new XMLHttpRequest();
    
    // capture the response and store it in a variable
    
    request.onreadystatechange = function(){
if (request.readyState === XMLHttpRequest.DONE) {
    // everything is good, the response is received
    if (httpRequest.status === 200) {
    // perfect!
    var counter = request.responseText;
     var span=document.getElementById("count");
  span.innerHTML=counter.toString();
    
} 
    
    
} 

};
    
    
    
};