#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        message: "Enter Your Sentence to counts the words!",
        type: "input"
    }]);
const words = answer.sentence.trim().split(" "); // trim => Remove White Spaces from start & end
console.log(words);
console.log(`Your Sentence word count is ${words.length}`);
