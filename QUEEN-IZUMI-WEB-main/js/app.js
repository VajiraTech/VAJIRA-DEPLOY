const shareButtons = document.querySelectorAll(".tile-share-button");
const share = document.getElementById("share");

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  console.log(link);
  try {
    await navigator.clipboard.writeText(link);
    alert("Copied the text: " + link);
  } catch (err) {
    console.log(err);
  }
}

shareButtons.forEach((shareButtons) =>
  shareButtons.addEventListener("click", copyText)
);

function cari() {
  const { value } = document.getElementById("searchInput");
  console.log("searching");

  const baseUrl = "https://www.google.com/search?q=";
  location.replace(baseUrl + value);
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    cari();
  }
});

