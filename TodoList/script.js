class Item {
  constructor(newTask) {
    this.crearDiv(newTask);
  }

  container = document.querySelector(".container");

  crearDiv(task) {
    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "item";

    let inputItem = document.createElement("input");
    inputItem.type = "text";
    inputItem.disabled = true;
    inputItem.className = "item-input";
    inputItem.value = task;

    let editButton = document.createElement("button");
    editButton.className = "boton-editar fas fa-lock";
    editButton.addEventListener("click", (e) =>
      this.handleEditClick(inputItem, editButton)
    );

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    deleteButton.className = "boton-remover";
    deleteButton.addEventListener("click", (e) =>
      this.handleDeleteClick(e, nuevoDiv)
    );

    nuevoDiv.appendChild(inputItem);
    nuevoDiv.appendChild(editButton);
    nuevoDiv.appendChild(deleteButton);

    this.container.appendChild(nuevoDiv);
  }

  handleEditClick(inputItem, editButton) {
    if (inputItem.disabled) {
      editButton.className = "boton-editar fas fa-lock-open";
      inputItem.disabled = false;
    } else {
      editButton.className = "boton-editar fas fa-lock";
      inputItem.disabled = true;
    }
  }

  handleDeleteClick(e, nuevoDiv) {
    this.container.removeChild(nuevoDiv);
  }
}
let input = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
botonAgregar.addEventListener("click", () => checkInput(input));
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkInput(input);
});

function checkInput(input) {
  if (input.value) {
    new Item(input.value)
    input.value = '';
  }
  else return;
}
