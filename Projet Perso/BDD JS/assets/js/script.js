let pseudo = document.getElementById('pseudo');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');



document.querySelector("#Incrire").addEventListener("click", function(event) {
    
    event.preventDefault();
    if(!pseudo.value){
        alert('veuillez complter votre formulaire !');
    }else{
       if(!validateEmail(email.value)){
        alert("l'email gadjo")
       }else{
        if(!validateMDP(password.value)){
            alert('Mon reuf le mdp')
        }else{
            alert('Votre compte a été créer !');
            form.style.display = "none";
        }

       }
    
    }
    
}, false);


function validateEmail(email) 
    {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    

    
function validateMDP(mdp) 
{
    let re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(mdp);
}
