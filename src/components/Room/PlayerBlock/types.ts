import { IChoices } from "../../../utils/types";

export interface IPlayerBlock {
    title: string;
    subtitle: string;
    score: number;
    isChosen: boolean;
    choice?: IChoices;
    showChoice?: boolean;
    isOpponent?: boolean;
    choosePick?: (choice: IChoices) => void
}