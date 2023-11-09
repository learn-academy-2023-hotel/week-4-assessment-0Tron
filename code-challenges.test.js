// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffledColors", () => {
    it("remove the first item from the array and shuffle the remaining items", () => {
    expect(shuffledColors(colors1)).toEqual(["yellow", "blue", "pink", "green"]);
    expect(shuffledColors(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]);
    })
})
// ReferenceError: array is not defined (This is a good error)

// b) Create the function that makes the test pass.

const shuffledColors = (newArray) => {
    const array = newArray.shift(0);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Pseudo code:
// input:Take in a array of colors
// output: return an array with the first color missing and rest shuffled
// i created a test for it and when i tested it i received a good error
// i used the .shift  method to try and remove an item from the beginning
// line 35 loops through the length of the array but skips the first index
// math.floor returns a random floating-point then we use math.floor to returns an integer
// This is where i got stuck, someone in my class mentioned to use the fisher yates method.
// i searched it up and read upon it but i kept getting stuck receiving errors and couldnt figure it out.

// Resource: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("numOfVotes", () => {
    it("Return number of up votes and down votes and returns the end tally.", () => {
        expect(numOfVotes(votes1)).toEqual(11)
        expect(numOfVotes(votes2)).toEqual(-31)
    })
})
// ReferenceError: numOfVotes is not defined (This is a good error)

// b) Create the function that makes the test pass.

const numOfVotes = ({upVotes, downVotes}) => {
    return upVotes - downVotes
}
// Pseudo code:
// input: take in the votes
// output: returns the end tally beetween the upVotes and downVotes
// Created a function called const numOfVotes that takes our parameters upVotes and downVotes and calculates the difference.