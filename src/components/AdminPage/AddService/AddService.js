import axios from 'axios';
import React, { useState } from 'react';
import SideBar from '../../ShareComponents/SideBar/SideBar';

const AddService = () => {
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
    const handleServiceSubmit = () => {
        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const description = document.getElementById('description').value;
        const photo = imageUrl;
        const productData = {
            title: `${title}`,
            description: `${description}`,
            price: `${price}`,
            photo: `${photo}`
        }
        const url = 'https://vast-savannah-28483.herokuapp.com/addServices';
        fetch(url,{
            method:'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(productData)
        })
        .then(res => console.log('data come'))
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
                <h1 className="ms-3">ADD SERVICE</h1>
                <div className="form-container">
                    <div className="form-inner">
                        <form onSubmit={handleServiceSubmit}>
                            <div className="mb-5">
                                <p>Upload a Image For Service </p>
                                <input onChange={handleImage} type="file" className="form-control p-3 shadow-lg border-0" />
                                {image && <p>Image Selected</p>}
                            </div>
                            <div className="mb-5">
                                <input type="text" name="title" className="form-control p-3 shadow-lg border-0" placeholder="Service Title" id="title" />
                            </div>
                            <div className="mb-5">
                                <input type="text" name="price" className="form-control p-3 shadow-lg border-0" placeholder="Price" id="price" />
                            </div>
                            <div className="form-floating mb-5 shadow-lg">
                                <input type="text" name="description" className="form-control p-3 shadow-lg border-0" placeholder="Description" style={{height: '100px'}} id="description" />
                            </div>
                            
                            <button type="submit" className="btn btn-brand">Submit</button>
                        </form>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default AddService;