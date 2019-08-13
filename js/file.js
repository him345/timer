var timer = () =>{
    let days = new Date();
    let hours = (days.getHours()%12).toString();
    let minutes = days.getMinutes().toString();
    let seconds = days.getSeconds().toString();
    if(hours.length <2){
        hours = "0"+ hours;
    }
    if(minutes.length< 2){
        minutes = '0' + minutes;
    }
    if (seconds.length < 2){
        seconds = '0' + seconds;
    }
    if (hours.length == 12){
        hours = 12;
    }
    let result = hours + ":" + minutes + ":" + seconds;
    if (hours < 12){
        document.getElementById('timer').innerHTML = result + "AM";
        document.getElementById('message').innerHTML = "Good Morning!!!"
    }else{
        document.getElementById('timer').innerHTML = result + "PM";
        document.getElementById('message').innerHTML = "Good Afternoon!!!"
    }

}
setInterval(timer, 1000);
var calendar = () =>{
    let allDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let allMonths = [ 'January', 'February','March','April','May','June','July','August','September','October','November','December'];
    let time = new Date();
    //Get day
    let day = time.getDay();
    let month = time.getMonth();
    let outputDay = '';
    let outputMonth ='';
    for (let i = 0; i< allDays.length; i++){
        switch(day){
            case i:
                outputDay = allDays[i];
                break;
        }
    }
    //Get month
    for (let i = 0; i< allMonths.length; i++){
        switch(month){
            case i:
                outputMonth = allMonths[i];
        }
    }
    let date = time.getDate().toString();
    if(date.length < 2){
        date = "0" + date;
    }
    let topDate = '';
    switch(time.getDate()){
        case 1:
        case 21:
        case 31:
            topDate = "st";
            break;
        case 2:
        case 22:
            topDate = 'nd';
            break;
        default:
            topDate = 'rd'
    }
    document.getElementById('date').innerHTML= outputDay + " " + "/" + date +"<sup>"+ topDate +"</sup>" +" "+"/"+ outputMonth +" "+"/" +time.getFullYear();
}
calendar();
var color = () =>{
    let yellow = document.getElementById('message');
    if(yellow.style.color == "yellow"){
        yellow.style.color = '#ff22bb';
    }else{
        yellow.style.color = 'yellow';
    }
}
var change = () => {
    let time = document.getElementById('date');
    if (time.style.color =='orange'){
        time.style.color = 'teal';
    }else{
        time.style.color = 'orange';
    }
}
setInterval(change, 1000);
setInterval(color, 1000);