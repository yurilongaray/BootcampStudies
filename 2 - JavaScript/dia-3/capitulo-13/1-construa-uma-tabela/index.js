const mountains = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function tHead(mountains) {
  
  let thead = document.createElement('thead');
  let anyMountain = mountains[0];
  let properties = Object.keys(anyMountain);

  console.log(properties);

  for(i = 0; i < properties.length; i++) {
    let th = document.createElement('th');
    th.innerText = properties[i];
    thead.appendChild(th);
  }

  console.log(thead);
  
  return thead;
}

function tBody(mountains) {
  
  let tbody = document.createElement('tbody');

  for(i = 0; i < mountains.length; i++) {

    let tdname = document.createElement('td');
    let tdheight = document.createElement('td');
    let tdplace = document.createElement('td');

    let tr = document.createElement('tr');
    tdname.innerText = mountains[i].name;
    tdheight.innerText = mountains[i].height;
    tdplace.innerText = mountains[i].place;

    tr.appendChild(tdname);
    tr.appendChild(tdheight);
    tr.appendChild(tdplace);

    tbody.appendChild(tr);
  }

  console.log(tbody);

  return tbody;
}

function buildTable(data) {

  let table = document.createElement('table');
  table.appendChild(tHead(data));
  table.appendChild(tBody(data));

  return table;
}

//document.body.appendChild(buildTable(mountains));
document.getElementById('mountains').appendChild(buildTable(mountains));

