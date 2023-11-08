function search(event) {
  const search = document.getElementById("search");
  const timeElement = document.getElementById("time");
  const searchValue = search.value;
  const isNotEmpty = searchValue !== "";

  search.style.caretColor = isNotEmpty ? "auto" : "transparent";
  timeElement.style.transition = "opacity 1s ease";
  search.style.transition = "opacity 3s ease";
  search.style.opacity = isNotEmpty ? 1 : 0;
  timeElement.style.opacity = isNotEmpty ? 0 : 1;

  if (event.key === "Enter" && isNotEmpty) {
    window.location.href = "https://duckduckgo.com/?q=" + searchValue;
    return;
  }
}

function startTime() {
  const timeElement = document.getElementById("time");
  function updateTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    timeElement.textContent = h + ":" + m + ":" + s;
  }
  updateTime();
  setInterval(updateTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

document.addEventListener("DOMContentLoaded", function () {
  startTime();
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("keyup", search);
});
