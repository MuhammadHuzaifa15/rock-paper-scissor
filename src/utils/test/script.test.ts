import { choicesArray } from '../constants';
import { randomGenerator, getRandomChoice, evaluate } from '../script';

describe('randomGenerator', () => {
    it('Should return random number between 0 and 2', () => {
        const result = randomGenerator(3);
        expect(result).toBeLessThan(3);
    });
});

describe('getRandomChoice', () => {
    it('Should return random choice from choices', () => {
        const result = getRandomChoice();
        expect(choicesArray).toContain(result);
    });
});

describe('evaluate', () => {
    it('Should return scissors', () => {
        const result1 = evaluate('paper', 'scissors');
        expect(result1).toEqual('scissors');

        const result2 = evaluate('scissors', 'paper');
        expect(result2).toEqual('scissors');
    });

    it('Should return rock', () => {
        const result1 = evaluate('rock', 'scissors');
        expect(result1).toEqual('rock');

        const result2 = evaluate('scissors', 'rock');
        expect(result2).toEqual('rock');
    });

    it('Should return paper', () => {
        const result1 = evaluate('rock', 'paper');
        expect(result1).toEqual('paper');

        const result2 = evaluate('paper', 'rock');
        expect(result2).toEqual('paper');
    });

    it('Should return TIE', () => {
        const result1 = evaluate('rock', 'rock');
        expect(result1).toEqual('TIE');

        const result2 = evaluate('paper', 'paper');
        expect(result2).toEqual('TIE');

        const result3 = evaluate('scissors', 'scissors');
        expect(result3).toEqual('TIE');
    });
});