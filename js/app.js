'use strict';

let seattle={
    name:'Branch/ Seattle',
    opentime:'from 6 AM-8PM',
    hoursperopen:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    total:0,
    minmax:0,
    
    minandmaxPerhor:function(){
        this.minmax=getRandomIntInclusive(23, 65)+'  '+'The order at ';
         console.log(this.minmax)
    
    },

     
  
}    

  
  function getRandomIntInclusive(mn, mx) {
    mn = Math.ceil(mn);
    mx = Math.floor(mx);
    return Math.floor(Math.random() * (mx - mn + 1) + mn); //The maximum is inclusive and the minimum is inclusive
  }

seattle.minandmaxPerhor();



let theParent = document.getElementById('seattleBranch');
console.log(theParent);
let header2=document.createElement('h2');
seattleBranch.appendChild(header2);
header2.textContent=seattle.name;


let unorderlist=document.createElement('ul');
theParent.appendChild(unorderlist);


// let num=seattle.minandmaxPerhor();
// console.log(num);

// for(let j=0;j=minandmaxPerhor();j++){
// console.log(j)
// }




for (let index = 0; index < seattle.hoursperopen.length; index++) {
let list=document.createElement('li');
unorderlist.appendChild(list);
list.textContent=seattle.hoursperopen[index];
}


let unordeRDlist=document.createEvent('ol');
 theParent.appendChild(unordeRDlist);



for (let j=0;j<seattle.hoursperopen.length;j++){
    let array = document.createElement('li');
     unordeRDlist.appendChild(array);
     array.textContent=seattle.minandmaxPerhor();    
}



//document.textContent
// for(let i=0;i<seattle.hoursperopen.length;i++){
//     let num=minmax;
//     console.log(num);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

