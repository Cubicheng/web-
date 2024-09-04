function check_input(){
    var name=document.getElementById("name");
    var btn=document.getElementById("btn");
    if(name.value.length==0){
        confirm("Please type your name");
    }else {
        confirm("Sure to start?");
        location.href="./ExamMainPage.html";
    }
}