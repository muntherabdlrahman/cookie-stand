'use strict'





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
        console.log(this.customerperHour)
    }
}



Branch.prototype.calcookiesPerHour = function () {
    for (let i = 0; i < openHour.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.avgCookies * this.customerperHour[i]));

        this.totalofCookiesperDay += this.cookiesPerHour[i];
    }


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
    let roWs = document.createElement('tr');
    table.appendChild(roWs);


    let data = document.createElement('td')
    roWs.appendChild(data);
    data.textContent = this.name;



    for (let i = 0; i < openHour.length; i++) {
        let tdelemenT = document.createElement('td');
        roWs.appendChild(tdelemenT);
        tdelemenT.textContent = this.cookiesPerHour[i];

    }


    let totalofCookeAchSHOP = document.createElement('td');
    roWs.appendChild(totalofCookeAchSHOP);
    totalofCookeAchSHOP.textContent = this.totalofCookiesperDay;
    //  console.log(totalofCookeAchSHOP+'total')
}

// console.log(branchesInfo);

for (let i = 0; i < branchesInfo.length; i++) {
    // console.log(branchesInfo[i])
    branchesInfo[i].calcustomerperHour();
    branchesInfo[i].calcookiesPerHour();
    branchesInfo[i].render();

}

console.log(branchesInfo);


function footer() {
    let footeRrow = document.createElement('tr');
    table.appendChild(footeRrow);

    let footerTh = document.createElement('th');
    footeRrow.appendChild(footerTh);
    footerTh.textContent = 'totals';

    let totalofTotal = 0;

    for (let i = 0; i < openHour.length; i++) {
        let totalofEachhour = 0;

        for (let j = 0; j < branchesInfo.length; j++) {
            //    console.log()
            totalofEachhour += branchesInfo[j].cookiesPerHour[i];



        }
        totalofTotal += totalofEachhour


        let footerthTotal = document.createElement('th');
        footeRrow.appendChild(footerthTotal);
        footerthTotal.textContent = totalofEachhour;



    }



    let thTo = document.createElement('th');
    footeRrow.appendChild(thTo);
    thTo.textContent = totalofTotal;


}



footer();






