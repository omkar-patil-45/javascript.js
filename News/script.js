const apiKey = "0abee486c5784a8783f4d74c1eeef279";

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
  try {
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apikey=${apiKey}`;
    const response = await fetch(apiURL)
    const data = await response.json();
    return data.articles;

  } catch (error) {
    console.log(error, "Error fetching Random News ");
    return [];
  }
}
function displayBlogs(articles) {
  blogContainer.innerHTML = "";
  articles.forEach((article) => {
    const blogCard = document.createElement("div");
    blogCard.classList.add("blog-card");
    const img = document.createElement("img")
    img.src = article.urlToImage
    img.alt = article.title
    const title = document.createElement("h2")
    title.textContent = article.title
    const discription = document.createElement("p")
    discription.textContent = article.discription;

    blogCard.appendChild(img)
    blogCard.appendChild(title)
    blogCard.appendChild(discription)
    blogContainer.appendChild(blogCard);

  })
}

(async () => {
  try {
    const articles = await fetchRandomNews();
    displayBlogs(articles);
  } catch (error) {
    console.log(error);
  }
})();