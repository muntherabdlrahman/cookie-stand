// 'use strict'


// //let OpenHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
// let avgCus = 6.3;
// let mini=[];


// function SeattlE(name, OpenHour) {
//     this.name = name;
//     this.OpenHour = OpenHour;
//     // this.minimum=minimum[j];
//     // this.maximum = maximum;
//     // this.totalcustOmer = totalcustOmer;
//     // this.totalcooKies = totalcooKies;
//     // this.totalsales = totalsales;
// }


// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + 1);

// }


// let seattleBranch = new SeattlE('Seattle Branch', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])

// SeattlE.prototype.minNumofcookies = function () {
//     // for(let i=0;i<mini.length;i++){
//     this.mini[i].push(random(23, 65));




// }      


// // }
// // seattleBranch.minNumofcookies([i]);






// SeattlE.prototype.maxNumofcookies = function () {
//     // for(let i=0;i<this.OpenHour;i++){
//         // }
//     this.maximum = random(23, 65);
// }


// seattleBranch.minNumofcookies();
// seattleBranch.maxNumofcookies();
// console.log(seattleBranch);



// //////////////////////////////////////////////////

// let parent = document.getElementById('parent');
// console.log(parent);


// let table = document.createElement('table');
// parent.appendChild(table);


// let Row = document.createElement('tr');
// table.appendChild(Row);


// let th = document.createElement('th');
// Row.appendChild(th);
// th.textContent = 'Name';

// let th1 = document.createElement('th');
// headerRow.appendChild(th1);
// th1.textContent = 'number of sales today';


// for (let i = 0; i < workers.length; i++) {

//     let dataRow = document.createElement('tr');
//     table.appendChild(dataRow);

//     td
//     let td = document.createElement('td');
//     dataRow.appendChild(td);
//     td.textContent = OpenHour[i];

//     let td1 = document.createElement('td');
//     dataRow.appendChild(td1);
//     td1.textContent = seattleBranch.maxNumofcookies();
// }



let branchesInfo = [];

let openHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);

}


function Branch(name, minimumCustomer, maximumCustomer, avgCookies) {
    this.name = name;
    this.minimumCustomer = minimumCustomer;
    this.maximumCustomer = maximumCustomer;
    this.avgCookies = avgCookies;



    this.customerperHour = [];
    this.cookiesPerHour = [];
    this.totalofCookiesperDay = 0;


    branchesInfo.push(this);

}

Branch.prototype.calcustomerperHour = function () {
    for (let i = 0; i < openHour.length; i++) {
        this.customerperHour.push(random(this.minimumCustomer, this.maximumCustomer));
    }
}



Branch.prototype.calcookiesPerHour = function () {
    for (let i = 0; i < openHour.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customerperHour[i]));

    }
    console.log(this.calcookiesPerHour[i])
    this.totalofCookiesperDay += this.cookiesPerHour[i];

}


let seattle = new Branch('Seattle Branch', 23, 65, 6.3)
let paris = new Branch('Paris Branch', 20, 38, 2.3)
let tokyo = new Branch('Tokyo Branch', 3, 24, 1.2)
let dubai = new Branch('Dubai Branch', 11, 38, 3.7)
let lima = new Branch('Lima Branch', 2, 16, 4.6)








let parent = document.getElementById('parent');
console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);
function header() {
    let Hedrow = document.createElement('tr');
    table.appendChild(Hedrow);



    let thofRow = document.createElement('th');
    Hedrow.appendChild(thofRow);
    thofRow.textContent = 'Branch';



    for (let i = 0; i < openHour.length; i++) {
        let thelemenTe = document.createElement('th')
        Hedrow.appendChild(thelemenTe);
        thelemenTe.textContent = openHour[i];
    }


    let lastth = document.createElement('th');
    Hedrow.appendChild(lastth);
    lastth.textContent = "total sales daily"



}

header();







Branch.prototype.render = function () {
    let datarows = document.createElement('tr');
    table.appendChild(datarows);


    let data = document.createElement('td')
    rows.appendChild(data);
    data.textContent = this.name;



    for (let i = 0; i < openHour.length; i++) {
        let tdelemenT = document.createElement('td');
        datarows.appendChild(tdelemenT);
        tdelemenT.textContent = this.cookiesPerHour[i];

    }


    let totalofCookeAchSHOP = document.createElement('td');
    datarows.appendChild(totalofCookeAchSHOP);
    totalofCookeAchSHOP.textContent = this.totalofCookiesperDay;

}


for (let i = 0; i < branchesInfo; i++) {

    branchesInfo[i].calcustomerperHour();
    branchesInfo[i].calcookiesPerHour();
    branchesInfo[i].render();

}



function footer() {
    let footeRrow = document.createElement('tr');
    table.appendChild(footeRrow);

    let footerTh = document.createElement('th');
    footeRrow.appendChild(footerTh);
    footerTh.textContent = 'totals';
    let totalofEachhour = 0;
    for (let i = 0; i < openHour.length; i++) {
        for (let j = 0; j < branchesInfo.length; j++) {
           
            totalofEachhour += branchesInfo[j].calcustomerperHour[i];

            
        }
        
        
        let footerthTotal = document.createElement('th');
        footeRrow.appendChild(footerthTotal);
        footerthTotal.textContent = totalofEachhour;



    }
}



footer();


// console.log(branchesInfo)
// console.log()





