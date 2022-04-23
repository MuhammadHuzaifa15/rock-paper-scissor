import { choices } from "./constants";
import { IChoices } from "./types";

export const randomGenerator = (limit: number) => {
    return Math.floor(Math.random() * limit);
}

export const getRandomChoice = (): string => {
    return choices[randomGenerator(choices.length)].key
}

export const rules = new Map<string, string>([
    // ROCK
    ["rock_rock", "TIE"],
    ["rock_paper", "paper"],
    ["rock_scissors", "rock"],
    // SCISSORS
    ["scissors_scissors", "TIE"],
    ["scissors_paper", "scissors"],
    ["scissors_rock", "rock"],
    // PAPER
    ["paper_paper", "TIE"],
    ["paper_rock", "paper"],
    ["paper_scissors", "scissors"],
]);

export const evaluate = (turn1: IChoices, turn2: IChoices) => {
    return rules.get(`${turn1}_${turn2}`);
};