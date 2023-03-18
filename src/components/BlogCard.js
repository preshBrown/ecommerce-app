import React from 'react'
import { Link } from 'react-router-dom';


const BlogCard = (props) => {
    const {title, desc, image} = props;
  return (
        <div className="blog-card">
            <div className='card-image'>
            <img src={image} className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>20 Mar, 2023</p>
                <h5 className='title'>{title}</h5>
                <p className='desc'>
                    {desc}
                </p>
                <Link to="/blogs/:id" className='button'>
                 Read More
                </Link>
            </div>
        </div>
  )
}

export default BlogCard