import { IPlayerBlock } from "./types";

import "./PlayerBlock.scss";
import { useCallback } from "react";
import { choices } from "../../../utils/constants";
import { Loader } from "../../Common/Loader";
import { Card } from "antd";

const PlayerBlock = (props: IPlayerBlock) => {
  const {
    title,
    subtitle,
    score,
    isChosen,
    showChoice = false,
    choice = "",
    isOpponent = false,
    choosePick,
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
                  onClick={() => choosePick && choosePick(key)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }, [choosePick]);

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
      <div className="choice-block">
        <div className="choice">
          <img
            alt="Check Mark"
            src={require(`../../../assets/svgs/check-mark.png`)}
          />
        </div>
      </div>
    ) : (
      <div className="choice-block">
        <Loader />
      </div>
    );
  }, [isChosen]);

  return (
    <div className="player-block">
      <Card
        title={title}
        extra={`Score ${score}`}
        actions={[<p className="subtitle">{subtitle}</p>]}
        bordered={false}
      >
        {showChoice && !isChosen && !isOpponent && renderChoicesBlock()}
        {isChosen && !showChoice && !isOpponent && renderChoiceBlock()}
        {isOpponent && renderOpponentBlock()}
      </Card>
    </div>
  );
};

export default PlayerBlock;
