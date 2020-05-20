import React from 'react'
import img1 from './img/1.jpg';
    const TopList = () => {
        return (
            <>  
                <h1>TOP 10 ร้านอาหารดีเด่น ประจำสัปดาห์</h1>
                <div class="gallery">
                    <a href={img1}>
                        <img src={img1} alt="res1" width="100" height="500"></img>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>

                <div class="gallery">
                    <a href={img1}>
                        <img src={img1} alt="res1" width="100" height="500"></img>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>

                <div class="gallery">
                    <a href={img1}>
                        <img src={img1} alt="res1" width="100" height="500"></img>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>

                <div class="gallery">
                    <a href={img1}>
                        <img src={img1} alt="res1" width="100" height="500"></img>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>

                <div class="gallery">
                    <a href={img1}>
                        <img src={img1} alt="res1" width="100" height="500"></img>
                    </a>
                    <div class="desc">Add a description of the image here</div>
                </div>
            </>
        )
    }
    
export default TopList; 