const button = document.querySelector("#generateBtn");
const orderedlist = document.querySelector("#orderedList");
const input = document.querySelector("#inputt");
const errorPara = document.querySelector("#error");
const url = "https://universities.hipolabs.com/search?country=";

// Fetch university data
async function getUniversities() {
  const country = input.value.trim();
  if (!country) {
    errorPara.innerText = "⚠️ Please enter a country name.";
    orderedlist.innerHTML = "";
    return;
  }

  try {
    const response = await axios.get(url + country);
    const data = response.data;

    if (data.length === 0) {
      errorPara.innerText = `❌ No universities found for "${country}"`;
      orderedlist.innerHTML = "";
      return;
    }

    errorPara.innerText = "";
    renderList(data);
  } catch (e) {
    errorPara.innerText = "🚫 Failed to fetch data. Please try again.";
    orderedlist.innerHTML = "";
    console.error("API error:", e);
  }
}

// Render university list
function renderList(universities) {
  orderedlist.innerHTML = "";

  universities.forEach((univ) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${univ.name}</strong> <br> 🌍 ${univ.country} | 🔗 <a href="${univ.web_pages[0]}" target="_blank">Visit Website</a>`;
    orderedlist.appendChild(li);
  });
}

// Button click
button.addEventListener("click", getUniversities);

// Press Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getUniversities();
  }
});
