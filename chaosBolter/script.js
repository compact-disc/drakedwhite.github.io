// Grab the form
const form = document.getElementById('chaosBolterForm');

// Make damage type dictionary
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

// make function to simulate rolling a D6
function rollD6() {
    return Math.ceil(Math.random() * 6);
}

// make function to simulate rolling a D8
function rollD8() {
    return Math.ceil(Math.random() * 8);
}

// main function when hitting the "Roll" button 
function onSubmit(e) {
    // prevent default so the page doesn't reset immediately after submission
    e.preventDefault();

    // create a FormData object
    const formData = new FormData(form);
 
    // const level = document.getElementById("spellLevel").value;

    // get the value of the level radio buttons when they're submitted
    const level = formData.get('spellLevel');

    // instantiate our total damage variable dmg
    let dmg = 0;

    // roll our first D8
    firstD8 = rollD8();
    // add the first D8 result to our total dmg
    dmg += firstD8;

    // tracing
    // console.log("firstD8:", firstD8);
    // console.log("dmg: ", dmg);
    
    // roll our second D8
    secondD8 = rollD8();
    // add our secondD8 damage to our total dmg
    dmg += secondD8;

    // tracing
    // console.log("secondD8:", secondD8);
    // console.log("dmg: ", dmg);

    // use the submitted spell level radio button result to determine how many D6s to roll 
    for (let i = 0; i < level; i++) {
        // console.log(rollD6());
        thisD6 = rollD6();
        // console.log("This D6:", thisD6);
        dmg += thisD6;
        // console.log("dmg: ", dmg)
    }

    // uncomment to see final damage in console
    // console.log("Final Dmg: ", dmg)

    // some testing
    // console.log(typeof(parseInt(level)));
    // console.log(parseInt(level));

    // add HTML onto the end because I'm too lazy to do it in a prettier way
    outputHTML = "<p>You did <strong>" + dmg + " " + dmgTypes[firstD8] + "/" + dmgTypes[secondD8] + "</strong> damage!</p>"

    // show first D8 result
    outputHTML += "<p> First D8: " + firstD8 + "</p>"

    // show second D8 result
    outputHTML += "<p> Second D8: " + secondD8 + "</p>"

    // show the total D6 rolls 
    outputHTML += "<p> D6 roll(s) total: " + (dmg -= (firstD8 + secondD8)) + "</p>"

    // notify user if the first and second D8 results are the same 
    if (firstD8 == secondD8) {
        outputHTML += "<p> Your chaos bolt arcs to a new enemy! Hit roll again and pick a new target within 30 feet!"
    }

    // set html 
    document.getElementById('output').innerHTML = outputHTML
}

// some tracing
// console.log(rollD6())
// console.log('first D8', firstD8)
// console.log('second D8', secondD8)

// event listener for when the button is submitted 
form.addEventListener('submit', onSubmit);