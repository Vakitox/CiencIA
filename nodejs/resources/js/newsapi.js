// Importa el módulo de la API de NewsApi
const NewsApi = require("newsapi");

// Crea una instancia de la API de NewsApi
const api = new NewsApi({
  apiKey: "1d3a0eefa97b499d8fbc4ee93eeb40b7",
});

// Crea una consulta a la API
const query = {
  q: "IA",
  language: "es",
  sortBy: "publishedAt",
};

// Envía la consulta
const response = await api.getEverything(query);

// Obtén los artículos de la respuesta
const articles = response.articles;

// Itera sobre los artículos
for (const article of articles) {
  // Crea un elemento HTML para el artículo
  const articleElement = document.createElement("div");
  articleElement.classList.add("carousel-item");

  // Agrega la imagen del artículo al elemento
  articleElement.appendChild(document.createElement("img"));
  articleElement.querySelector("img").src = article.urlToImage;

  // Agrega el título del artículo al elemento
  articleElement.appendChild(document.createElement("h5"));
  articleElement.querySelector("h5").textContent = article.title;

  // Agrega el enlace al artículo al elemento
  articleElement.appendChild(document.createElement("a"));
  articleElement.querySelector("a").href = article.url;
  articleElement.querySelector("a").textContent = "Leer más";

  // Agrega el elemento al carousel
  carouselInner.appendChild(articleElement);
}