const DATA =
  JSON.parse(localStorage.getItem("ARTICLE_DATA")) ||
  window.ARTICLE_DATA;

// ===== SLIDER =====
function renderSlider(){
  const box = document.getElementById("slider");

  const slides = DATA
    .filter(a => a.isFeatured)
    .slice(0,5);

  box.innerHTML = slides.map((item,i)=>`
    <div class="slide ${i===0?'active':''}">
      <div class="slide-img" style="background-image:url('${item.thumbnail}')"></div>
      <div class="slide-content">
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
      </div>
    </div>
  `).join("");

  let index = 0;
  setInterval(()=>{
    const s = document.querySelectorAll(".slide");
    s[index].classList.remove("active");
    index = (index+1)%s.length;
    s[index].classList.add("active");
  },4000);
}

// ===== TIN =====
function renderNews(){
  const box = document.getElementById("newsList");

  const news = DATA
    .filter(a => a.type==="news")
    .sort((a,b)=> new Date(b.date)-new Date(a.date));

  box.innerHTML = news.map(item=>`
    <div class="news-item">
      <img src="${item.thumbnail}">
      <div>
        <h4>${item.title}</h4>
        <p>${item.excerpt}</p>
      </div>
    </div>
  `).join("");
}

// ===== CẢM NGHĨ =====
function renderFeeling(){
  const box = document.getElementById("feelingList");

  const list = DATA
    .filter(a => a.type==="feeling")
    .slice(0,5);

  box.innerHTML = list.map(item=>`
    <div class="card">
      <h4>${item.title}</h4>
      <p>${item.excerpt}</p>
    </div>
  `).join("");
}

// INIT
renderSlider();
renderNews();
renderFeeling();
