console.log("task b");

function Team(teamname, base, principal, driver1, driver2) {
    this.teamname = teamname;
    this.base = base;
    this.principal = principal;
    this.drivers = [
        { name: driver1,  points: [] },
        { name: driver2, points: [] },
    ];
}

Team.prototype.totalpoints = function () {
    let points = 0;
    for (let d in this.drivers) {
        for (let p in this.drivers[d].points) {
            points += this.drivers[d].points[p]; ;
        }
    }
    return points;
};

Team.prototype.addpoints = function(driver, points) {
    this.drivers[driver].points.push(points);
};

let mclaren = new Team("McLaren", "Woking", "Andreas Seidl", "Daniel Ricciardo", "Lando Norris");

mclaren.addpoints(0, 25);
mclaren.addpoints(0, 18);
mclaren.addpoints(0, 0);
mclaren.addpoints(0, 25);
mclaren.addpoints(1, 12);
mclaren.addpoints(1, 10);
mclaren.addpoints(1, 25);
mclaren.addpoints(1, 8);


console.log(JSON.stringify(mclaren, null, 4));

console.log("Points: " + mclaren.totalpoints());


