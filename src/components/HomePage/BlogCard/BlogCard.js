import React from 'react';

const BlogCard = ({ info }) => {
    return (
        <div className="col-md-3 text-center card-style">
            <div>
                <img src={info.img} className="img-fluid image-style" alt="" />
            </div>
            <div className="mt-5">
                <h4>{info.title}</h4>
            </div>
        </div>
    );
};

export default BlogCard;