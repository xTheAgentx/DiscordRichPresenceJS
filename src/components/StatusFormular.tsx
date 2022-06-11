import React from "react";

const { ipcRenderer } = window.require
  ? window.require("electron")
  : {
      ipcRenderer: {
        send: (a: string) => {
          console.log(a);
        },
      },
    };

export interface IStatusFormularProps {
  text: string;
}

const StatusFormular = (props: IStatusFormularProps): JSX.Element => {
  const updateStatus = () => {
    ipcRenderer.send("Test", "values");
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
