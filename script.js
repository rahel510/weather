const container = document.getElementById("container");
document.querySelector("#request-btn").addEventListener("click", getData);

// console.log("Hello World")

async function getData() {
  try {
    // conect
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    let p = document.createElement("p");
    p.textContent = data.results[0].name;
    container.inerHTML = "";
    container.appendChild(p);
    // error handling
  } catch (err) {
    console.log(err);
  }
}

getData();
