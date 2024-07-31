function sendMail (){
    var params ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
    }
    const serviceID = "service_3ofpgft" ;
    const templateID = "template_znx0osm" ;
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            console.log(res);
            alert("Your Signup Successfully")
    })
    .catch(err=>console.log(err))
}
