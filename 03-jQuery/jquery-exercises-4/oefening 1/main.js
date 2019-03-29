var count = 0;
let options = ["rock","paper","scissor"]
let select = "";

$("#rock").on('click', function () {
    select = "rock";
    console.log(select);
});

$("#paper").on('click', function () {
    select = "paper";
    console.log(select);
});

$("#scissor").on('click', function () {
    select = "scissor";
    console.log(select);
});

$("#button").on('click', function () {
    if (select !== ""){
            let computer = options[Math.floor(Math.random()* options.length)];  //formule voor random een getal uit een array te halen
            console.log(computer);
            if (select === "scissor"){

                switch(computer){

                    case "scissor":
    
                    alert("The computer selected :" + computer  + "You selected :"  + select + ": Draw")
    
                    break;

                    case "paper":

                    alert("The computer selected :" + computer  + "You selected :"  + select + ": Won")

                    break;

                    case "rock":

                    alert("The computer selected :" + computer  + "You selected :"  + select + ": lost")

                    break;
                };
            };
            if (select === "rock"){

                switch(computer){
        
                            case "scissor":
            
                            alert("The computer selected :" + computer  + "You selected :"  + select + ": Lost")
            
                            break;
        
                            case "paper":
        
                            alert("The computer selected :" + computer  + "You selected :"  + select + ": Won")
        
                            break;
        
                            case "rock":
        
                            alert("The computer selected :" + computer  + "You selected :"  + select + ": Draw")
        
                            break;
                };
            };
            if (select === "paper"){

                switch(computer){
                
                    case "scissor":
                    
                    alert("The computer selected :" + computer  + "You selected :"  + select + ": Won")
                    
                    break;
                
                    case "paper":
                
                    alert("The computer selected :" + computer  + "You selected :"  + select + ": Draw")
                
                    break;
                
                    case "rock":
                
                    alert("The computer selected :" + computer  + "You selected :"  + select + ": lost")
                
                    break;
                };               
            };        
    };
});

