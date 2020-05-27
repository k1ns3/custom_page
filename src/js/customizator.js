export default class Customizator {
  constructor() {
    this.btnBlock = document.createElement("div");
    this.colorPicker = document.createElement("input");

    this.btnBlock.addEventListener("click", (event) =>
      this.onScaleChange(event)
    );
  }

  onScaleChange(event) {
    let scale;
    const body = document.querySelector("body");
    if (event.target.value) {
      scale = +event.target.value.replace(/x/g, "");
    }

    function recursy(element) {
      element.childNodes.forEach((node) => {
        if (
          node.nodeName === "#text" &&
          node.nodeValue.replace(/\s+/g, "").length > 0
        ) {
          let value = window.getComputedStyle(node.parentNode, null).fontSize;
          node.parentNode.style.fontSize =
            value.replace(/px/g, "") * scale + "px";
        } else {
          recursy(node);
        }
      });
    }
    recursy(body);
  }

  render() {
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
  }
}
