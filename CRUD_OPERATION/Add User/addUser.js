const addUser = () => {
  event.preventDefault();
  const addNewData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  postData(addNewData);
};
const postData = async (addNewData) => {
  const initData = {
    method: "POST",

    body: JSON.stringify(addNewData),
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch("http://localhost:3001/users", initData)
    .then((res) => res.json())
    .then((data) => console.log(data));
  window.location.href = "../index.html";
};
