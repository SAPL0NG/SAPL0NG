function main(){
    let v = prompt("you hungry yet?","");
    if (v=="yes"){
        alert("open the console")
        p();
        console.log("Here's your soup, comrade!")
    }
    else if(v == "no"){
        alert("oh ok");
    }
    else if(v == ""){
        
    }
    else{
        while(v != ["no", "yes"]){
            let d = prompt("yes/no")
            if(d =="yes"){
                break;
            }
            else if(d =="no"){
                alert("K")
                break;
            }
        }
    }
}
function react() {
    document.getElementById("demo").innerHTML = "Button clicked";
}
function p(){
    function timer(){
        console.log("Soup will be ready in "+ b +" seconds");
    }
    let b = 5;
    while(b >= 1){
        timer();
        b = b - 1;
    }
}
if (navigator.cookieEnabled == true){
    alert("Cookies are used");
}
else{
    alert("No cookies were used")
}