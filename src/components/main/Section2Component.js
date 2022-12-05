import React from 'react';

function Section2Component({notice,gallery,modalOpen}){

    const onClickModal=(e,z)=>{
        e.preventDefault();
        if(z!==0) return;
        modalOpen();
    }

    return (
        <section id="section2">
            <div className="left board">
            <button className="notice-btn">공지사항</button>
            <div className="notice-box board-box">
                <div className="gap">
                <ul>
                    {
                        notice.map((item,idx)=>{
                            return(
                                <li key={idx}><a href="!#" onClick={(z)=>onClickModal(z,idx)} title={item.공지사항} className={idx===0 ? 'modal-btn':''}>{item.공지사항}</a><span>{item.날짜}</span></li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
            </div>
            <div className="center board">
            <button className="gallery-btn">갤러리</button>
            <div className="gallery-box board-box">
                {
                    gallery.map((item,idx)=>{
                        return(
                            <a href="!#" key={idx} title={item.제목}><img src={item.imgSrc} alt="icon1"/></a>
                        )
                    })
                }
            </div>
            </div> 
            <div className="right">
            <div className="banner">
                <div className="title"><h2>EVENT BANNER</h2></div>
                <div className="img-box">
                    <a href="!#" title="banner"><img src="./images/banner.jpg" alt="banner"/></a>
                </div>
            </div>
            </div>  
        </section>
    );
};

Section2Component.defaultProps = {
    notice:[
        {공지사항:"Green 복지재단 공지사항1", 날짜:"2020.11.23"},
        {공지사항:"Green 복지재단 공지사항2", 날짜:"2020.11.20"},
        {공지사항:"Green 복지재단 공지사항3", 날짜:"2020.11.15"},
        {공지사항:"Green 복지재단 공지사항4", 날짜:"2020.11.11"}
    ],
    gallery:[
        {제목:"icon1", imgSrc:"./images/icon1.png"},
        {제목:"icon2", imgSrc:"./images/icon2.png"},
        {제목:"icon3", imgSrc:"./images/icon3.png"}
    ]
}

export default Section2Component;