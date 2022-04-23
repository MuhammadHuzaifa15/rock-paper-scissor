import { IPlayerBlock } from "./types";

import "./PlayerBlock.scss";
import { useCallback } from "react";
import { choices } from "../../../utils/constants";
import { Loader } from "../../Common/Loader";

const PlayerBlock = (props: IPlayerBlock) => {
  const {
    title,
    subtitle,
    score,
    isChosen,
    showChoice = false,
    choice = "",
    isOpponent = false,
  } = props;

  const renderChoicesBlock = useCallback(() => {
    return (
      <div className="choices-block">
        <div className="choices">
          {choices.map((choice) => {
            const { key, value, image } = choice;
            return (
              <div key={key} className="choice">
                <img
                  alt={value}
                  src={require(`../../../assets/svgs/${image}`)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }, []);

  const renderChoiceBlock = useCallback(() => {
    const choiceOption = choices.find((c) => c.key === choice);
    if (!choiceOption) {
      return null;
    }
    return (
      <div className="choice-block">
        <div key={choiceOption.key} className="choice">
          <img
            alt={choiceOption.value}
            src={require(`../../../assets/svgs/${choiceOption.image}`)}
          />
        </div>
      </div>
    );
  }, [choice]);

  const renderOpponentBlock = useCallback(() => {
    return isChosen ? (
      <div>
        <Loader />
      </div>
    ) : (
      <div className="choice-block">
        <div className="choice">
          <img
            alt="Check Mark"
            src={require(`../../../assets/svgs/check-mark.png`)}
          />
        </div>
      </div>
    );
  }, [isChosen]);

  return (
    <div className="player-block">
      <h2 className="title">{title}</h2>
      <h3 className="score">Score {score}</h3>
      {showChoice && !isChosen && renderChoicesBlock()}
      {isChosen && !showChoice && renderChoiceBlock()}
      {isOpponent && renderOpponentBlock()}
      <p className="subtitle">{subtitle}</p>
    </div>
  );
};

export default PlayerBlock;
