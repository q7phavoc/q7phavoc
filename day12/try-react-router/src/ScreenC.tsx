import React, { FC } from "react";
import { useHistory, useParams } from "react-router-dom";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

interface Params {
  userid: string;
}

// const ScreenC: FC<ScreenCProps> = ({message}) => {
const ScreenC: FC<ScreenCProps> = (props) => {
  const history = useHistory();
  const { userid } = useParams<Params>();

  const onClickGoback = () => {
    // props.history.goBack();
    history.goBack();
  };

  return (
    <div>
      <div>{"Your id is " + userid}</div>
      <div>{props.message}</div>
      <div>
        <button onClick={onClickGoback}>Go back</button>
      </div>
    </div>
  );
};

export default ScreenC;
