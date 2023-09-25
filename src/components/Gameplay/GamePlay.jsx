import { useEffect, useState } from "react";
import styles from "./GamePlay.module.css";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

const GamePlay = ({ toggleGamePlay }) => {
  const [totalScore, setTotalScore] = useState(0);
  const [isShowRules, setIsShowRules] = useState(false);
  const [diceNumber, setDiceNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(-1);
  const [numRounds, setNumRounds] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickScroll = () => {
    const element = document.getElementById("rulesTab");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDiceRoll = () => setDiceNumber(Math.ceil(Math.random() * 6));
  const calScore = () => {
    setTimeout(() => {
      if (selectedNumber === diceNumber) {
        setTotalScore(totalScore + selectedNumber);
      } else {
        setTotalScore(totalScore - 1);
      }
    }, 1);
  };

  useEffect(() => {
    if (selectedNumber !== -1) {
      calScore();
    }
  }, [diceNumber]);

  return (
    <div className={styles.container}>
      <div className={styles.redp}>
        <button className={styles.goback} onClick={toggleGamePlay}>
          <p>
            <IconContext.Provider
              value={{
                style: {
                  verticalAlign: "middle",
                  marginRight: "5px",
                  marginBottom: "1px",
                },
              }}
            >
              <FaAngleDoubleLeft size="16px" />
              Go Back
            </IconContext.Provider>
          </p>
        </button>
        <p
          style={{
            display: selectedNumber === -1 ? "block" : "none",
            textAlign: "center",
          }}
        >
          You have not selected any number
        </p>
      </div>
      {/*-------------------------------- upper div --------------------------------*/}
      <div className={styles.upperdiv}>
        <div className={styles.score}>
          <span>{totalScore}</span>
          <p>Total Score</p>
        </div>
        <div className={styles.select}>
          <div className={styles.select_number}>
            {[1, 2, 3, 4, 5, 6].map((number) => {
              return (
                <div
                  key={number}
                  onClick={() => {
                    setSelectedNumber(number);
                  }}
                  className={`${styles.box} ${
                    number === selectedNumber ? styles.box_selected : ""
                  }`}
                >
                  {number}
                </div>
              );
            })}
          </div>
          <div className={styles.numRounds}>
            <p>Number of Rounds : {numRounds}</p>
          </div>
        </div>
      </div>
      {/*-------------------------------- lower div --------------------------------*/}
      <div className={styles.lowerdiv}>
        <div className={styles.dice}>
          <img
            onClick={() => {
              if (selectedNumber === -1) {
                handleOpenModal();
                alert("Please Select any Number");
                return;
              }
              handleDiceRoll();
              setNumRounds(numRounds + 1);
            }}
            src={`/images/dice_${diceNumber}.png`}
            alt="dice_number"
          />
        </div>
        <p>Click on Dice to Roll</p>
        <button
          className={styles.outline_btn}
          onClick={() => {
            setTotalScore(0);
            setNumRounds(0);
          }}
        >
          Reset Score
        </button>
        <button
          onClick={() => {
            setIsShowRules(!isShowRules);
            setTimeout(() => handleClickScroll(), 1);
          }}
        >
          Show Rules
        </button>
        <div
          id="rulesTab"
          className={styles.rules}
          style={{ display: isShowRules ? "block" : "none", marginTop: "4rem" }}
        >
          <h1>How to play dice game</h1>
          <div className={styles.rules_div}>
            <p>Please select a number.</p>
            <p>Click on the dice image.</p>
            <p>
              If the selected number is equal to the number on the dice, you
              will receive the same number of points as shown on the dice.
            </p>
            <p>If you guess incorrectly, 1 points will be deducted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
