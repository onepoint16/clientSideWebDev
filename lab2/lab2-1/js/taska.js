console.log("task a");

const team = {
    teamname :"McLaren",
    base : "Woking",
    principal : "Andreas Seidl"
};

console.log(JSON.stringify(team, null, 4));

team.drivers = [ 
    { name: "Daniel Ricciardo", dob: new Date(1989, 8, 1) },
    { name: "Lando Norris", dob: new Date(1999, 10, 13) }
];

team.drivers[0].points = [25, 18, 0, 25];
team.drivers[1].points = [12, 10, 25, 8];

console.log(JSON.stringify(team, null, 4));

console.log(team.drivers[0].name + ", " + team.drivers[0].dob.toDateString('MMMM ,yyyy'));


team.totalpoints = function () {
    let points = 0;
    for (let d in this.drivers) {
        for (let p in this.drivers[d].points) {
            points += this.drivers[d].points[p]; ;
        }
    }
    return points;
};

console.log("Points: " + team.totalpoints());

team.drivers[0].points.push(25);
team.drivers[1].points.push(10);

console.log("Points: " + team.totalpoints());

let {teamname, base} = team;

console.log(teamname, base);

let second = team.drivers[1];

let {drivers} = team;
let [,lando] = drivers;

let {drivers:[,lando]} = team;
let {drivers:[,lando]} = team;

console.log(lando);

let {points} = lando;
let [disqualified,...counted] = points

let {points:[disqualified,...counted]} = lando

let countedpoints = counted.reduce((a, b) => a + b, 0)

let countedpoints = 0;
for (let p in counted) {
    countedpoints += counted[p]; ;
}

console.log(countedpoints);