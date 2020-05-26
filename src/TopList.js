import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import img1 from './img/1.jpg';


const TopList = () => {

    const [restaurant, setRes] = useState([]);
    useEffect(() => {
        fetch('/home')
            .then(res => res.json())
            .then(res => setRes(res));
    }, [restaurant]);

    const resItem = restaurant;
    let showRes = () => {
        let detailBody = resItem.map(e => {
            return <div class="gallery">
                <Link to='/Restaurant/res_id'>
                    <img src={img1} alt="res1" width="100" height="500"></img>
                    <div class="desc">
                        <p>ชื่อร้าน: {e.res_name}</p>
                        <p>คะแนน: {e.res_rate}</p>
                    </div>
                </Link>
            </div>
        })
        return detailBody;
    }



    return (
        <>
            <h1>TOP 10 ร้านอาหารดีเด่น ประจำสัปดาห์</h1>
            <div class="galleries">
                {/* {showRes()}   */}

                <div class="gallery">
                    <Link to='/Restaurant/res_id'>
                        <img src={img1} alt="res1" width="100" height="500"></img>
                        <div class="desc">
                            <p>ชื่อร้าน: A</p>
                            <p>คะแนน: 5</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopList; 