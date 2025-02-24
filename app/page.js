"use client";
import Counter from "@/components/Counter";
import OfferCard from "@/components/OfferCard";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import WellFoodLayout from "@/layout/WellFoodLayout";
import Link from "next/link";
const page = () => {
  return (
    <WellFoodLayout>
      {/* Hero Area Start */}
      <section
        className="hero-area bgs-cover pt-180 rpt-150 pb-100 rel z-1"
        style={{ backgroundImage: "url(assets/images/background/hero.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content text-white"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-35">
                  <i className="far fa-hamburger" /> Start price Only $25
                </span>
                <h2>Traditional British & Cuisine with a Modern Twist</h2>
                <p>
                At our restaurant, we're passionate about serving up delicious, authentic British dishes with a contemporary flair. From hearty pub classics to elegant fine dining options, our menu is designed to showcase the best of British cuisine.
                </p>
                <Link href="menu-restaurant" className="theme-btn">
                  View All Menu <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="hero-images rmt-60">
                <img src="assets/images/hero/home.png" alt="Hero" fetchPriority="high" loading="lazy" />
                <div className="price">
                  <img src="assets/images/hero/price.png" alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape1.png" alt="Hero Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/hero-shape2.png" alt="Hero Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/hero-shape3.png" alt="Hero Shape" />
          </div>
          <div className="shape four">
            <img src="assets/images/shapes/hero-shape4.png" alt="Hero Shape" />
          </div>
          <div className="shape five">
            <img src="assets/images/shapes/hero-shape5.png" alt="Hero Shape" />
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-90 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Fish and Chips</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Stuffed portobello mushrooms vegetable curry</span>

            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Roast Beef Sunday Lunch</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Full English Breakfast</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">Vegetarian Options</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* About Us Area start */}
      <section className="about-us-area pt-130 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div
                className="about-image-part mb-30 rmb-55"
                data-aos="fade-right"
                data-aos-duration={1500}
              >
                <div className="food-review">
                  <div className="author">
                    <img
                      src="assets/images/about/review-author.png"
                      alt="Author"
                    />
                  </div>
                  <span className="text">Very good food</span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <img src="assets/images/about/about.jpg" alt="About" />
                <div
                  className="quality-food"
                  style={{
                    backgroundImage: "url(assets/images/shapes/about-star.png)",
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
            <div className="col-lg-6">
              <div
                className="about-us-content"
                data-aos="fade-left"
                data-aos-duration={1500}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Taste the Tasty Food.</span>
                  <h2>Book a Table</h2>
                </div>
                <p>
                To make a reservation, please call us on  0141 611 3142 or book online through our website.
                </p>
                <div className="about-btn-author pt-5 mb-45">
                  <Link href="contact" className="theme-btn style-two">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  <Link href="menu-restaurant" className="read-more">
                    Explore popular menu{" "}
                    <i className="far fa-arrow-alt-right" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-high-quality" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Best Quality Food</Link>
                      </h5>
                      <p>
                        Our talented chefs craft each dish precision sourcing
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-two">
                      <div className="icon">
                        <i className="flaticon-chef" />
                      </div>
                      <h5>
                        <Link href="menu-burger">Experience our Chefs</Link>
                      </h5>
                      <p>
                        Our talented chefs craft each dish precision sourcing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/pizza-three.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Offer Card Area start */}
      <OfferCard />
      {/* Offer Card Area end */}
      {/* Offer Area start */}
      <section
        className="offer-area bgc-black pt-160 rpt-100 pb-150 rpb-120 rel z-1"
        style={{
          backgroundImage: "url(assets/images/background/offer-dot-bg.png)",
        }}
      >
        <span className="marquee-wrap style-two text-white">
          <span className="marquee-inner left">special deal</span>
          <span className="marquee-inner left">special deal</span>
          <span className="marquee-inner left">special deal</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="offer-content text-white rmb-55"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/offer/delicious.png" alt="Image" />
                <h2>Special deal offer for this week</h2>
                <h3>
                Roast Beef Sunday Lunch <span></span>
                </h3>
                <p>
                Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy
                </p>
                <Link href="shop" className="theme-btn">
                  order now <i className="far fa-arrow-alt-right" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="offer-image"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/offer/offer-img.png"
                  alt="Offer Image"
                />
                <div
                  className="offer-badge"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/offer-circle-shape.png)",
                  }}
                >
                  <span>
                    only <br />
                    <span className="price">$49</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offer-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/offer-shape1.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/offer-shape2.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/offer-shape3.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Offer Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-120 rpt-90 rel z-1">
        <span className="marquee-wrap">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">delicious foods</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}

      {/* Popular Menu Area start */}
      <section className="popular-menu-area pt-105 rpt-85 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular menu</span>
                <h2>
                   explore our popular
                  food
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* 1st */}
            <div
              className="col-xl-4 col-lg-6 z-3"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
             <div className="food-item">
  <div className="content">
    <div className="name-desc">
      <h5>Fish and Chips</h5>
      <p>Fresh cod in a crispy batter, served with chunky chips and mushy peas.</p>
    </div>
    <div className="price">
      <span>$12</span>
    </div>
  </div>
  <div className="image">
    <img src="assets/images/food/fish.png" alt="Food Image" />
  </div>
</div>
<div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Trifle</h5>
        <p>Layers of sponge cake, fruit, custard, and whipped cream.</p>
      </div>
      <div className="price">
        <span>$10</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/rm-food4.png" alt="Trifle" /> {/*Change to correct image path*/}
    </div>
  </div>
<div className="food-item">
  <div className="content">
    <div className="name-desc">
      <h5>Roast Beef Sunday Lunch</h5>
      <p>Slow-cooked roast beef with roasted vegetables.</p>
    </div>
    <div className="price">
      <span>$15</span>
    </div>
  </div>
  <div className="image">
    <img src="assets/images/food/grill-menu.jpg" alt="Food Image" />
  </div>
</div>

<div className="food-item">
  <div className="content">
    <div className="name-desc">
      <h5>Full English Breakfast</h5>
      <p>Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.</p>
    </div>
    <div className="price">
      <span>$10</span>
    </div>
  </div>
  <div className="image">
    <img src="assets/images/food/gm-food7.png" alt="Food Image" />
  </div>
</div>

<div className="food-item">
  <div className="content">
    <div className="name-desc">
      <h5>Vegetarian Options</h5>
      <p>Stuffed portobello mushrooms, vegetable curry.</p>
    </div>
    <div className="price">
      <span>$11</span>
    </div>
  </div>
  <div className="image">
    <img src="assets/images/food/burger-menu4.jpg" alt="Food Image" />
  </div>
</div>
<div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5> Newcastle Brown Ale</h5>
        <p>A rich, malty ale from the north-east</p>
      </div>
      <div className="price">
        <span>$12</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/filter-food6.jpg"/> {/*Change to correct image path*/}
    </div>
  </div>
        
            </div>
{/* 2nd */}
<div
  className="col-xl-4 col-lg-6 z-1"
  data-aos="fade-up"
  data-aos-delay={100}
  data-aos-duration={1500}
  data-aos-offset={50}
>
  {/* Dinner Items */}
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Roast Beef</h5>
        <p>Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.</p>
      </div>
      <div className="price">
        <span>$30</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/chicken-menu1.png" alt="Roast Beef" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Eggs Benedict</h5>
        <p>Poached eggs on toasted English muffins with smoked salmon and hollandaise sauce.</p>
      </div>
      <div className="price">
        <span>$12</span>
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/chicken-menu1.png" alt="Lamb Shank" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Lamb Shank</h5>
        <p>Braised lamb shank with rosemary and garlic, served with roasted potatoes and carrots.</p>
      </div>
      <div className="price">
        <span>$35</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/burger-menu8.jpg" alt="Lamb Shank" /> {/*Change to correct image path*/}
    </div>
  </div>

  {/* Dessert Items */}
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Sticky Toffee Pudding</h5>
        <p>Warm sponge cake with sticky toffee sauce and vanilla ice cream.</p>
      </div>
      <div className="price">
        <span>$12</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/burger-menu8.jpg" alt="Sticky Toffee Pudding" /> {/*Change to correct image path*/}
    </div>
  </div>
 
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5> Newcastle Brown Ale</h5>
        <p>A rich, malty ale from the north-east</p>
      </div>
      <div className="price">
        <span>$12</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/filter-food2.jpg" /> {/*Change to correct image path*/}
    </div>
  </div>

</div>
         
            {/* 3  */}
          <div
  className="col-xl-4 col-lg-6 z-2"
  data-aos="fade-up"
  data-aos-delay={50}
  data-aos-duration={1500}
  data-aos-offset={50}
>

 <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Pan-Seared Salmon</h5>
        <p>Fresh salmon fillet, pan-seared and served with lemon butter and herbs.</p>
      </div>
      <div className="price">
        <span>$28</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/grill-menu1.jpg" alt="Pan-Seared Salmon" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Avocado Toast</h5>
        <p>Toasted sourdough with mashed avocado, cherry tomatoes.</p>
      </div>
      <div className="price">
        <span>$10</span>
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/gm-food3.png" alt="Eccles Cakes" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Eccles Cakes</h5>
        <p>They're like little pies with sweet, dried fruit inside and a sugary top</p>
      </div>
      <div className="price">
        <span>$8</span> {/* You can adjust the price */}
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/fm-five2.jpg" alt="Eccles Cakes" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>Ploughman's Lunch</h5>
        <p>A selection of artisanal cheeses, bread, pickles, and chutneys.</p>
      </div>
      <div className="price">
        <span>$14</span>
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/grill-menu6.jpg" alt="Eccles Cakes" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item">
    <div className="content">
      <div className="name-desc">
        <h5>London Pride</h5>
        <p>A classic English bitter.</p>
      </div>
      <div className="price">
        <span>$14</span>
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/filter-food4.jpg" /> {/*Change to correct image path*/}
    </div>
  </div>
  <div className="food-item mb-30">
    <div className="content">
      <div className="name-desc">
        <h5>Chicken and Mushroom Pie</h5>
        <p>A hearty pie filled with chicken, mushrooms, and creamy sauce.</p>
      </div>
      <div className="price">
        <span>$16</span>
      </div>
    </div>
    <div className="image">
      <img src="assets/images/food/grill-menu6.jpg" alt="Eccles Cakes" /> {/*Change to correct image path*/}
    </div>
  </div>

 
</div>




          </div>
        </div>
      </section>
      

      {/* Our Service  */}
      {/* <section className="food-category-area pb-90 rpb-65 rel z-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6 col-xl-7 col-lg-9">
            <div
              className="section-title text-center mb-50"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="sub-title mb-5">Our Values</span>
              <h2>
                we provide amazing &amp; Quality food for your good health
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-recommended-food" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Quality</Link>
                </h4>
                <p>We're committed to serving only the best.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-fast-delivery" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Community</Link>
                </h4>
                <p>We believe in supporting local businesses and events</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="featured-item">
              <div className="icon">
                <i className="flaticon-cashback" />
              </div>
              <div className="content">
                <h4>
                  <Link href="menu-restaurant">Hospitality</Link>
                </h4>
                <p>We believe in supporting local businesses and events</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section> */}

<section className="food-category-area pb-90 rpb-65 rel z-1">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xxl-6 col-xl-7 col-lg-9">
        <div
          className="section-title text-center mb-50"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <span className="sub-title mb-5">Our Services</span>
          <h2>We Provide Exceptional Services for Your Convenience</h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      {[
        { title: "Online Ordering", desc: "Order your favorite dishes from home for delivery or pickup.", icon: "flaticon-recommended-food" },
        { title: "Reservations", desc: "Book a table in advance for a smooth dining experience.", icon: "flaticon-fast-delivery" },
        { title: "Takeout", desc: "Enjoy our delicious food from the comfort of your home.", icon: "flaticon-cashback" },
        { title: "Delivery", desc: "Get our dishes delivered right to your doorstep.", icon: "flaticon-recommended-food" },
        { title: "Catering", desc: "Let us handle the food for your next event or party.", icon: "flaticon-fast-delivery" },
        { title: "Private Dining", desc: "Book our private room for special occasions.", icon: "flaticon-cashback" },
        { title: "Events", desc: "Host your next event with us, and let us take care of the food.", icon: "flaticon-recommended-food" },
        { title: "Loyalty Program", desc: "Join our program and earn rewards and discounts.", icon: "flaticon-fast-delivery" },
        { title: "Gift Cards", desc: "Purchase gift cards for friends and family.", icon: "flaticon-cashback" },
        { title: "Party Platters", desc: "Order large quantities of our dishes for your gathering.", icon: "flaticon-recommended-food" },
        { title: "Meal Plans", desc: "Sign up for our meal plans and enjoy discounts.", icon: "flaticon-fast-delivery" },
        { title: "Dietary Options", desc: "We offer gluten-free, vegan, and other options.", icon: "flaticon-cashback" }
      ].map((service, index) => (
        <div
          key={index}
          className="col-xl-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={index * 50}
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <div className="featured-item">
            <div className="icon">
              <i className={service.icon} />
            </div>
            <div className="content">
              <h4>
                <Link href="menu-restaurant">{service.title}</Link>
              </h4>
              <p>{service.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Popular Menu Area end */}
      {/* Gallery Area Start */}
      <div className="gallery-area rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery1.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Juicy burger</h5>
                  <span className="category">Burger</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery2.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy French Fries</h5>
                  <span className="category">Fried</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div
                className="gallery-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="gallery-image">
                  <img src="assets/images/gallery/gallery3.jpg" alt="Gallery" />
                </div>
                <div className="gallery-content">
                  <h5>Spicy awesome pizza</h5>
                  <span className="category">Pizza</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Area End */}
      {/* Why choose Us Area start */}
      <section className="why-choose-area bgc-lighter pt-240 rpt-150 pb-100 rpb-70 rel z-1">
        <span className="marquee-wrap style-two">
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
          <span className="marquee-inner left">Why choose Us</span>
        </span>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="why-choose-content rmb-30"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="sub-title mb-5">Why choose us</span>
                  <h2>We Offer quality service That Customers Needs</h2>
                </div>
                <p>
                  Welcome too restaurant, where culinary excellence meets warm
                  hospitality in every dish we serve. Nestled in the heart of
                  City Name our eatery invites you on a journey
                </p>
                <div className="about-btn-author mb-60">
                  <Link href="about" className="theme-btn">
                    learn more us <i className="far fa-arrow-alt-right" />
                  </Link>
                  <div className="author">
                    <img src="assets/images/about/author.jpg" alt="Author" />
                    <h6>
                      Ben A. Conners / <span>CEO &amp; Founder</span>
                    </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 col-6">
                    <div className="counter-item counter-text-wrap">
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
                    <div className="counter-item counter-text-wrap">
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
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={53}
                      >
                        <Counter end={53} />
                      </span>
                      <span className="counter-title">Favourite Dishes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-recommended-food" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Sunday Roast</Link>
                    </h4>
                    <p>
                    Join us for a traditional Sunday roast with all the trimmings             
                           </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-fast-delivery" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Quiz Night</Link>
                    </h4>
                    <p>
                    Test your knowledge and win prizes on our weekly quiz night
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="service-item mt-30 rmt-0">
                    <div className="icon">
                      <i className="flaticon-cashback" />
                    </div>
                    <h4>
                      <Link href="menu-burger">Live Music</Link>
                    </h4>
                    <p>
                    Enjoy live music performances from local musicians.
                    </p>
                  </div>
                  <div className="service-item">
                    <div className="icon">
                      <i className="flaticon-dish" />
                    </div>
                    <h4>
                      <Link href="menu-burger">100% natural food</Link>
                    </h4>
                    <p>
                      Good Quality food is our priority, we use only the best
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
          <div className="shape three">
            <img src="assets/images/shapes/pizza.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Why choose Us Area end */}
      {/* Headline area start */}
      <div className="headline-area bgc-black pt-120 rpt-90 rel z-2">
        <span className="marquee-wrap white-text">
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
          <span className="marquee-inner left">
            <span className="marquee-item">Italian pizza</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">our Testimonials</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
            <span className="marquee-item">burger king</span>
            <span className="marquee-item">
              <i className="flaticon-star" />
            </span>
          </span>
        </span>
        <div className="headline-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/chillies.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area bgc-black pt-105 rpt-85 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div
                className="section-title text-white text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">customer feedback</span>
                <h2>what have lot’s off happy customer explore feedback</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 />
        </div>
        <div className="testimonials-shapes">
          <div className="shape one">
            <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
          </div>
          <div className="shape two">
            <img src="assets/images/shapes/tomato.png" alt="Shape" />
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* Call To Action Area start */}
      <section className="cta-area py-100 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-8">
              <div className="cta-content">
                <div className="section-title text-white mb-20">
                  <span className="sub-title mb-5">Need any food?</span>
                  <h2>Looking for best quality food or restaurant?</h2>
                </div>
                <Link href="contact" className="theme-btn style-two">
                  get a quote <i className="far fa-arrow-alt-right" />
                </Link>
                <div
                  className="cta-badge"
                  style={{
                    backgroundImage: "url(assets/images/shapes/cta-shape.png)",
                  }}
                >
                  <span>
                    quality
                    <br /> food
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="cta-bg"
          style={{ backgroundImage: "url(assets/images/background/cta.jpg)" }}
        />
      </section>
      {/* Call To Action Area end */}
      {/* Dishes Area start */}
      <section className="dishes-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title mb-5">popular dishes</span>
                <h2>explore popular menus</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish1.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">fresh chicken burger</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish2.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">pizza with mushrooms</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish3.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">
                      double burger &amp; fries
                    </Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="product-item-two">
                <div className="image">
                  <img src="assets/images/dishes/dish4.png" alt="Dish" />
                </div>
                <div className="content">
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <span>(5k)</span>
                  </div>
                  <h5>
                    <Link href="product-details">fried chicken french</Link>
                  </h5>
                  <span className="price">
                    <del>$50</del> $25
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dishes Area end */}
      {/* Blog Area start */}
 
      {/* Blog Area end */}
    </WellFoodLayout>
  );
};
export default page;
