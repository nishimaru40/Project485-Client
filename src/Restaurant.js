import React, { useState } from 'react'
import img1 from './img/1.jpg';

const Restaurant = ({ match }) => {
    const [comments, setComments] = useState([{
        rating: "4/5",
        feedback: "Very Good"
    },
    {
        rating: "3/5",
        feedback: "Good"
    },
    {
        rating: "2/5",
        feedback: "Not Bad"
    },]);
    const [feedback, setFeedback] = useState("");
    const [rating, setRating] = useState("");

    let commentList = comments.map(function (comment) {
        return <div>
            <p>{comment.rating}</p>
            <p>{comment.feedback}</p>
            <hr></hr>
        </div>;
    })

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div>
            <h1>ร้าน</h1>
            <section class="rest-info">
                <div class="left-info">
                    <img src={img1} alt="res1"></img>
                    <div class="desc">
                        <p>ชื่อร้าน: A</p>
                        <p>คะแนน: 5</p>
                    </div>
                </div>
                <div class="right-info">
                    <div class="galleries">
                        <img src={img1} alt="res1"></img>
                        <img src={img1} alt="res1"></img>
                        <img src={img1} alt="res1"></img>
                    </div>
                    <div class="rest-info">
                        <div class="left-info">
                            <ul>
                                <li>ชื่อร้าน</li>
                                <li>ตำแหน่ง</li>
                                <li>แผนที่</li>
                                <li>ราคา</li>
                            </ul>
                        </div>
                        <div class="right-info">
                            <div class="comment">
                                {commentList}
                            </div>

                            <div class="feedback">
                                <form onSubmit={event => handleSubmit(event)}>
                                    <textarea placeholder="Comment" value={feedback} onChange={event => setFeedback(event.target.value)} style={{ "min-height": "50px" }} rows="3"></textarea>
                                    <br></br>
                                    <select value={rating} onChange={event => setRating(event.target.value)}>
                                        <option selected value="0"></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <input type="submit" value="Submit" style={{ margin: "10px" }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Restaurant; 