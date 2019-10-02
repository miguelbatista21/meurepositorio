document.write();

const resp = [
  {
    name: "Cachero",
    level: 400
  },
  {
    name: "Eternal Oblivion",
    level: 300
  },
  {
    name: "Bubble",
    level: 200
  }
];

const topLvlTbl = document.getElementById("top-level-table");

for (i = 0; i < resp.length; i++) {
  debugger;
  const player = resp[i];
  console.log(player);

  const tr = document.createElement("tr");

  const positionTd = document.createElement("td");
  const positionText = document.createTextNode(i + 1);
  positionTd.appendChild(positionText);

  const nameTd = document.createElement("td");
  const nameText = document.createTextNode(player.name);
  nameTd.appendChild(nameText);

  const levelTd = document.createElement("td");
  const levelText = document.createTextNode(player.level);
  levelTd.appendChild(levelText);

  tr.appendChild(positionTd);
  tr.appendChild(nameTd);
  tr.appendChild(levelTd);

  topLvlTbl.appendChild(tr);
}
