import React from "react";
import IPCEventHandler from "../handler/IPCEventHandler";

export interface IStatusFormularProps {
  text: string;
}

const StatusFormular = (props: IStatusFormularProps): JSX.Element => {
  const updateStatus = () => {
    IPCEventHandler.send("Test", "values");
  };
  return (
    <div>
      <h1>StatusFormular</h1>
      <p>My beautiful text ist ${props.text}</p>
      <button onClick={updateStatus}>[RUS] This is beautiful update button thing </button>
    </div>
  );
};
export default StatusFormular;
