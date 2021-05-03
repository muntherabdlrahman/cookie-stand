'use strict';

let paris={
    name:'Branch/ Paris',
    opentime:'from 6 AM-8PM',
    hoursperopen:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    total:0,
    minmax:0,
    
    minandmaxPerhor:function(){
        this.minmax=getRandomIntInclusive(20, 38)+'  '+'The order at ';
         console.log(this.minmax)
    
    },

     
  
}    

  
  function getRandomIntInclusive(mn, mx) {
    mn = Math.ceil(mn);
    mx = Math.floor(mx);
    return Math.floor(Math.random() * (mx - mn + 1) + mn); //The maximum is inclusive and the minimum is inclusive
  }

paris.minandmaxPerhor();


let theParnt = document.getElementById('parisBranch');
console.log(theParnt);
let headeer=document.createElement('h2');
parisBranch.appendChild(headeer);
headeer.textContent=paris.name;


let unorderlst=document.createElement('ul');
theParnt.appendChild(unorderlst);


// let num=minandmaxPerhor();
// console.log(num);

// for(let j=0;j=minandmaxPerhor();j++){
// console.log(j)
// }




for (let index = 0; index < seattle.hoursperopen.length; index++) {
let list=document.createElement('li');
unorderlst.appendChild(list);
list.textContent=paris.hoursperopen[index];

}




// for(let i=0;i<seattle.hoursperopen.length;i++){
//     let num=minmax;
//     console.log(num);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

