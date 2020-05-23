import React from 'react'
import img1 from './img/1.jpg';

const Restaurant = ({ match }) => {
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
                                <p>#1 : สุดยอด</p>
                                <p>#2 : เยี่ยม</p>
                            </div>
                            <div class="comment">
                                <p>******</p>
                                <p>comment field</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Restaurant; 