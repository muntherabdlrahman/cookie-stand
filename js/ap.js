'use strict';

function SeattLe(name, miniCul, maxCus, avgCus, custOmer, cooKies, total){
    this.name=name;
    this.miniCul=miniCul;
    this.maxCus=maxCus;
    this.avgCus=avgCus;
    this.custOmer=custOmer;
    this.cooKies=cooKies;
    this.total=total;
    
} 

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
    
}




SeattLe.prototype.miniCul = function(){
    this.miniCul=random(23,65);
}

console.log(this.miniCul);

   console.log('ksajkkasjl');


   SeattLe.prototype.maxCus =function(){
       this.maxCus=random(23,65);
   } 

console.log(this.maxCus);