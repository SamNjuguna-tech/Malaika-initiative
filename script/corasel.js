// alert if message not sent
let container = document.querySelector('.status-container')


var statu = document.querySelector('.status');
 document.querySelector('.submit').addEventListener('click', (e)=>{

    e.preventDefault();
    var email = document.getElementById('mailer').value;
var tailResults = email.substr(-10);
var headResults = email.substr(0,8);
    if (tailResults == "@gmail.com" || tailResults == "@yahoo.com") {
            if (headResults !== "no-reply") {
                container.style.display='block';
                statu.innerHTML="message sent seccessfuly"
            }else {
                container.style.display='block';
                statu.innerHTML="message has not been sent use a working email"
        
            }
    } else {
        container.style.display='block';
        statu.innerHTML="message has not been sent use gmail or yahoo"

    }

}) 





