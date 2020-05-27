export default class Customizator {
  constructor() {}

  render() {
    this.btnBlock = document.createElement("div");
    this.colorPicker = document.createElement("input");

    let scaleInputSmall = document.createElement("input"),
      scaleInputMedium = document.createElement("input"),
      panel = document.createElement("div");

    panel.append(this.btnBlock, this.colorPicker);

    scaleInputSmall.classList.add("scale_btn");
    scaleInputMedium.classList.add("scale_btn");
    this.btnBlock.classList.add("scale");
    this.colorPicker.classList.add("color");

    scaleInputSmall.setAttribute("type", "button");
    scaleInputMedium.setAttribute("type", "button");
    scaleInputSmall.setAttribute("value", "1x");
    scaleInputMedium.setAttribute("value", "1.5x");
    this.colorPicker.setAttribute("type", "color");
    this.colorPicker.setAttribute("value", "#ffffff");

    this.btnBlock.append(scaleInputSmall, scaleInputMedium);

    panel.classList.add("panel");

    document.querySelector("body").append(panel);

    console.log(this.btnBlock, scaleInputSmall, scaleInputMedium);
  }
}
