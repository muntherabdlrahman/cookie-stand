'use strict';


let tokyo={
    name:'Branch/ Tokyo',
    opentime:'from 6 AM-8PM',
    hoursperopen:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    total:0,
    minmaxx:0,
    
    minandmaxPerhorr:function(){
        this.minmaxx=getRandomIntInclusive(3, 24)+'  '+'The order at ';
         console.log(this.minmaxx)
    
    },

     
  
}    

  
  function getRandomIntInclusive(mn, mx) {
    mn = Math.ceil(mn);
    mx = Math.floor(mx);
    return Math.floor(Math.random() * (mx - mn + 1) + mn); //The maximum is inclusive and the minimum is inclusive
  }

tokyo.minandmaxPerhorr();


let theParentt = document.getElementById('tokyoBranch');
console.log(theParentt);
let header=document.createElement('h2');
tokyoBranch.appendChild(header);
header.textContent=tokyo.name;


let unorderlistt=document.createElement('ul');
theParentt.appendChild(unorderlistt);






for (let ind = 0; ind < tokyo.hoursperopen.length; ind++) {
let listt=document.createElement('li');
unorderlistt.appendChild(listt);
listt.textContent=tokyo.hoursperopen[ind];

}

