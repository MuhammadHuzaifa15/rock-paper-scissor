import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerBlock, IPlayerBlock } from "..";
import { evaluate, getRandomChoice } from "../../../utils/script";
import { Button } from "../../Common";

import "./Watch.scss";

const delay = 3000;
const firstPlayerInitialState: IPlayerBlock = {
  title: "Player 1",
  subtitle: "Player 1 is choosing pick",
  score: 0,
  isChosen: false,
  showChoices: true,
};
const secondPlayerInitialState: IPlayerBlock = {
  title: "Player 2",
  subtitle: "Player 2 is choosing pick",
  score: 0,
  isChosen: false,
  showChoices: true,
};

const Watch = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState(0);
  const [ties, setTies] = useState(0);

  const [firstPlayer, setFirstPlayer] = useState(firstPlayerInitialState);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);

  const [secondPlayer, setSecondPlayer] = useState(secondPlayerInitialState);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);

  const [result, setResult] = useState("");
  const [roundCompleted, setRoundCompleted] = useState(false);
  const [matchCompleted, setMatchCompleted] = useState(false);

  const [matchTimeoutState, setMatchTimeoutState] =
    useState<NodeJS.Timeout | null>(null);
  const [playersTimeoutState, setPlayersTimeoutState] =
    useState<NodeJS.Timeout | null>(null);

  const startRound = useCallback(() => {
    setResult("");
    setFirstPlayer(firstPlayerInitialState);
    setSecondPlayer(secondPlayerInitialState);
    setRound(round + 1);
    setPlayersTimeoutState(
      setTimeout(() => {
        setFirstPlayer({
          ...firstPlayerInitialState,
          choice: getRandomChoice(),
          isChosen: true,
          showChosen: true,
          showChoices: false,
          subtitle: "Player 1 made a pick",
        });
        setSecondPlayer({
          ...secondPlayerInitialState,
          choice: getRandomChoice(),
          isChosen: true,
          showChoices: false,
          showChosen: true,
          subtitle: "Player 2 made a pick",
        });
      }, delay)
    );
  }, [round]);

  useEffect(() => {
    if (roundCompleted) {
      if (firstPlayerScore < 3 && secondPlayerScore < 3) {
        setMatchTimeoutState(setTimeout(startRound, 5000));
      } else {
        setMatchCompleted(true);
        if (firstPlayerScore === 3) setResult("Game Ended! Player 1 wins.");
        if (secondPlayerScore === 3) setResult("Game Ended! Player 2 wins.");
      }
      setRoundCompleted(false);
    }
  }, [firstPlayerScore, roundCompleted, secondPlayerScore, startRound]);

  useEffect(() => {
    startRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (matchTimeoutState) clearTimeout(matchTimeoutState);
      if (playersTimeoutState) clearTimeout(playersTimeoutState);
    };
  }, [matchTimeoutState, playersTimeoutState]);

  const evaluateResults = useCallback(() => {
    if (firstPlayer.choice && secondPlayer.choice) {
      const result = evaluate(firstPlayer.choice, secondPlayer.choice);
      let resultMessage = "";
      if (result === "TIE") {
        resultMessage = "TIE!";
        setTies(ties + 1);
      } else if (result === firstPlayer.choice) {
        resultMessage = "Player 1 wins!";
        setFirstPlayerScore(firstPlayerScore + 1);
      } else {
        resultMessage = "Player 2 wins!";
        setSecondPlayerScore(secondPlayerScore + 1);
      }
      setResult(resultMessage);
      setRoundCompleted(true);
    }
  }, [
    firstPlayer.choice,
    firstPlayerScore,
    secondPlayer.choice,
    secondPlayerScore,
    ties,
  ]);

  useEffect(() => {
    if (firstPlayer.choice && secondPlayer.choice) {
      evaluateResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstPlayer.choice, secondPlayer.choice]);

  const stopWatching = () => {
    navigate("/");
  };

  return (
    <div className="cmp-watch">
      <div className="header">
        <h1 className="round-title">ROUND {round}</h1>
        <h1>{result}</h1>
        <h1 className="round-title">Total ties: {ties}</h1>
      </div>

      <div className="players-block">
        <PlayerBlock
          {...firstPlayer}
          score={firstPlayerScore}
          isOpponent={false}
        />
        <PlayerBlock
          {...secondPlayer}
          score={secondPlayerScore}
          isOpponent={false}
        />
      </div>

      <div className="btn-block">
        <Button onClick={stopWatching}>
          {matchCompleted ? "Go home" : "Stop Watching"}
        </Button>
      </div>
    </div>
  );
};

export default Watch;
