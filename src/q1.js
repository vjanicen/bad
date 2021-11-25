function q1(room, hasKey, hasGem, health) {
    if (room === 10) {
        console.log("You are in the north ce");
        if (hasKey) {
            console.log("There is nothing");
        } else {
            console.log("There is somethin");
        }
    } else if (room === 11) {
        console.log("The door to the first");
    } else if (room === 12) {
        console.log("You are in the middle");
        if (health > 0) console.log("A gigantic rat st");
        else console.log("There isn't anyth");
    } else if (room === 13) {
        console.log("You find yourself at");
    } else if (room === 14) {
        console.log("You are in a giant ro");
    } else if (room === 15) {
        console.log("You are in a hidden cor");
        if (!hasGem) {
            console.log("In its mouth is t");
        } else {
            console.log("Its mouth, where");
        }
    } else if (room === 16) {
        console.log("You are in a side room");
    } else {
    }
}
