import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import Container from '../components/Container';
import {  productMap2 } from "../utils/Data";


const SingleProduct = () => {
  const props = { 
    width: 400, 
    height: 600, 
    zoomWidth: 600, 
    img: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' 
      };

  const [orderedProduct, setOderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  }



  return (
    <>
       <Meta title="Single Product" />
        <BreadCrumb title="Single Product" />
          <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                      <div className='main-product-image'>
                        <div>
                          <ReactImageZoom {...props} />
                        </div>
                      </div>
                      <div className='other-product-images d-flex flex-wrap gap-15'>
                        <div>
                          <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg' 
                               className='img-fluid' 
                               alt='' />
                        </div>
                        <div>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEFP0NdT7YONFaWZCg9MIWrTK1sPquF-Uahh5F5JZMR53sPlBM0TWSVzEThDIc4wxOag&usqp=CAU'
                               className='img-fluid' 
                               alt='' />
                        </div>
                        <div>
                          <img src='https://tiktec.pk/wp-content/uploads/2022/01/Aw12-smart-watch-silver-black-666x666.jpg'
                               className='img-fluid' 
                               alt='' />
                        </div>
                        <div>
                          <img src={watch2}
                               className='img-fluid' 
                               alt='' />
                        </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='main-product-details'>
                        <div className='border-bottom'>
                          <h3 className='title'>
                            kids Headphones Bulk Multi Colored For Students
                          </h3>
                        </div>
                        <div className='border-bottom py-3'>
                          <p className='price'>$ 100</p>
                          <div className='d-flex align-items-center gap-10'>
                            <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                            <p className='mb-0 t-review'>( 2 Reviews )</p>
                          </div>
                          <a className='review-btn' href='#review'>
                            Write a Review
                          </a>
                        </div>
                        <div className=' py-3'>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Type :</h3> 
                            <p className='product-data'>
                              Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>
                              Brand :
                            </h3> 
                            <p className='product-data'>Havells</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>
                              Category :
                            </h3> 
                            <p className='product-data'>Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>
                              Tags :
                            </h3> 
                            <p className='product-data'>Watch</p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>
                              Availability :
                            </h3> 
                            <p className='product-data'>In Stock</p>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>
                              Size :
                            </h3> 
                            <div className='d-flex flex-wrap gap-15'>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                S
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                M
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                XL
                              </span>
                              <span className='badge border border-1 bg-white text-dark border-secondary'>
                                XXL
                              </span>
                            </div>
                          </div>
                          <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>
                              Color :
                            </h3> 
                            <Color />
                          </div>
                          <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                            <h3 className='product-heading'>
                              Quantity :
                            </h3> 
                            <div className=''>
                              <input
                               type='number'
                               name=''
                               min={1}
                               max={10}
                               className='form-control'
                               style={{width: "70px"}} 
                               id=""
                              />
                            </div>
                            <div className='d-flex align-items-center gap-30 ms-5'>
                                <button className='button border-0' type='submit'>
                                    Add to Cart
                                </button>
                                <button className='button signup'>
                                  Buy It Now
                                </button>
                            </div>
                          </div>
                          <div className='d-flex align-items-center gap-15'>
                            <div>
                              <a href=''>
                                <TbGitCompare className='fs-5' />Add to compare
                              </a>
                            </div>
                            <div>
                              <a href=''>
                                <AiOutlineHeart className='fs-5' />Add to wishlist
                              </a>
                            </div>
                          </div>
                          <div className='d-flex gap-10 flex-column my-3'>
                            <h3 className='product-heading'>Shipping & Returns :</h3> 
                            <p className='product-data'>
                              Free shipping and returns Available on all orders!<br />
                              We ship all US domestic orders  within..
                              <b>5-10 business days!</b>
                            </p>
                          </div>
                          <div className='d-flex gap-10 align-items-center my-3'>
                            <h3 className='product-heading'>Product Link:</h3> 
                            <a href='javascript:void(0);'
                               onClick={ () =>{
                                copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                               }}
                               >
                              Copy Product Link
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
          </Container>

          <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                      <h4>Description</h4>
                        <div className='bg-white p-3'>
                        <p>
                            loremrytyfyyugwsrfsdgvhkdslffcksfkdsflk
                            jfkldj loremrytyfyyugwsrfsdgvhkdslffcksfk
                            dsflkjfkldjloremipsu
                        </p>
                        </div>
                    </div>
                </div>
          </Container>

          <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                    <h3 id='review'>Reviews</h3>
                      <div className='review-inner-wrapper'>
                        <div className='review-head d-flex justify-content-between align-items-end'>
                         <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={4}
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                    <p className='mb-0'>Based on 2 Reviews</p>
                                </div>
                            </div>
                            { orderedProduct && ( 
                               <div>
                                 <a className='text-dark text-decoration-underline' href=''>
                                    Write a Review
                                </a>
                              </div>
                              )}
                        </div>
                        <div className='review-form py-4'>
                          <h4>Write a Review</h4>
                          <form action="" className="d-flex flex-column gap-15">
                            <div>
                              <ReactStars
                               count={5}
                               size={24}
                               value={4}
                               edit={true}
                               activeColor="#ffd700"
                               />
                            </div>
                           <div>
                              <textarea
                              name=""
                              id="" 
                              type="text" 
                              className="w-100 form-control"
                              cols="30"
                              rows="4"
                              placeholder="Comments.." />
                           </div>
                           <div className='d-flex justify-content-end'>
                              <button className="button border-0">Submit Review</button>
                           </div>
                        </form>
                       </div>
                       <div className='reviews mt-4'>
                        <div className='review'>
                          <div className='d-flex gap-10 align-items-center'>
                            <h6 className='mb-0'>Navdeep</h6>
                          <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                          />
                          </div>
                          <p className='mt-3'>
                            loremrytyfyyugwsrfsdgvhkdslffcksfkdsflk loremrytyfyyugwsrfsdgvhkdslffcksfkllorem
                            loremrytyfyyugwsrfsdgvhkdslffcksfk loremrytyfyyugwsrfsdgvhkdslffcksfk
                            loremrytyfyyugwsrfsdgvhkdslffcksfkllorem loremrytyfyyugwsrfsdgvhkdslffcksfk
                          </p>
                        </div>
                       </div>
                      </div>
                    </div>
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
               </div>
         </Container> 
    </>
  )
}

export default SingleProduct;