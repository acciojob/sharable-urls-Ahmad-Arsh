// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const url = document.getElementById("url");

button.addEventListener("click", function() {
  const name = encodeURIComponent(nameInput.value);
  const year = encodeURIComponent(yearInput.value);
  const queryString = `?name=${name}&year=${year}`;
  url.textContent = `https://localhost:8080/${queryString}`;
});
