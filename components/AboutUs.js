import Link from "next/link";
import Counter from "./Counter";

const AboutRight = () => {
  return (
    <div className="col-lg-6">
      <div
        className="about-us-content"
        data-aos="fade-right"
        data-aos-delay={150}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="section-title mb-25">
          <span className="sub-title mb-5">learn About wellfood</span>
          <h2>the amazing &amp; Quality food for your good health</h2>
        </div>
        <p>
          Welcome too restaurant, where culinary excellence meets warm
          hospitality in every dish we serve. Nestled in the heart of City Name
          our eatery invites you on a journey
        </p>
        <div className="about-btn-author pt-5 mb-60">
          <Link href="about" className="theme-btn style-two">
            learn more us <i className="far fa-arrow-alt-right" />
          </Link>
          <Link href="about" className="read-more">
            Explore popular menu <i className="far fa-arrow-alt-right" />
          </Link>
        </div>
        <div className="row">
          <div className="col-sm-4 col-6">
            <div className="counter-item style-two counter-text-wrap">
              <span
                className="count-text k-plus"
                data-speed={3000}
                data-stop={34}
              >
                <Counter end={34} />
              </span>
              <span className="counter-title">Review</span>
            </div>
          </div>
          <div className="col-sm-4 col-6">
            <div className="counter-item style-two counter-text-wrap">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={20}
              >
                <Counter end={20} />
              </span>
              <span className="counter-title">Passionate Chef’s</span>
            </div>
          </div>
          <div className="col-sm-4 col-6">
            <div className="counter-item style-two counter-text-wrap">
              <span
                className="count-text plus"
                data-speed={3000}
                data-stop={34}
              >
                <Counter end={34} />
              </span>
              <span className="counter-title">Favourite Dishes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = ({
  productImage = "/assets/images/about/pizza.png",
  title = "Italian pizza",
  product = "Pizza",
}) => {
  return (
    <section className="about-us-area pt-130 rpt-100 pb-150 rpb-60 rel z-1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div
              className="about-image-part style-two mb-30 rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img src={productImage} alt={`About ${product}`} />
              <div
                className="quality-food"
                style={{
                  backgroundImage:
                    "url(assets/images/shapes/about-star-yellow.png)",
                }}
              >
                <span className="for-border" />
                <span className="text">
                  quality <br />
                  food
                </span>
              </div>
            </div>
          </div>
          <AboutRight />
        </div>
      </div>
      <span className="about-bg-text">{title}</span>
    </section>
  );
};
export default AboutUs;

export const AboutUs2 = ({
  aboutImg1 = "/assets/images/about/about-four3.jpg",
  aboutImg2 = "/assets/images/about/about-four4.jpg",
}) => {
  return (
    <section className="about-us-area pt-130 rpt-100 pb-150 rpb-60 rel z-1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div
              className="about-image-four style-two mb-30"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row">
                <div className="col">
                  <img src={aboutImg1} alt="About" />
                </div>
                <div className="col mt-80">
                  <img src={aboutImg2} alt="About" />
                </div>
              </div>
              <div className="badge">
                <img
                  src="assets/images/about/about-four-badge.jpg"
                  alt="Badge"
                />
              </div>
            </div>
          </div>
          <AboutRight />
        </div>
      </div>
    </section>
  );
};
export const AboutUs3 = ({
  aboutImg1 = "/assets/images/about/about-four3.jpg",
  aboutImg2 = "/assets/images/about/about-four4.jpg",
}) => {
  return (
    <section className="about-us-area-four pt-130 rpt-100 pb-85 rpb-55 rel z-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="about-us-content ms-0 rmb-25"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-25">
                <h2>Our story</h2>
              </div>
              <p>
              Welcome to our restaurant, where food, passion, and community come together.
               Our story began with a simple idea: to share delicious, homemade-style
               cuisine with our neighbors and friends.
              </p>
              <h3>Our Vision</h3>
              <p>
              We aim to create a warm and inviting space where everyone feels at home. 
              Our chefs are dedicated to crafting dishes that not only
               taste amazing but also use only the freshest ingredients, sourced locally whenever possible.
              </p>
              <h3>Our History</h3>
              <p>
              From our humble beginnings to our current location, learn about our journey and how we've grown.
              </p>
            <h3> Awards and Recognition</h3> 

            <p>We are proud to have received Most delicious food of the year for our efforts in providing excellent food and service.</p>
              
             
              <Link href="contact" className="theme-btn mt-25 mb-60">
               Get in Touch <i className="far fa-arrow-alt-right" />
              </Link>
              <div className="row">
                <div className="col-sm-4 col-6">
                  <div className="counter-item style-two counter-text-wrap">
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={34}
                    >
                      <Counter end={34} />
                    </span>
                    <span className="counter-title">Reviews</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="counter-item style-two counter-text-wrap">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={20}
                    >
                      <Counter end={20} />
                    </span>
                    <span className="counter-title">Passionate Chef’s</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="counter-item style-two counter-text-wrap">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={34}
                    >
                      <Counter end={34} />
                    </span>
                    <span className="counter-title">Favourite Dishes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-image-four style-two mb-30"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row">
                <div className="col">
                  <img src="assets/images/about/about-four1.jpg" alt="About" />
                </div>
                <div className="col mt-80">
                  <img src="assets/images/about/about-four2.jpg" alt="About" />
                </div>
              </div>
              <div className="badge">
                <img
                  src="assets/images/about/about-four-badge.jpg"
                  alt="Badge"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
};

export const AboutUs4 = ({}) => {
  return (
    <section className="about-us-area pt-130 rpt-100 pb-90 rpb-60 rel z-1">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6">
            <div
              className="about-restaurant-page rel mb-30 rmb-55"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <img
                src="assets/images/about/menu-restaurant.jpg"
                alt="Menu Restaurant"
              />
              <div className="experience-year">
                <span className="years">25</span>
                Years of experience in restaurant services
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="about-us-content"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title mb-25">
                <span className="sub-title mb-5">learn About wellfood</span>
                <h2>the amazing &amp; Quality food for your good health</h2>
              </div>
              <p>
                Welcome too restaurant, where culinary excellence meets warm
                hospitality in every dish we serve. Nestled in the heart of City
                Name our eatery invites you on a journey
              </p>
              <div className="about-btn-author pt-5 mb-60">
                <Link href="about" className="theme-btn style-two">
                  learn more us <i className="far fa-arrow-alt-right" />
                </Link>
                <Link href="about" className="read-more">
                  Explore popular menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
              <div className="row">
                <div className="col-sm-4 col-6">
                  <div className="counter-item style-two counter-text-wrap">
                    <span
                      className="count-text k-plus"
                      data-speed={3000}
                      data-stop={34}
                    >
                      <Counter end={34} />
                    </span>
                    <span className="counter-title">Reviews</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="counter-item style-two counter-text-wrap">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={20}
                    >
                      <Counter end={20} />
                    </span>
                    <span className="counter-title">Passionate Chef’s</span>
                  </div>
                </div>
                <div className="col-sm-4 col-6">
                  <div className="counter-item style-two counter-text-wrap">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={34}
                    >
                      <Counter end={34} />
                    </span>
                    <span className="counter-title">Favourite Dishes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
