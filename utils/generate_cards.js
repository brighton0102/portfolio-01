async function api() {

    const response = await fetch('./utils/portfolio.json');

    const jsonData = await response.json();

    jsonData.data.portfolio.forEach((el, index) => {

      const cardTemplate = `

          <section class="cards">

              <div class=${(index + 1) % 2 === 0 ? 'card-img-left' : 'card-img-right'}>

                  <img

                  class="card-works-image"

                  src=${el.featured_image}

                  alt=${el.name + index}

                  />

              </div>

              <div class=${(index + 1) % 2 === 0 ? '"card-work-info info-right" ' : '"info-left card-work-info"'}>

                  <h2 class="title-work-section">${el.name}</h2>

                  <div class="tech-field">

                      <p id="bold-st">${el.subheading[0]}</p>

                      <div class="dot"></div>

                      <p>${el.subheading[1]}</p>

                      <div class="dot"></div>

                      <p>${el.subheading[2]}</p>

                  </div>

                  <p class="description">

                      ${el.description}

                  </p>

                  <div class="languages-used">

                      ${el.technology.map((res) => `<span class="language">${res}</span>`)};

                  </div>

                  <div>

                      <button class="card-work-info show-modal">See project</button>

                  </div>

              </div>

          </section>

      `;

      const element = document.querySelector('.card-works');

      element.innerHTML += cardTemplate;

    });

  }

  api();