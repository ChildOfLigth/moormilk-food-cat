export default function getHTMLFromFile(filePath, container) {
  fetch(filePath)
    .then((res) => res.text())
    .then((res) => (document.querySelector(container).innerHTML = res))
    .catch((error) => console.error("Ошибка загрузки header:", error));
}

getHTMLFromFile("components/header.html", ".header_container");
getHTMLFromFile("components/footer.html", ".footer_container");
