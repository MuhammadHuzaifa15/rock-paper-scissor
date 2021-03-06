import { IChoices } from "./types";

export const Menus = [
  { name: "Home", key: "home", path: "/" },
];

export const choicesArray = ['rock', 'paper', 'scissors'];

export const choices: { key: IChoices, value: string, image: string }[] = [
  {
    key: "rock",
    value: "Rock",
    image: 'rock.svg'
  },
  {
    key: "paper",
    value: "Paper",
    image: 'paper.svg'
  },
  {
    key: "scissors",
    value: "Scissors",
    image: 'scissors.svg'
  }
];
