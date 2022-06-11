const { ipcRenderer } = window.require
  ? window.require("electron")
  : {
      ipcRenderer: {
        send: (a: string) => {
          console.log(a);
        },
      },
    };

const IPCEventHandler = {
  send: ipcRenderer.send,
};

export default IPCEventHandler;