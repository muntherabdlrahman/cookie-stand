'use strict'


//let OpenHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let avgCus = 6.3;
let mini=[];


function SeattlE(name, OpenHour) {
    this.name = name;
    this.OpenHour = OpenHour;
    // this.minimum=minimum[j];
    // this.maximum = maximum;
    // this.totalcustOmer = totalcustOmer;
    // this.totalcooKies = totalcooKies;
    // this.totalsales = totalsales;
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);

}


let seattleBranch = new SeattlE('Seattle Branch', ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'])

SeattlE.prototype.minNumofcookies = function () {
    // for(let i=0;i<mini.length;i++){
    this.mini[i].push(random(23, 65));
   
    
    
    
}      


// }
// seattleBranch.minNumofcookies([i]);






SeattlE.prototype.maxNumofcookies = function () {
    // for(let i=0;i<this.OpenHour;i++){
        // }
    this.maximum = random(23, 65);
}


seattleBranch.minNumofcookies();
seattleBranch.maxNumofcookies();
console.log(seattleBranch);



//////////////////////////////////////////////////

let parent = document.getElementById('parent');
console.log(parent);


let table = document.createElement('table');
parent.appendChild(table);


let Row = document.createElement('tr');
table.appendChild(Row);


let th = document.createElement('th');
Row.appendChild(th);
th.textContent = 'Name';

let th1 = document.createElement('th');
headerRow.appendChild(th1);
th1.textContent = 'number of sales today';


for (let i = 0; i < workers.length; i++) {
    
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    td
    let td = document.createElement('td');
    dataRow.appendChild(td);
    td.textContent = OpenHour[i];

    let td1 = document.createElement('td');
    dataRow.appendChild(td1);
    td1.textContent = seattleBranch.maxNumofcookies();
}