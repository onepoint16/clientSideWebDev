console.log("task d");

function TeamMember(name) {
    this.name = name;
}

function Principal(name) {
    TeamMember.apply(this, [name]);
}

function Driver(name) {
    TeamMember.apply(this, [name]);
    this.points = [];
}

Driver.prototype = new TeamMember();
Principal.prototype = new TeamMember();

Driver.prototype.totalpoints = function () {
    let points = 0;
        for (let p in this.points) {
            points += this.points[p]; ;
        }
    return points;
};

Driver.prototype.addpoints = function (points) {
    this.points.push(points);
};

function Team(teamname, base, principal, driver1, driver2) {
    this.teamname = teamname;
    this.base = base;
    this.principal = new Principal(principal);
    this.drivers = [
        new Driver(driver1),
        new Driver(driver2),
    ];
}

Team.prototype.totalpoints = function () {
    let points = 0;
    for (let d in this.drivers) {
            points += this.drivers[d].totalpoints() ;
    }
    return points;
};

Team.prototype.addpoints = function (driver, points) {
    this.drivers[driver].addpoints(points);
};

let mclaren = new Team("McLaren", "Woking", "Zak Brown", "Carlos Sainz", "Lando Norris");

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

