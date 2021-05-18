'use strict';
let favoritArry=['salmon','tona','salmon cookies']

   

////////////////////////////////////////////////////




let cooKiesform = document.getElementById('cookiesform');
cooKiesform.addEventListener('submit', submitter);


function submitter(event) {
    event.preventDefault();
    let parent = document.getElementById('cookiesslect');
    
    let nameField = event.target.nameField.value;
    let par= document.createElement('p');
    parent.appendChild(par);
    par.textContent=` welcome ${nameField}`;

    let Yourfavorite = event.target.Yourfavorite.value;
    console.log(Yourfavorite);
    let para= document.createElement('p');
    parent.appendChild(para);
    para.textContent=`your favorit meal is ${Yourfavorite}`;
   

    


    let product = event.target.producT.checked;
    let product2 = event.target.producT2.checked;
    let product3=event.target.producT3.checked;

    if(product = event.target.producT.checked){
    // let selecttoday= "Salmon Meal";
    console.log(product);
    let parag= document.createElement('p');
    parent.appendChild(parag);
    parag.textContent=`your order for today is ${producT.name} and it is stablished `;
    event.preventDefault();

    }else if(product= event.target.producT2.checked){

    console.log(product2);
    let paRa= document.createElement('p');
    parent.appendChild(paRa);
    para.textContent=`your order for today is ${producT2.name} and it is stablished `;
    }else if(product= event.target.producT3.checked){
        console.log(product);
    let paraG= document.createElement('p');
    parent.appendChild(paraG);
    paraG.textContent=`your order for today is ${producT3.name} and it is stablished `;
    event.preventDefault();


    }

   


 

    
}
//////////////////////////////////////////////////

    

