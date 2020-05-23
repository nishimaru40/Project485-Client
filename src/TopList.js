import React, { useState, useEffect } from 'react'
import img1 from './img/1.jpg';

const TopList = () => {

    const [restaurant,setRes] = useState([]);
        useEffect(()=>{
        fetch('/home')
        .then(res => res.json())
        .then(res => setRes(res));
    },[restaurant]);

    const resItem = restaurant;
        let showRes = () =>{
            let detailBody = resItem.map(e=>{
                return <div class="gallery">
                            <a href={img1}><img src={img1} alt="res1" width="100" height="500"></img></a>
                            <div class="desc">
                                <p>ชื่อร้าน: {e.res_name}</p>
                                <p>คะแนน: {e.res_rate}</p>
                            </div>
                        </div>
            })
           return detailBody;
        }



    return (
        <>
            <h1>TOP 10 ร้านอาหารดีเด่น ประจำสัปดาห์</h1>
            <div class="galleries">
                {showRes()}  
            </div>
        </>
    )
}

export default TopList; 