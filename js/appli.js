

let lima={
    name:'Branch/ Lima',
    opentime:'from 6 AM-8PM',
    hoursperopen:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    total:0,
    minmax:0,
    
    minandmaxPerhor:function(){
        this.minmax=getRandomIntInclusive(2, 16)+'  '+'The order at ';
         console.log(this.minmax)
    
    },

     
  
}    

  
  function getRandomIntInclusive(mn, mx) {
    mn = Math.ceil(mn);
    mx = Math.floor(mx);
    return Math.floor(Math.random() * (mx - mn + 1) + mn); //The maximum is inclusive and the minimum is inclusive
  }

lima.minandmaxPerhor();


let thePart = document.getElementById('limaBranch');
console.log(thePart);
let hea=document.createElement('h2');
limaBranch.appendChild(hea);
hea.textContent=lima.name;


let unorder=document.createElement('ul');
thePart.appendChild(unorder);


// let num=minandmaxPerhor();
// console.log(num);

// for(let j=0;j=minandmaxPerhor();j++){
// console.log(j)
// }




for (let index = 0; index < seattle.hoursperopen.length; index++) {
let list=document.createElement('li');
unorder.appendChild(list);
list.textContent=paris.hoursperopen[index];

}




// for(let i=0;i<seattle.hoursperopen.length;i++){
//     let num=minmax;
//     console.log(num);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

