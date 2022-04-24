import { IChoices } from "../../../utils/types";

export interface IPlayerBlock {
    title: string;
    subtitle: string;
    score: number;
    isChosen: boolean;
    choice?: IChoices;
    showChoices?: boolean;
    isOpponent?: boolean;
    showChosen?: boolean;
    choosePick?: (choice: IChoices) => void
}