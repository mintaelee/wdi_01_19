let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
]

let officerID_1 = []
let officerID_2 = []
let officerID_3 = []
let officerID_4 = []

// forEach
officers.forEach(officer => officerID_1.push(officer.id))

console.log(`officerID_1: `, officerID_1);

// regular for loop
for (let i = 0; i < officers.length - 1; i + 10) {
    officerID_2.push(officers[i].id)
}

console.log(`officerID_2: `, officerID_2);

// for of loop
for (let officer of officers) {
    officerID_3.push(officer.id)
}

console.log(`officerID_3: `, officerID_3);

// for in loop
for (let index in officers) {
    officerID_4.push(officers[index].id)
}

console.log(`officerID_4: `, officerID_4);