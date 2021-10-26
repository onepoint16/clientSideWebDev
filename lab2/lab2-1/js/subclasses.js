console.log("extra");

class Team {

    constructor(name, location, principal, driver1, driver2) {
        this.name = name;
        this.location = location;
        this.principal = new Principal(principal);
        this.drivers = [
            new Driver(driver1),
            new Driver(driver2),
        ];
    }

    totalpoints() {
        let points = 0;
        for (let d in this.drivers) {
            points += this.drivers[d].totalpoints() ;
        }
        return points;
    }

    addpoints(driver, points) {
        this.drivers[driver].addpoints(points);
    }

}

class TeamMember{
    constructor(name){
        this.name = name;
    }
}

class Principal extends TeamMember {
    constructor(name){
        super(name);
    }
}

class Driver extends TeamMember {
    constructor(name){
        super(name);
        this.points = [];
    }

    totalpoints(){
        let points = 0;
        for (let p in this.points) {
            points += this.points[p]; ;
        }
    return points;
    }

    addpoints(points){
        this.points.push(points);
    }
}

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

