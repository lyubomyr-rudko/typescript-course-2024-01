interface IFileRef {
  appendMessage: (message: string) => void;
}

let fileRef: IFileRef | null = null;

function openFile() {
  fileRef = {
    appendMessage(message: string) {
      console.log(message);
    },
  };
}

export default {
  logError() {
    // if need to coneect to db - do it here
    openFile();

    fileRef?.appendMessage('error');
  },

  logInfo() {
    // if need to coneect to db - do it here
  },
};
