class TodoView {
  constructor() {
      this.UI = {
          userInput: document.querySelector(".app__form--input"),
          submit: document.querySelector(".app__form--submit"),
          tasksSection: document.querySelector(".tasks__wrapper"),
          errorElement: document.querySelector(".app__error"),
          displayIncompleteTasks: document.querySelector("#incomplete"),
          displayCompleteTasks: document.querySelector("#complete"),
          activeTasks: document.querySelector(".app__tasks-active"),
          date: document.querySelector(".app__date")
      }
  }

  invokeEventListeners(array, updateList, userClickedOn) {
      this.UI.submit.addEventListener("click", () => {
          const userInputFinal = this.UI.userInput.value;
          if (userInputFinal.length > 0) {
              this.UI.errorElement.innerHTML = ``;
              this.UI.userInput.value = ``;
              updateList(userInputFinal);
          } else {
              this.UI.userInput.value = ``;
              this.UI.errorElement.innerHTML = "Error Input Isn't Long Enough!";
          }
      });
      // False means incomplete, true is opposite
      this.UI.displayIncompleteTasks.addEventListener("click", this.displayTasks(false, array));
      this.UI.displayCompleteTasks.addEventListener("click", this.displayTasks(true, array));
      /* 
      Since userClickedOn is getting moved into TodoController, use a callback passing in userClickedOn
      Call userClickedOn in this eventListener 
      bind will also be needed for something I believe
      */
     // CURRENTLY BROKEN
      this.UI.tasksSection.addEventListener("click", event => {
        // Originally had this but trying to move this into controller so there are some issues atm
        const {
            classList,
            dataSet: {
                text: value
            }
        } = event.target;
        //userClickedOn(classList);
        userClickedOn(classList);
    });
  }

  /*
   Handles with grabbing what you clicked on by data attribute.
   This might be moved to controller
  userClickedOn(event) {
      const holder = event.target;
      const clickedText = holder.innerHTML;
      if (classList.contains("task__holder--complete")) {
          const clickedIndex = event.target.dataset.complete;
          // Fix this
          //setCompletedTasks(this.model.todos, clickedIndex);
      } else if (classList.contains("task__holder--delete")) {
          const clickedIndex = event.target.dataset.delete;
          //this.model.removeTodo(this.model.todos, clickedIndex);
      } else if (classList.contains("task__holder--undo")) {
          const clickedIndex = event.target.dataset.undo;
          // Fix this
          // Remove it from index in completed array and move it to todoArray
      }
  }*/

  /* callback possibly needed to grab array
  displayActiveTasks(array) {
    return this.UI.activeTasks.innerHTML = `${array.length} Active Tasks`;
  } */

  displayDate() {
      const d = new Date();
      // Use an array of strings that contain months and days of the week. Get the number of the day/month and then just use dayOfWeek[index]
      this.UI.date.innerHTML = `${d.getMonth()} ${d.getDay()}, ${d.getFullYear()}`;
  }

    // Callbacks will be needed to grab the array, althrough I think it can be grabbed from a method in this class
  displayTasks(type, todos) {
      let index = 0;
      let dataAttributeType = "";
      let html = ``;
      if (type) {
          dataAttributeType = "delete";
      } else {
          dataAttributeType = "undo";
      }
      // Switch to filter method
      for (index in todos) {
          if (todos.state[index] == type) {
              html += `
            <div>
            <div class="task__holder">
                <div class="task__holder--${dataAttributeType}" data-${dataAttributeType}="${index}">${dataAttributeType}</div>
                    <p class="task__desc">${todos.task[index]}</p>
                <div class="task__holder--delete" data-${dataAttributeType}="${index}">Delete</div>
            </div>
           </div>
            `;
          }
      }
      this.UI.tasksSection.innerHTML = html;
  }
}

export default TodoView;