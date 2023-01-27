const getData = () => {
  fetch("http://localhost:3001/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // showToUi(data.reverse());
      showToUi(data);
    })
    .catch((err) => console.log(err));
};
getData();

const showToUi = (data) => {
  data.map((elem, index) => {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.id;
    var td2 = document.createElement("td");
    td2.innerText = elem.name;
    console.log(elem.name);
    var td3 = document.createElement("td");
    td3.innerText = elem.email;
    var td4 = document.createElement("td");
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      removeItem(elem.id);
    });
    var viewButton = document.createElement("button");
    viewButton.innerText = "View";
    viewButton.addEventListener("click", () => {
      sendIdToViewPage(elem.id);
    });
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      editData(elem.id);
    });

    td4.append(deleteButton, editButton, viewButton);

    tr.append(td1, td2, td3, td4);
    document.getElementById("tbody").append(tr);
  });
};
const removeItem = async (id) => {
  console.log(id);
  await fetch(`http://localhost:3001/users/${id}`, { method: "DELETE" }).then(
    (res) => res.json()
  );
};

const editData = (id) => {
  localStorage.setItem("Id", id);
  window.location.href = "./Edit User/editUser.html";
};

const sendIdToViewPage = (id) => {
  localStorage.setItem("viewId", id);
  window.location.href = "./View User/viewUser.html";
};
