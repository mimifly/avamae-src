import React, { useEffect, useState } from "react";
import Carousel from "./components/Carousel";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Carousel />

      <div className="helper-container home-learn-more-container">
        <div className="image-container">
          <img
            src="./resources/shutterstock_696636415.jpg"
            alt="office space"
          />
        </div>
        <div class="home-learn-more-text">
          <h1 className="heading-body heading-body-about">
            Justo petentium te vix, scripta regione urbanitas
          </h1>
          <p>
            Pumpkins originated in Central America. Pumpkins are actually a
            fruit. Pumpkin is also a squash; a member of Curcurbita family. The
            yellow-orange flowers that bloom on the pumpkin vine are edible.
            Pumpkin seeds taste great roasted and contain medicinal properties.
            Pumpkins were once considered a remedy for freckles and snakebites.
          </p>
          <ul>
            <li>
              <p>Cats can jump up to six times their length.</p>
            </li>
            <li>
              <p>
                Cats are nearsighted, but their peripheral vision and night
                vision are much better than that of humans.
              </p>
            </li>
            <li>
              <p>Cats have 230 bones, while humans only have 206.</p>
            </li>
            <li>
              <p>
                Cats have the largest eyes relative to their head size of any
                mammal.
              </p>
            </li>
          </ul>
          <Link to="/about-us" className="buttonLink">
            Learn more{" "}
          </Link>
        </div>
      </div>
      <div className="image-container-wide">
        <img src="./resources/shutterstock_1302552622.jpg" />
        <div class="slide-content-wrapper">
          <div className="image-wide-content">
            <h1 className="heading-body">
              Nulla sem urna, dictum sed nisi in, viverra rutrum neque
            </h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <a className="buttonLink buttonLogIn">Log in</a>
          </div>
        </div>
      </div>

      <div className="helper-container">
        <h1 className="heading-body heading-body-contacts">
          Sed libero justo, lobortis sit amet suscipit non
        </h1>
        <h2>taria duo ut vis semper abhorreant</h2>
        <div class="column-wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            in ipsum posuere, malesuada nulla eget, consectetur metus. Aliquam
            vulputate sem sed velit ultrices, ac ullamcorper augue viverra.
            Suspendisse aliquet convallis augue, sagittis aliquet justo
            fermentum at. Ut ultrices tortor nec malesuada laoreet. Suspendisse
            ultricies lectus turpis, et lacinia nulla imperdiet sit amet.
            Praesent tincidunt arcu ligula, at ultrices ante sagittis in.
            Aliquam efficitur mollis neque ut lacinia. Morbi felis elit,
            vulputate condimentum nisi nec, lobortis varius nunc.
          </p>
          <p>
            Nam finibus dictum leo at vehicula. Aliquam et congue diam, eu
            euismod turpis. Nunc orci turpis, malesuada ac ullamcorper non,
            hendrerit rhoncus libero. Etiam eget diam dapibus, lacinia nulla id,
            semper justo. Sed feugiat tellus eu dui condimentum aliquam. Etiam
            id elementum tortor. Suspendisse at erat ut augue commodo rutrum.
            Pellentesque felis tortor, scelerisque sed elementum vitae, aliquam
            blandit est. Maecenas in nisi ut nibh vulputate efficitur et ut
            odio. Maecenas vitae faucibus erat. Pellentesque consectetur massa
            risus, ac venenatis elit.
          </p>
          <p>
            Nam finibus dictum leo at vehicula. Aliquam et congue diam, eu
            euismod turpis. Nunc orci turpis, malesuada ac ullamcorper non,
            hendrerit rhoncus libero. Etiam eget diam dapibus, lacinia nulla id,
            semper justo. Sed feugiat tellus eu dui condimentum aliquam. Etiam
            id elementum tortor. Suspendisse at erat ut augue commodo rutrum.
            Pellentesque felis tortor, scelerisque sed elementum vitae, aliquam
            blandit est. Maecenas in nisi ut nibh vulputate efficitur et ut
            odio. Maecenas vitae faucibus erat. Pellentesque consectetur massa
            risus, ac venenatis elit. Nam finibus dictum leo at vehicula.
            Aliquam et congue diam, eu euismod turpis. Nunc orci turpis,
            malesuada ac ullamcorper non, hendrerit rhoncus libero. Etiam eget
            diam dapibus, lacinia nulla id, semper justo.
          </p>
        </div>
        <Link to="/contact-us" className="buttonLink home-body-contact-us">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Home;
