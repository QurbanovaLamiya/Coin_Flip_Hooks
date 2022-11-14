import { Fragment, useState } from "react";
import CoinFlipImg from "../CoinFlipImg";
import Data from "../CoinFlipData";

import "./coinFlip.css";

const CoinFlip = () => {
  const [randomImg, setRandomImg] = useState("");
  const [score, setScore] = useState({ head: 0, tail: 0, flip: 0 });

  const coinFlip = () => {
    let randomNum = Math.floor(Math.random() * 2);
    let tail = score.tail;
    let head = score.head;

    if (randomNum) {
      setRandomImg(Data[randomNum]);
      setScore({ head: score.head + 1, tail, flip: score.flip + 1 });
    } else {
      setRandomImg(Data[randomNum]);
      setScore({ head, tail: score.tail + 1, flip: score.flip + 1 });
    }
  };

  return (
    <Fragment>
      <h1>Let's Flip A Coin!</h1>
      <div className="container">
        <CoinFlipImg randomImg={randomImg.image} />
        <button onClick={coinFlip}>Flip Me !</button>
        <p>
          Out of <span>{score.flip}</span> flips, there have been
          <span>{score.head}</span>
          heads and <span>{score.tail}</span> tails.
        </p>
      </div>
    </Fragment>
  );
};

export default CoinFlip;
