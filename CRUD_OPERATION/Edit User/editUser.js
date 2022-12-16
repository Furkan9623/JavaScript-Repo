const id = localStorage.getItem("Id");
console.log(id);

const getData = (id) => {
  console.log(id);
  fetch(`http://localhost:3001/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").value = data.name;
      document.getElementById("email").value = data.email;
    });
};
getData(id);

const editUser = async () => {
  event.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  await fetch(`http://localhost:3001/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  window.location.href = "../index.html";
};
