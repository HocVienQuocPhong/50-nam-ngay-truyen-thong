function add(){
  const newItem = {
    id: "id-"+Date.now(),
    type: document.getElementById("type").value,
    isFeatured: document.getElementById("isFeatured").checked,
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    date: new Date().toISOString(),
    thumbnail: "assets/images/articles/bai-001.jpg",
    excerpt: "",
    content: document.getElementById("content").value
  };

  let data = JSON.parse(localStorage.getItem("ARTICLE_DATA")) || window.ARTICLE_DATA;

  data.unshift(newItem);

  localStorage.setItem("ARTICLE_DATA", JSON.stringify(data));

  alert("Đã đăng!");
}
