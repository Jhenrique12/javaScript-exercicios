const form = document.getElementById("formId");
const submitButton = document.getElementById("submitButton");

const addStackButton = document.getElementById("addStackButton");

const devList = [];
let numberStacks = 0;

function addStack() {
  const stacksDiv = document.getElementById("stacksDiv");

  const section = document.createElement("section");
  section.id = "section" + numberStacks;
  section.className = "section"

  const labelStack = document.createElement("label");
  labelStack.innerText = "\nStack: ";
  labelStack.htmlFor = "stack" + numberStacks;
  const stack = document.createElement("input");
  stack.type = "text";
  stack.id = "stack" + numberStacks;
  stack.name = "stack";

  const radio1 = document.createElement("input");
  radio1.type = "radio";
  radio1.id = "radio" + numberStacks + ".1";
  radio1.name = "experience" + numberStacks;
  radio1.value = "0-2 anos"
  const labelRadio1 = document.createElement("label");
  labelRadio1.htmlFor = "radio" + numberStacks + ".1";
  labelRadio1.innerText = "0-2 anos";

  const radio2 = document.createElement("input");
  radio2.type = "radio";
  radio2.id = "radio" + numberStacks + ".2";
  radio2.name = "experience" + numberStacks;
  radio2.value = "3-4 anos"
  const labelRadio2 = document.createElement("label");
  labelRadio2.htmlFor = "radio" + numberStacks + ".2";
  labelRadio2.innerText = "3-4 anos";

  const radio3 = document.createElement("input");
  radio3.type = "radio";
  radio3.id = "radio" + numberStacks + ".3";
  radio3.name = "experience" + numberStacks;
  radio3.value = "5+ anos"
  const labelRadio3 = document.createElement("label");
  labelRadio3.htmlFor = "radio" + numberStacks + ".3";
  labelRadio3.innerText = "5+ anos\n\n";

  const buttonRemoveStack = document.createElement("button");
  buttonRemoveStack.type = "button"
  buttonRemoveStack.innerText = "Remover";

  buttonRemoveStack.addEventListener("click", function () {
    stacksDiv.removeChild(section);
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

addStackButton.addEventListener("click", function () {
  addStack();
  numberStacks++;
});



form.addEventListener("submit", function (ev) {
  ev.preventDefault();

  const devName = document.getElementById("devName").value;

  const sections = this.querySelectorAll(".section")
  
  let technologies = []

  sections.forEach(function (section) {
    const stackName = document.querySelector('#' + section.id + ' input[name="stack"]').value
    const stackExperience = document.querySelector('#' + section.id + ' input[type="radio"]:checked').value

    

    technologies.push({name: stackName, exp: stackExperience})
  })

  const devInfo = {devName: devName, technologies}

  devList.push(devInfo)

  alert("Desenvolvedor cadastrado!")

  devName.value = ''

  sections.forEach(function (section) {
    section.remove()
  })
  console.log(devList)
});
