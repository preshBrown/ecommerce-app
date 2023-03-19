import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Nmae"/>
      <BreadCrumb title="Dynamic Blog Nmae" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='single-blog-card'>
                        <Link to="/blogs" className='d-flex align-items-center gap-10'>
                            <HiOutlineArrowLeft className='fs-5'/>Go back to Blogs
                        </Link>
                        <h3 className='title'>
                            A Beautiful Sunday morning Renaissance
                        </h3>
                        <img src={blog} className='img-fluid w-100 my-4' alt='blog'/>
                        <p>
                            You are only as good as your last collection, which is an 
                            enormous pressure. I think there is Something about luxury 
                            it is not Something people need , but its what they want. it 
                            really pulls at their heart . I have a fantastic relationship 
                            with money. 
                        </p>
                    </div>
                </div>
            </div>
      </Container>
    </>
  )
}

export default SingleBlog