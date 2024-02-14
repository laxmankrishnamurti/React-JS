const render = document.getElementById("render");

const myComponents = {
  type: "a",
  attributes: {
    href: "https://google.com",
    target: "_blank",
    title: "Click here to visit Google",
  },
  value: "Visit Google",
};

function createReact(component) {
  let anchor = document.createElement(component.type);
  anchor.innerHTML = component.value;

  for (let key in component.attributes) {
    anchor.setAttribute(key, component.attributes[key]);
  }

  render.appendChild(anchor);
}

createReact(myComponents);
