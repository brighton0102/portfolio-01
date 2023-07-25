/* eslint-disable func-names */
/* eslint-disable quotes */

/* eslint-disable linebreak-style */
const modal = document.getElementById('productModal');

window.addEventListener("load", () => { // when the page has loaded
  const buttons = document.querySelectorAll(".show-modal");
  buttons.forEach((btn, index) => { // index will be current button index
    btn.addEventListener("click", async () => {
      const response = await fetch("./utils/portfolio.json");
      const jsonData = await response.json();
      const item = jsonData.data.portfolio[index];

      const modalTemplate = `
    <div class="modal-content" id="modal-content">
            <span class="close">&times;</span>
            <h2 class="title-work-section">${item.name}</h2>
            <div class="tech-field">
                <p id="bold-st">${item.subheading[0]}</p>
                <div class="dot"></div>
                <p>${item.subheading[1]}</p>
                <div class="dot"></div>
                <p>${item.subheading[2]}</p>
            </div>
            <img
              class="card-works-image my"
              src=${item.featured_image}
              alt=${item.name + index}
            />
            <div class="grid-container">
              <div class="grid-item copy">
               <p class"upper"> 
                ${item.details_upper}
               </p>
               <p class="pt-top">
                ${item.details_lower}
               </p>
    
              </div>
              <div class="grid-item">
                <ul class="languages-used border-b">
                ${item.technology.map((res) => (`<li class="language">${res}</li>`))}
                </ul>
                <div class="modal-btn-container">
                  <button class="modal-btn">See live <img height="20px" class="pl-left" src="img/live.png" alt="live"></button>
                  <button class="modal-btn">See source <img height="20px" class="pl-left" src="img/source.png" alt="source"></button>
                </div>
              </div>
            </div>
          </div>
    `;

      const element = document.querySelector('.modal');
      element.innerHTML += modalTemplate;
      modal.style.display = "block";

      const span = document.getElementsByClassName("close")[0];
      span.addEventListener("click", () => {
        modal.style.display = "none";
        const element = document.getElementById('modal-content');
        element.remove();
      });
    });
  });
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};