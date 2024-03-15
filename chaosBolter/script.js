const form = document.getElementById('chaosBolterForm');

var dmgTypes = {
    1: "Acid",
    2: "Cold",
    3: "Fire",
    4: "Force",
    5: "Lightning",
    6: "Poison",
    7: "Psychic",
    8: "Thunder"
}

function rollD6() {
    return Math.ceil(Math.random() * 6);
}

function rollD8() {
    return Math.ceil(Math.random() * 8);
}

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
 
    // const level = document.getElementById("spellLevel").value;
    const level = formData.get('spellLevel');

    let dmg = 0;

    firstD8 = rollD8();
    dmg += firstD8;

    // tracing
    // console.log("firstD8:", firstD8);
    // console.log("dmg: ", dmg);
    
    secondD8 = rollD8();
    dmg += secondD8;

    // tracing
    // console.log("secondD8:", secondD8);
    // console.log("dmg: ", dmg);

    


    for (let i = 0; i < level; i++) {
        // console.log(rollD6());
        thisD6 = rollD6();
        // console.log("This D6:", thisD6);
        dmg += thisD6;
        // console.log("dmg: ", dmg)
    }

    // uncomment to see final damage
    // console.log("Final Dmg: ", dmg)

    // some testing
    // console.log(typeof(parseInt(level)));
    // console.log(parseInt(level));

    outputHTML = "<p>You did <strong>" + dmg + " " + dmgTypes[firstD8] + "</strong> damage!</p>"

    if (firstD8 == secondD8) {
        outputHTML += "<p> Your chaos bolt arcs to a new enemy! Hit roll again and pick a new target within 30 feet!"
    }

    document.getElementById('output').innerHTML = outputHTML
}

// console.log(rollD6())
// console.log('first D8', firstD8)
// console.log('second D8', secondD8)

form.addEventListener('submit', onSubmit);