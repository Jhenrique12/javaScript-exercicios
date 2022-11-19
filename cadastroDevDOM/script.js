const form = document.getElementById("formId");
const submitButton = document.getElementById("submitButton");

const addStackButton = document.getElementById("addStackButton");
const stacksDiv = document.getElementById("stacksDiv");

const devList = [];
let numberStacks = 0;

form.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const devInfo = {};
  const devName = document.getElementById("devName");

  for (let i = 0; i < numberStacks; i++) {
    const currentStack = document.getElementById("stack" + i);

    devInfo["devName" + i] = devName.value;
    devInfo["stack" + i] = currentStack.value;
  }

  devList.push(devInfo);

  console.log(devInfo);
  console.log(devList);

  console.log(numberStacks);
  devName.value = "";
});

// const botao  = document.getElementById("a")
// botao.addEventListener ("click", function(ev) {
//   ev.preventDefault
//   const devName = document.getElementById("devName")

//talvez tenha que usar um for junto do numberStacks pra percorrer e add os itens ao obj
//   const stack

//   devInfor.name = devName.value
//   console.log(devInfor)

// })

function addStack() {
  const section = document.createElement("section");
  section.id = "section" + numberStacks;

  const labelStack = document.createElement("label");
  labelStack.innerText = "\nStack: ";
  labelStack.htmlFor = "stack" + numberStacks;
  const stack = document.createElement("input");
  stack.type = "text";
  stack.id = "stack" + numberStacks;
  stack.name = stack.id;

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.id = "radio1" + numberStacks;
  radio1.name = "experience" + numberStacks;
  const labelRadio1 = document.createElement("label");
  labelRadio1.htmlFor = "radio1" + numberStacks;
  labelRadio1.innerText = "0-2 anos";

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.id = "radio2" + numberStacks;
  radio2.name = "experience" + numberStacks;
  const labelRadio2 = document.createElement("label");
  labelRadio2.htmlFor = "radio2" + numberStacks;
  labelRadio2.innerText = "3-4 anos";

  const radio3 = document.createElement("input");
  radio3.type = "radio";
  radio3.id = "radio3" + numberStacks;
  radio3.name = "experience" + numberStacks;
  const labelRadio3 = document.createElement("label");
  labelRadio3.htmlFor = "radio3" + numberStacks;
  labelRadio3.innerText = "5+ anos\n\n";

  const buttonRemoveStack = document.createElement("button");
  buttonRemoveStack.id = "removeButton" + numberStacks;
  buttonRemoveStack.innerText = "Remover stack";

  buttonRemoveStack.addEventListener("click", function (ev) {
    ev.preventDefault();

    const section = ev.currentTarget.parentNode;
    stacksDiv.removeChild(section);
    numberStacks -= 1;
  });

  section.append(
    labelStack,
    stack,
    radio1,
    labelRadio1,
    radio2,
    labelRadio2,
    radio3,
    labelRadio3,
    buttonRemoveStack
  );

  stacksDiv.appendChild(section);
}

addStackButton.addEventListener("click", function (ev) {
  ev.preventDefault;

  addStack();
  numberStacks++;
});

//forEach 2x em cada
// devInfo = {name, stack.value, experience.value}

// devList.push(devInfo)
