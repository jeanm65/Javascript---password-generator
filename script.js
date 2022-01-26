const dataLowercase = 'azertyuiopqsdfghjklmwxcvbn';
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = '0123456789';
const dataSymbols = "$^*ù%!:;,?./()4}\"#'[]-_~&@]+<>";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');


// console.log(rangeValue.value);



function generatePassword(){
    let data = [];
    let password = "";
     if (lowercase.checked) data.push(...dataLowercase);
     if (uppercase.checked) data.push(...dataUppercase);
     if (numbers.checked) data.push(...dataNumbers);
     if (symbols.checked) data.push(...dataSymbols);

    //  console.log(data);
    // console.log(data[11]); // ceci va génerer un caractère,mais si on veut obtenir un caractére au hasard, il faut utiliser le math.random

    if(data.length === 0){
        alert('Veuillez sélectionner des critères');
        return;
    }
    for (i = 0; i < rangeValue.value; i++){
        password += data[Math.floor(Math.random() * data.length)]; 
        passwordOutput.value = password;  

        passwordOutput.select();
        document.execCommand('copy');

        generateButton.textContent = "copié !";

        setTimeout(() => {
          generateButton.textContent = "Génerer mot de passe"
        }, 2000)
    }
     

    
    
     
    // console.log('Je génère le mot de passe');
}
generateButton.addEventListener('click', generatePassword);