// const JOURNAL = require("./journal");

let journal = [];
function addEntry(events, squirrel){
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);

console.log("journal looks like");
console.log(journal);

// Now lets use the journal with full set of data

journal = JOURNAL;

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
    (table[0] + table[1]) *
    (table[1] + table[3]) *
    (table[0] + table[2]));
}

console.log(`Phi is ${phi([76, 9, 4, 1])}`)

// To extract a 2x2 table for a specific event from journal, we must loop
// over all entries and tally how many times the event occurs in relation
// to squirrel transformations

function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
return table;
}

// NOTE: I don't have the big downloaded JOURNAL with all the data
console.log(`Example table for pizza is ${tableFor("pizza", journal)}`)


// We now have tools to compute individual correlations. So we can find
// a correlation for every type of event in the data, and see if there are
// any standouts.

// We need to compute a correlation for every type of event in the dataset.
// We need to identify every type of event.

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events){
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(`big JOURNAL is ${JOURNAL[0]["events"]}`);

// Now we can see all the correlations using this below:
for (let event of journalEvents(journal)){
    console.log(event + ":", phi(tableFor(event, journal)));
}

// test change for git auth issue

