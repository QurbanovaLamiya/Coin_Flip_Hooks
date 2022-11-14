import { Fragment } from "react";

const CoinFlipImg = ({ randomImg }) => {
  return (
    <Fragment>
      <img src={randomImg} alt="" width={250} />
    </Fragment>
  );
};

export default CoinFlipImg;
