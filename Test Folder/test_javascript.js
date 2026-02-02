

function alertmessage(msg) {
    console.log(msg);
    alert("Result: " + msg);
}
function alertnumber(num1,num2,num3) {
    
    return(num1+num2+num3);

}
var score = addition (10,20,30);
alertmessage(Passscore(score));
function alertscore(score) {
    if (score >= 60) {
        return "Pass";
    } else {
        return "Fail";
    }

}