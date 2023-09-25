import { useState } from "react";
import GamePlay from "./components/Gameplay/GamePlay";
import IntroPage from "./components/Intro Page/IntroPage";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => setIsGameStarted(!isGameStarted);
  return (
    <>
      {isGameStarted ? (
        <GamePlay toggleGamePlay={toggleGamePlay} />
      ) : (
        <IntroPage toggleGamePlay={toggleGamePlay} />
      )}
    </>
  );
};

export default App;
