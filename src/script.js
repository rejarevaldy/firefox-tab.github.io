function search() {
  console.log('asd');
  const search = document.getElementById('search');
  window.location.replace = "https://duckduckgo.com/?q=" + search.value;
}