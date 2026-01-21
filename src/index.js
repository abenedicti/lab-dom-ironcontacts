// HTML ELEMENTS
// SELECT THE BUTTON "ADD RANDOM CONTACT"
const buttonAddRandom = document.querySelector("#btn-add-random");
// TARGET THE TBODY
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// -------------ADD ITERATION 2 & 3  TO THE FIRST RANDOM CONTACT

let deletedBtn = exampleRow.querySelector(".btn-delete");
deletedBtn.addEventListener("click", () => {
  exampleRow.remove();
});

let likeBtn = tableBody.querySelector(".btn-like");
likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("selected");
});

// ----------------------------------------------------------
// ITERATION 1 - Display 3 contacts

//1st step : get the first 3 contact
const threeContacts = contacts.splice(0, 3);

// 2nd step: target element to modify in the DOM
let tableRows = document.querySelector("#contacts");

// 3rd step : add the elements for each selected contact
threeContacts.forEach((contact) => {
  const newTrNode = document.createElement("tr");
  newTrNode.innerHTML = `
<td>
<img src="${contact.pictureUrl}" />
</td>
 <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  // 4th step : add those elements to the DOM
  tableRows.appendChild(newTrNode);

  // ITERATION 2 - Delete Buttons
  let deletedBtn = newTrNode.querySelector(".btn-delete");
  deletedBtn.addEventListener("click", () => {
    newTrNode.remove();
  });

  // ITERATION 3 - Like Buttons
  let likeBtn = newTrNode.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
buttonAddRandom.addEventListener("click", () => {
  // 1. Same method as before to get a random contact. We are just adding it to the click button "Add Random Contact"
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const splicedArr = contacts.splice(randomIndex, 1);
  const randomContact = splicedArr[0];

  // 2. Same as before just changing the variable name
  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  tableBody.appendChild(randomRow);

  const deleteBtn = randomRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    randomRow.remove();
  });

  const likeBtn = randomRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
});
