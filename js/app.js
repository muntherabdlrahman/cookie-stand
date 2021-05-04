// 'use strict';


// let OpenHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + 1);

// }


// let seattle = {
//   name: 'Branch/ Seattle',
//   miniCul: 23,
//   maxCus: 65,
//   avgCus: 6.3,
//   custOmer: [],
//   cooKies: [],
//   total: 0,


//   calcCustomersEachHour: function () {
//     for (let i = 0; i < OpenHour.length; i++) {

//       this.custOmer.push(random(this.miniCul, this.maxCus));
//     }

//   },

//     calCustOmer: function () {
//       for (let i = 0; i < OpenHour.length; i++) {
//         this.custOmer[i] = (random(this.miniCul, this.maxCus));

//       }
//     },


//     calCookies: function () {
//       for (let i = 0; i < OpenHour.length; i++) {
//         this.cooKies.push(Math.floor(this.custOmer[i] * this.avgCus));
//         this.total += this.cooKies[i]


//       }
//     },


//     randerFun: function() {
//       let theparent = document.getElementById('seattleBranch');
//       let shopName = document.createElement('h2');

//       theparent.appendChild(shopName);
//       shopName.textContent = this.name;


//       let unorder = document.createElement('ul');
//       theparent.appendChild(unorder)


//       for (let i = 0; i < OpenHour.length; i++) {
//         let list = document.createElement('li');
//         unorder.appendChild(list);

//         list.textContent = `${OpenHour[i]}:${this.cooKies[i]}`;
//       }
   
   
//       let totalItem = document.createElement('li');
//       unorder.appendChild(totalItem);
//       totalItem.textContent = `Total: ${this.total}`;
   
//     },


  


// }  





// seattle.calCustOmer();
//   seattle.calCookies();
//   seattle.randerFun();


//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   let paris = {
//   name: 'Branch/ Paris',
//   miniCul: 20,
//   maxCus: 38,
//   avgCus: 2.3,
//   custOmer: [],
//   cooKies: [],
//   total: 0,


//   calcCustomersEachHour: function () {
//     for (let i = 0; i < OpenHour.length; i++) {

//       this.custOmer.push(random(this.miniCul, this.maxCus));
//     }

//   },

//     calCustOmer: function () {
//       for (let i = 0; i < OpenHour.length; i++) {
//         this.custOmer[i] = (random(this.miniCul, this.maxCus));

//       }
//     },


//     calCookies: function () {
//       for (let i = 0; i < OpenHour.length; i++) {
//         this.cooKies.push(Math.floor(this.custOmer[i] * this.avgCus));
//         this.total += this.cooKies[i]


//       }
//     },


//     randerFun: function() {
//       let theparent = document.getElementById('parisBranch');
//       let shopName = document.createElement('h2');

//       theparent.appendChild(shopName);
//       shopName.textContent = this.name;


//       let unorder = document.createElement('ul');
//       theparent.appendChild(unorder)


//       for (let i = 0; i < OpenHour.length; i++) {
//         let list = document.createElement('li');
//         unorder.appendChild(list);

//         list.textContent = `${OpenHour[i]}:${this.cooKies[i]}`;
//       }
   
   
//       let totalItem = document.createElement('li');
//       unorder.appendChild(totalItem);
//       totalItem.textContent = `Total: ${this.total}`;
   
   
//     },


  


// }  



// paris.calCustOmer();
//   paris.calCookies();
//   paris.randerFun();
//   ////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   let tokyo= {
//     name: 'Branch/ Tokyo',
//     miniCul: 3,
//     maxCus: 24,
//     avgCus: 1.2,
//     custOmer: [],
//     cooKies: [],
//     total: 0,
  
  
//     calcCustomersEachHour: function () {
//       for (let i = 0; i < OpenHour.length; i++) {
  
//         this.custOmer.push(random(this.miniCul, this.maxCus));
//       }
  
//     },
  
//       calCustOmer: function () {
//         for (let i = 0; i < OpenHour.length; i++) {
//           this.custOmer[i] = (random(this.miniCul, this.maxCus));
  
//         }
//       },
  
  
//       calCookies: function () {
//         for (let i = 0; i < OpenHour.length; i++) {
//           this.cooKies.push(Math.floor(this.custOmer[i] * this.avgCus));
//           this.total += this.cooKies[i]
  
  
//         }
//       },
  
  
//       randerFun: function() {
//         let theparent = document.getElementById('tokyoBranch');
//         let shopName = document.createElement('h2');
  
//         theparent.appendChild(shopName);
//         shopName.textContent = this.name;
  
  
//         let unorder = document.createElement('ul');
//         theparent.appendChild(unorder)
  
  
//         for (let i = 0; i < OpenHour.length; i++) {
//           let list = document.createElement('li');
//           unorder.appendChild(list);
  
//           list.textContent = `${OpenHour[i]}:${this.cooKies[i]}`;
//         }
    
    
//         let totalItem = document.createElement('li');
//         unorder.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total}`;
    
//       },
  
  
    
  
  
//   }  
  
  
  
  
  
//   tokyo.calCustOmer();
//     tokyo.calCookies();
//     tokyo.randerFun();
//     //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     //////////////////////////////////////////////////////////////////////////////////////////////////////////////let tokyo= {
    
    
//     let lima={
//     name: 'Branch/ Lima',
//     miniCul: 2,
//     maxCus: 16,
//     avgCus: 4.6,
//     custOmer: [],
//     cooKies: [],
//     total: 0,
  
  
//     calcCustomersEachHour: function () {
//       for (let i = 0; i < OpenHour.length; i++) {
  
//         this.custOmer.push(random(this.miniCul, this.maxCus));
//       }
  
//     },
  
//       calCustOmer: function () {
//         for (let i = 0; i < OpenHour.length; i++) {
//           this.custOmer[i] = (random(this.miniCul, this.maxCus));
  
//         }
//       },
  
  
//       calCookies: function () {
//         for (let i = 0; i < OpenHour.length; i++) {
//           this.cooKies.push(Math.floor(this.custOmer[i] * this.avgCus));
//           this.total += this.cooKies[i]
  
  
//         }
//       },
  
  
//       randerFun: function() {
//         let theparent = document.getElementById('limaBranch');
//         let shopName = document.createElement('h2');
  
//         theparent.appendChild(shopName);
//         shopName.textContent = this.name;
  
  
//         let unorder = document.createElement('ul');
//         theparent.appendChild(unorder)
  
  
//         for (let i = 0; i < OpenHour.length; i++) {
//           let list = document.createElement('li');
//           unorder.appendChild(list);
  
//           list.textContent = `${OpenHour[i]}:${this.cooKies[i]}`;
     
     
     
     
     
//         }
     
     
     
//         let totalItem = document.createElement('li');
//         unorder.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total}`;
     
     
     
//       },
  
  
    
  
  
//   }  
  
  
  
  
  
//   lima.calCustOmer();
//     lima.calCookies();
//     lima.randerFun();
//     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//     let dubai={
//       name: 'Branch/Dubai',
//       miniCul: 11,
//       maxCus: 38,
//       avgCus: 3.7,
//       custOmer: [],
//       cooKies: [],
//       total: 0,
    
    
//       calcCustomersEachHour: function () {
//         for (let i = 0; i < OpenHour.length; i++) {
    
//           this.custOmer.push(random(this.miniCul, this.maxCus));
//         }
    
//       },
    
//         calCustOmer: function () {
//           for (let i = 0; i < OpenHour.length; i++) {
//             this.custOmer[i] = (random(this.miniCul, this.maxCus));
    
//           }
//         },
    
    
//         calCookies: function () {
//           for (let i = 0; i < OpenHour.length; i++) {
//             this.cooKies.push(Math.floor(this.custOmer[i] * this.avgCus));
//             this.total += this.cooKies[i]
    
    
//           }
//         },
    
    
//         randerFun: function() {
//           let theparent = document.getElementById('dubaiBranch');
//           let shopName = document.createElement('h2');
    
//           theparent.appendChild(shopName);
//           shopName.textContent = this.name;
    
    
//           let unorder = document.createElement('ul');
//           theparent.appendChild(unorder)
    
    
//           for (let i = 0; i < OpenHour.length; i++) {
//             let list = document.createElement('li');
//             unorder.appendChild(list);
    
//             list.textContent = `${OpenHour[i]}:${this.cooKies[i]}`;
//           }
        
//           let totalItem = document.createElement('li');
//           unorder.appendChild(totalItem);
//           totalItem.textContent = `Total: ${this.total}`;
        
        
//         },

    
    
      
    
    
//     }  
    
    
    
    
    
//     dubai.calCustOmer();
//       dubai.calCookies();
//       dubai.randerFun();