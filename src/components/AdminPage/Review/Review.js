import axios from 'axios';
import React, { useState } from 'react';
import SideBar from '../../ShareComponents/SideBar/SideBar';

const Review = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [image, setImage] = useState(false);
    const handleImage = (event) => {
        const imageData = new FormData();
        imageData.set('key', '97e094938ac70815786a7149e170c33d')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
                setImage(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const handleReviews = () => {
        const title = document.getElementById('title').value;
        const comment = document.getElementById('comment').value;
        const photo = imageUrl;
        const productData = {
            title: `${title}`,
            description: `${comment}`,
            photo: `${photo}`
        }
        const url = 'https://aqueous-coast-40888.herokuapp.com/addReviews';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => console.log(res))
            .then(result => {
                console.log('data create successfully')
                console.log(productData)
            })
    }
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 mt-5">
                <h1 className="ms-3">Share Your Review</h1>
                <div className="form-container">
                    <div className="form-inner">
                        <form onSubmit={handleReviews}>
                            <div className="mb-5">
                                <p>Upload a Image For Profile </p>
                                <input onChange={handleImage} type="file" className="form-control p-3 shadow-lg border-0" />
                                {image && <p className="text-success">Image Upload successFully</p>}
                            </div>
                            <div className="mb-5">
                                <input type="text" className="form-control p-3 shadow-lg border-0" name="title" placeholder="Subject" id="title" />
                            </div>
                            <div className="form-floating mb-5 shadow-lg">
                                <textarea className="form-control border-0" placeholder="Leave a comment here" id="floatingTextarea2" name="comment" id="comment" style={{ height: '100px' }}></textarea>
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>
                            <button type="submit" className="btn btn-brand">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;