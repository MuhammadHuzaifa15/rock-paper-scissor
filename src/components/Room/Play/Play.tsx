import { Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPlayerBlock, PlayerBlock } from "..";
import { evaluate, getRandomChoice } from "../../../utils/script";
import { IChoices } from "../../../utils/types";

import "./Play.scss";

const delay = 1000;
const firstPlayerInitialState: IPlayerBlock = {
  title: "You",
  subtitle: "Choose your pick",
  score: 0,
  isChosen: false,
  showChoice: true,
};
const secondPlayerInitialState: IPlayerBlock = {
  title: "Opponent",
  subtitle: "Opponent is choosing pick",
  score: 0,
  isChosen: false,
  showChoice: false,
};

const Play = () => {
  const navigate = useNavigate();
  const [round, setRound] = useState(0);
  const [ties, setTies] = useState(0);

  const [result, setResult] = useState("");
  const [roundCompleted, setRoundCompleted] = useState(false);
  const [matchCompleted, setMatchCompleted] = useState(false);

  const [firstPlayer, setFirstPlayer] = useState(firstPlayerInitialState);
  const [firstPlayerScore, setFirstPlayerScore] = useState(0);

  const [secondPlayer, setSecondPlayer] = useState(secondPlayerInitialState);
  const [secondPlayerScore, setSecondPlayerScore] = useState(0);

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
        setSecondPlayer({
          ...secondPlayerInitialState,
          choice: getRandomChoice(),
          isChosen: true,
          showChoice: false,
          subtitle: "Opponent made a pick",
        });
      }, delay)
    );
  }, [round]);

  useEffect(() => {
    startRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (roundCompleted) {
      if (firstPlayerScore < 3 && secondPlayerScore < 3) {
        setMatchTimeoutState(setTimeout(startRound, 2000));
      } else {
        setMatchCompleted(true);
      }
      setRoundCompleted(false);
    }
  }, [firstPlayerScore, roundCompleted, secondPlayerScore, startRound]);

  const evaluateResults = useCallback(() => {
    if (firstPlayer.choice && secondPlayer.choice) {
      const result = evaluate(firstPlayer.choice, secondPlayer.choice);
      let resultMessage = "";
      if (result === "TIE") {
        resultMessage = "TIE!";
        setTies(ties + 1);
      } else if (result === firstPlayer.choice) {
        resultMessage = "You wins!";
        setFirstPlayerScore(firstPlayerScore + 1);
      } else {
        resultMessage = "Opponent wins!";
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

  useEffect(() => {
    return () => {
      if (matchTimeoutState) clearTimeout(matchTimeoutState);
      if (playersTimeoutState) clearTimeout(playersTimeoutState);
    };
  }, [matchTimeoutState, playersTimeoutState]);

  const stopPlaying = () => {
    navigate("/");
  };

  const choosePick = useCallback(
    (choice: IChoices) => {
      setFirstPlayer({
        ...firstPlayer,
        choice,
        isChosen: true,
        showChoice: false,
        subtitle: "You made a pick",
      });
    },
    [firstPlayer]
  );

  return (
    <div className="cmp-play">
      <div className="header">
        <h1 className="round-title">ROUND {round}</h1>
        <h1>{result}</h1>
        <h1 className="round-title">Total ties: {ties}</h1>
      </div>
      {!matchCompleted && (
        <div className="players-block">
          <PlayerBlock
            {...firstPlayer}
            choosePick={choosePick}
            score={firstPlayerScore}
            isOpponent={false}
          />
          <PlayerBlock
            {...secondPlayer}
            isOpponent={true}
            score={secondPlayerScore}
          />
        </div>
      )}
      <div className="btn-block">
        <Button onClick={stopPlaying}>Stop Playing</Button>
      </div>
    </div>
  );
};

export default Play;
