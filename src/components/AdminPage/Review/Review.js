import React from 'react';
import SideBar from '../../ShareComponents/SideBar/SideBar';

const Review = () => {
    return (
        <div className="row w-100">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9 mt-5">
                <h1 className="ms-3">Share Your Review</h1>
                <div className="form-container">
                    <div className="form-inner">
                        <form>
                            <div className="mb-5">
                                <p>Upload a Image For Profile </p>
                                <input type="file" className="form-control p-3 shadow-lg border-0" />
                            </div>
                            <div className="mb-5">
                                <input type="text" className="form-control p-3 shadow-lg border-0" placeholder="Subject" />
                            </div>
                            <div class="form-floating mb-5 shadow-lg">
                                <textarea className="form-control border-0" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px'}}></textarea>
                                <label for="floatingTextarea2">Comments</label>
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