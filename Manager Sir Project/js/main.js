// const jsname = document.getElementById('name');
// const email = document.getElementById('email');
// const subject = document.getElementById('subject');

// const message = document.getElementById('message');

//  submit = () => {

//  }
//  console.log(jsname);

function ValidationForm(){
    var userName = document.forms["RegForm"]["uName"];
    // var userEmail = document.forms["RegForm"]["uemail"].value;
    // var userSubject = document.forms["RegForm"]["usubject"].value;
    // var userMessage = document.forms["RegForm"]["umessage"].value;


    if(userName.value == ""){
        alert("please fill the Name");
        userName.focus();
        return false;
    }
    // if(userEmail == ""){
    //     alert("please fill the Name");
    //     return false;
    // }
    // if(userSubject == ""){
    //     alert("please fill the Name");
    //     return false;
    // }
    // if(userMessage == ""){
    //     alert("please fill the Name");
    //     return false;
    // }
    return true;

}

