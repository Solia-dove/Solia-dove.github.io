const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question('what is your name?',name=>{
    console.log("welcome "+ name);

   readline.question('what is your age?',age=>{
        if(age<16){
            console.log("You’re  not allowed to drive  in Iowa");
        }
        else{
            console.log("You’re  allowed to  get  a  drivers  license  in Iowa");
        }
        readline.close();
    });
});  

