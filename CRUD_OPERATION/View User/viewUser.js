const viewId = localStorage.getItem("viewId");
console.log(viewId);

fetch(`http://localhost:3001/users/${viewId}`)
  .then((res) => res.json())
  .then((data) => {
    showToUi(data);
    console.log(data);
  })
  .catch((error) => console.log(error.message));

const showToUi = (data) => {
  var viewID = document.createElement("h2");
  viewID.innerText = `ID : ${data.id}`;
  var name = document.createElement("h3");
  name.innerText = `NAME : ${data.name}`;

  var emailId = document.createElement("h4");
  emailId.innerText = `EMAIL : ${data.email}`;

  document.getElementById("viewData").append(viewID, name, emailId);
};
