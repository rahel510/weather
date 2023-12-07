const container = document.getElementById("container");
document.querySelector("#request-btn").addEventListener("click", getData);

const test = 5;
async function getData() {
  try {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=Romanshorn&appid=f56f940d59573a50c91e8967c8559adf&lang=de&units=metric";
    const response = await fetch(url);
    const data = await response.json();
    console.log("my data:", data.name);
    let newElement = document.createElement("p");
    container.textContent = "";
    newElement.textContent = data.name;
    container.appendChild(newElement);
  } catch (err) {
    console.log(err);
  }
}

getData();
