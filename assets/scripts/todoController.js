//Most of the code from app.js will go in here
function getActiveDisplay() {
    if(display) {
      setCounter();
      setHtml();
      completeArray.forEach(completeTaskDisplay);
      tasksSection.innerHTML = html;
    }
    else {
      setCounter();
      setHtml();
      todoArray.forEach(htmlRewrite);
      tasksSection.innerHTML = html;
    }
  }

  //functions will be needed here to grab model data


class TodoController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  // Not too sure what this one does
  init() {

  }

  addTask() {
    
  }

  removeTask() {

  }

  completeTask() {

  }

  updateList() {

  }

}

export default TodoController;