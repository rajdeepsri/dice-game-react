import styles from "./IntroPage.module.css";

const IntroPage = ({ toggleGamePlay }) => {
  return (
    <div className={styles.container}>
      <div className={styles.diceImage}>
        <img src="images/dices.svg" alt="dices" />
      </div>
      <div className={styles.diceText}>
        <div>
          <h1>DICE GAME</h1>
        </div>
        <div className={styles.btn_container}>
          <button type="button" onClick={toggleGamePlay}>
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};
// console.log("hello");

export default IntroPage;
