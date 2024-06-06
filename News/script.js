const apiKey = "0abee486c5784a8783f4d74c1eeef279";

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
  try {
    const apiURL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&apikey=${apiKey}`
    const response = await fetch(apiURL)

  } catch (error) {
    console.log(error, "Error fetching Random News ");
    return [];
  }
}