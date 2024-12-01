let containerAttributes = {
  display: ["flex", "inline-flex"],
  flexDirection: ["row", "row-reverse", "column", "column-reverse"],
  flexWrap: ["nowrap", "wrap", "wrap-reverse"],
  justifyContent: [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ],
  alignItems: ["stretch", "flex-start", "flex-end", "center", "baseline"],
  alignContent: [
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
  ],
};
let itemAttributes = {
  order: 0,
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: "auto",
  alignSelf: "auto",
};

function createUI() {
  let html = "";
  for (let attr in containerAttributes) {
    html += `${attr}: <select id="${attr}" onChange="valueChanged(this)">`;
    for (let value of containerAttributes[attr]) {
      html += `<option>${value}</option>`;
    }
    html += "</select><br>";
  }
  document.querySelector("#left").innerHTML = html;
}
createUI();

function valueChanged(src) {
  document.querySelector(".container").style[src.id] = src.value;
}

function showCode() {
  let code = ".container {\n";
  for (let attr in containerAttributes) {
    let value = document.querySelector(`#${attr}`).value;
    code += `    ${attr}: ${value};\n`;
  }
  code += "}";
  document.querySelector("#code").innerHTML = code;
}
