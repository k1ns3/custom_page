export default class Customizator {
  constructor() {
    this.btnBlock = document.createElement("div");
    this.colorPicker = document.createElement("input");

    this.btnBlock.addEventListener("click", (event) =>
      this.onScaleChange(event)
    );

    this.colorPicker.addEventListener("input", (event) =>
      this.onColorChange(event)
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
          if (!node.parentNode.getAttribute("data-fz")) {
            let value = window.getComputedStyle(node.parentNode, null).fontSize;
            node.parentNode.setAttribute("data-fz", +value.replace(/px/g, ""));
            node.parentNode.style.fontSize =
              node.parentNode.getAttribute("data-fz") * scale + "px";
          } else {
            node.parentNode.style.fontSize =
              node.parentNode.getAttribute("data-fz") * scale + "px";
          }
        } else {
          recursy(node);
        }
      });
    }
    recursy(body);
  }
  onColorChange(event) {
    const body = document.querySelector("body");
    body.style.backgroundColor = event.target.value;
    console.log(event.target.value);
  }

  injectStyle() {
    const style = document.createElement("style");
    style.innerHTML = `
          .panel {
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: fixed;
            top: 10px;
            right: 0;
            border: 1px solid rgba(0,0,0, .2);
            box-shadow: 0 0 20px rgba(0,0,0, .5);
            width: 300px;
            height: 60px;
            background-color: #fff;
        }
        .scale {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100px;
            height: 40px;
        }
        .scale_btn {
          display: block;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(0,0,0, .2);
          border-radius: 4px;
          font-size: 18px;   
        }
        .color {
            width: 40px;
            height: 40px;
        }
    `;
    document.querySelector("head").appendChild(style);
  }
  render() {
    this.injectStyle();

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
