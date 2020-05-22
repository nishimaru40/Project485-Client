import React from 'react'
import img1 from './img/1.jpg';


const Res = [
    {res_id:'001', res_name:'ก๋วยเตี๋ยวนายเกรียง', res_rate:'5.0', res_desc:'ร้านก๋วยเตี๋ยวที่เปิดมานานกว่า 10 ปี', res_place:'หน้าตึก twin town', res_opcl:'17:00-22:00น.', res_tel:'081-234-5679', res_img:'img1'},
    {res_id:'002', res_name:'ก๋วยเตี๋ยวยกซด', res_rate:'5.0', res_desc:'ร้านก๋วยเตี๋ยวเรือที่ดังที่สุดในย่าน', res_place:'ใต้หออินเตอร์พาร์ค', res_opcl:'10:00-21:00น.', res_tel:'082-222-2222', res_img:'img002'},
    {res_id:'003', res_name:'ข้าวมันไก่ป้ายแดง', res_rate:'4.9', res_desc:'ข้าวมันไก่ใต้ก้ำ', res_place:'ใต้ก้ำ', res_opcl:'17:00-22:00น.', res_tel:'083-333-3333', res_img:'img003'},
    {res_id:'004', res_name:'ลุงโย่ง', res_rate:'4.9', res_desc:'หมูกรอบหมดทุกรอบที่ไปกิน', res_place:'ใต้หออินเตอร์พาร์ค', res_opcl:'09:00-20:00น.', res_tel:'084-444-4444', res_img:'img004'}
];


const TopList = () => {

    const resItem = Res;
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