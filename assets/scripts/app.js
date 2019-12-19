/*
//console.log() shortcut
const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const inputString = document.querySelector(".app__form--submit").value;
const todoArray = [];
let pressed = 0;
let html = ``;
let number = 0;

btn.addEventListener(`click`, () => {
  inputString.value = ``;  
  titleArray.push(inputString);
  $(`${titleArray[pressed]} was created`);
  html = ``;
  number = 0;
  titleArray.forEach(htmlRewrite);
  $(html);
  app2.innerHTML = html;
  pressed++;
});

app2.addEventListener("click", event => {
  const {
    classList,
    dataset: { text: value }
  } = event.target;
  //grabbing text
  const holder = event.target;
  const clickedText = holder.innerHTML;
  if (classList.contains("title")) {
    $(`${titleArray.indexOf(clickedText)} array index of clicked text`);
    //use else if
  } else {
    const clickedIndex = event.target.dataset.holder;
    //Both Work
    $(
      `${
        holder.attributes.getNamedItem("data-holder").value
      } data attribute of button`
    );
    $(event.target.dataset.holder);
    resizeArray(titleArray, clickedIndex);
  }
});

function htmlRewrite(index) {
  $(number);
  html += `
 <div>
    <div class="task__holder" data-task="${index}">
        <div class="task__holder--complete">Completed</div>
            <p class="task__desc">${todoArray} ${index}</p>
            <div class="task__holder--complete task__holder--delete">Delete</div>
        </div>
    </div>
  `;
  index++;
  number++;
}

function resizeArray(array, index) {
  array.splice(index, 1);
  $(array);
  //calling dom
  html = ``;
  number = 0;
  titleArray.forEach(htmlRewrite);
  $(html);
  app2.innerHTML = html;
}
*/

const { log: $, warn: $w, error: $e } = console;
const btn = document.querySelector(".app__form--submit");
const tasksSection = document.querySelector(".tasks__wrapper");
const todoArray = [];
let activeTasks = document.querySelector(".app__tasks-active");
let pressed = 0;
let html = ``;
let counter = 0;

const getActiveTasks = () => { return activeTasks.innerHTML = `${todoArray.length} Active Tasks` };

btn.addEventListener(`click`, () => {
    const userInput = document.querySelector(".app__form--input");
    const finalInput = userInput.value;
    todoArray.push(finalInput);
    $(`${todoArray[pressed]}`);
    userInput.value = ``;  
    html = ``;
    counter = 0;
    todoArray.forEach(htmlRewrite);
    $(html);
    tasksSection.innerHTML = html;
    getActiveTasks();
    pressed++;
    $(todoArray.toString());
  });

  tasksSection.addEventListener('click', event => {
    const {
        classList,
        dataset: { text: value }
      } = event.target;
      //grabbing text
      const holder = event.target;
      const clickedText = holder.innerHTML;
      if (classList.contains("task__holder--complete")) {
        $(`${todoArray.indexOf(clickedText)}Completed`);
        //use else if
      } 
      else if(classList.contains("task__holder--delete")) {
        const clickedIndex = event.target.dataset.holder;
        //Both Work
        $(
          `${holder.attributes.getNamedItem("data-delete").value}
           data attribute of delete`
        );
        $(event.target.dataset.holder);
        setArraySize(todoArray, clickedIndex);
      }
  });

  function htmlRewrite() {
    html += `
    <div>
    <div class="task__holder">
        <div class="task__holder--complete" data-complete="${counter}">Completed</div>
            <p class="task__desc">${todoArray[counter]}</p>
            <div class="task__holder--delete" data-delete="${counter}">Delete</div>
        </div>
      </div>
    `;
    counter++;
  }

  function setArraySize(array, index) {
    array.splice(index, 1);
    $(array);
    //calling dom
    html = ``;
    counter = 0;
    todoArray.forEach(htmlRewrite);
    $(html);
    tasksSection.innerHTML = html;
  }