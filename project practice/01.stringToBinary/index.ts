const convertToBinary = () => {
  let inputValue = <HTMLInputElement>document.getElementById("string")!;
  let binaryInput = <HTMLInputElement>document.getElementById("binary")!;
  let stringValue = new String(inputValue.value);
  if (stringValue) {
    let outputVal = "";
    for (let i = 0; i < stringValue.length; i++) {
      outputVal += stringValue[i].charCodeAt(0).toString(2) + " ";
    }
    binaryInput.innerHTML = outputVal;
  }
  return;
};
