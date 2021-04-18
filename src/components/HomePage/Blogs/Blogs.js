import React from 'react';
import { Link } from 'react-router-dom';
import powerCoin from '../../../images/news-1.jpg'
import dryCleaning from '../../../images/news-2.jpg'
import washCloth from '../../../images/news-3.jpg'
import laundry from '../../../images/news-4.jpg'
import BlogCard from '../BlogCard/BlogCard';
const Blogs = () => {
    const blogData = [
        {
            id: 1,
            title: 'Our Power Coin Laundry Service at it’s Best',
            img: powerCoin
        },
        {
            id: 2,
            title: 'Dry Cleaning Saves Money in the Long Run',
            img: dryCleaning
        },
        {
            id: 3,
            title: 'We Wash Clothes with the best Detergent',
            img: washCloth
        },
        {
            id: 4,
            title: 'Our Power Coin Laundry Service at it’s Best',
            img: laundry
        }
    ]
    return (
        <section className="py-5">
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">BLOGS</h5>
                <h1 className="my-5">Our Blogs</h1>
            </div>
            <div className="d-flex justify-content-center pt-5">
                <div className="row w-75">
                    {
                        blogData.map(blogInfo => <BlogCard key={blogInfo.id} info={blogInfo}></BlogCard>)
                    }
                </div> 
            </div>
            <div className="d-flex justify-content-center pt-5">
                <Link to="/"><button className="btn btn-brand">Explore More</button></Link>
            </div>
        </section>
    );
};

export default Blogs;