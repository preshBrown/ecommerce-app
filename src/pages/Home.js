import React from "react";
import{ Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import mainbanner1 from "../images/main-banner-1.jpg";
import catbanner1 from "../images/catbanner-01.jpg";
import catbanner2 from "../images/catbanner-02.jpg";
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";


import famous1 from "../images/famous-1.webp";
import famous2 from "../images/famous-2.webp";
import famous3 from "../images/famous-3.webp";
import famous4 from "../images/famous-4.webp";

import brand1 from "../images/brand-01.png";
import brand2 from "../images/brand-02.png"
import brand3 from "../images/brand-03.png"
import brand4 from "../images/brand-04.png"
import brand5 from "../images/brand-05.png"
import brand6 from "../images/brand-06.png"
import brand7 from "../images/brand-07.png"
import brand8 from "../images/brand-08.png"


import Container from "../components/Container";
import { services, cartigories, blogCard, productMap1, productMap2 } from "../utils/Data";



const Home = () => {

    
 return ( 
   <>
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
            <div className="col-6">
               <div className="main-banner position-relative">
                  <img src={mainbanner1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  />
                  <div className="main-banner-content position-absolute">
                     <h4>SUPERCHARGED FOR PROS.</h4>
                     <h5>iPad S13+ Pro.</h5>
                     <p>From $999.00 or $41.62/mo</p>
                     <Link className="button">BUY NOW</Link>
                  </div>
               </div>
            </div>
            <div className="col-6">
               <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
               <div className="small-banner position-relative ">
                  <img src={catbanner1}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                     <h4>Best Sale</h4>
                     <h5>iPad S13+ Pro.</h5>
                     <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
               </div>
                   <div className="small-banner position-relative ">
                  <img src={catbanner2}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                     <h4>NEW ARRIVAL</h4>
                     <h5>BUY iPad Air</h5>
                     <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
               </div>
               <div className="small-banner position-relative ">
                  <img src={catbanner3}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                     <h4>NEW ARRIVAL</h4>
                     <h5>BUY iPad Air</h5>
                     <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
               </div>
               <div className="small-banner position-relative ">
                  <img src={catbanner4}
                  className="img-fluid rounded-3"
                  alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                     <h4>NEW ARRIVAL</h4>
                     <h5>BUY iPad Air</h5>
                     <p>From $999.00 <br /> or $41.62/mo</p>
                  </div>
               </div>
               </div>
            </div>
         </div>
    </Container>

    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
               <div className="services d-flex align-items-center justify-content-between">
                  
                  {services.map((serv, i) => (
                     <div key={i} className="d-flex align-items-center gap-15">
                     <img src={serv.image} alt="services" />
                     <div>
                        <h6>{serv.title}</h6>
                        <p className="mb-0">{serv.tagline}</p>
                     </div>
                  </div>
                  ))}
                  {/* <div className="d-flex align-items-center gap-15">
                     <img src={service2}  alt="services" />
                     <div>
                        <h6>Daily Suprise Offers</h6>
                        <p className="mb-0">Save up to 25% off</p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                     <img src={service3}  alt="services" />
                     <div>
                        <h6>Support 24/7</h6>
                        <p className="mb-0">Shop with an expert</p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                     <img src={service4} alt="services" />
                     <div>
                        <h6>Affordable Prices</h6>
                        <p className="mb-0">Get factory default price</p>
                     </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                     <img src={service5}  alt="services" />
                     <div>
                        <h6>Secure Payments</h6>
                        <p className="mb-0">100% Protected payment</p>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
    </Container>

    <Container class1="home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
               <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                  
                     {cartigories.map((cat, index) => (
                        <div className="d-flex align-items-center" key={index}>
                           <div>
                        <h6>{cat.product}</h6>
                        <p>{cat.items}</p>
                     </div>
                     <img src={cat.image}  alt="catigories"/>
                  </div>
                     ))}
               </div>
            </div>
         </div>
    </Container>
    
    <Container class1="featured-wrapper py-5 home-wrapper-2 ">
    <div className="row">
         <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
         </div>
         {productMap1.map((prod, ind) => (
                                <ProductCard key={ind} 
                                 image1={prod.image1}
                                 image2={prod.image2}
                                 brand={prod.brand}
                                 title={prod.title}
                                 />
                            ))}
         {/* <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard /> */}
      </div>
    </Container>

    <Container class1="famous-wrapper py-5 home-wrapper-2 ">
    <div className="row">
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src={famous1} className="img-fluid"  alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 0r $16.62/mo. for 24 mo.</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src={famous2} className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of brightness</h6>
                  <p className="text-dark">27-inch 5k Retina display</p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src={famous3}  className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className="text-dark">Smartphones</h5>
                  <h6 className="text-dark">Smartphone 13 Pro.</h6>
                  <p className="text-dark">
                     now in green. from $999.00 or $41.62/mo. for 24 mo Footnote
                  </p>
                  </div>
               </div>
            </div>
            <div className="col-3">
               <div className="famous-card position-relative">
                  <img src={famous4} className="img-fluid" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className="text-dark">home speakers</h5>
                  <h6 className="text-dark">Room-filling sound.</h6>
                  <p className="text-dark">
                     From $699 or $116.58/mo. for 12 mo.
                  </p>
                  </div>
               </div>
            </div>
         </div>
    </Container>

    <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="row">
            <div className="col-12">
            <h3 className="section-heading">Special products</h3>
            </div>
         </div>
         <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
         </div>
    </Container>

    <Container class1="popular-wrapper py-5 home-wrapper-2 py-5">
    <div className="row">
         <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
         </div>
      </div>
      <div className="row">
      {productMap2.map((prod2, ind) => (
                                <ProductCard key={ind} 
                                 image1={prod2.image1}
                                 image2={prod2.image2}
                                 brand={prod2.brand}
                                 title={prod2.title}
                                 />
                            ))}
         {/* <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard /> */}
      </div>
    </Container>

    <Container class1="marque-wrapper home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
               <div className="marquee-inner-wrapper  card-wrapper">
                  <Marquee className="d-flex">
                     <div className="mx-4 w-25">
                        <img src={brand1} alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand2} alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand3} alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand4} alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand5}alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand6} alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand7} alt="brand" />
                     </div>
                     <div className="mx-4 w-25">
                        <img src={brand8} alt="brand" />
                     </div>
                  </Marquee>
               </div>
            </div>
         </div>
    </Container>

    <Container className="blog-wrapper py-5 home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
               <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
         </div>
         <div className="row">
            {blogCard.map((bl, ind) => (
               <div key={ind} className="col-3">
               <BlogCard
                 title={bl.title}
                 desc={bl.desc}
                 image={bl.image}
                />
               </div>
            ))}
            
            {/* <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div> */}
         </div>
    </Container>
   </>

   // npm i react-fast-marquee
  )
} 

export default Home;