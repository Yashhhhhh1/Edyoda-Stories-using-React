import React from "react";

function Cards() {
    return (
        <div id="card-grid">
            <div className="card">
                <img className="course-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg" alt="course-img" />
                <div className="details-section">
                    <h3 className="title">Fresh Graduate or IT professional Looking...</h3>
                    <div className="writer-date"><span className="writer">Arman Ahmed</span> | 05 Jul 2019</div>
                    <p className="description">If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to...</p>
                </div>
            </div>
            <div className="card">
                <img className="course-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg" alt="course-img" />
                <div className="details-section">
                    <h3 className="title">Introducing you all to EdYoda -...</h3>
                    <div className="writer-date"><span className="writer">Arman Ahmed</span> | 05 Jul 2019</div>
                    <p className="description">Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the...</p>
                </div>
            </div>
            <div className="card">
                <img className="course-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg" alt="course-img" />
                <div className="details-section">
                    <h3 className="title">From identity crisis to the Success Story -...</h3>
                    <div className="writer-date"><span className="writer">Kalyan Mahalingam</span> | 05 Jul 2019</div>
                    <p className="description">DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organization...</p>
                </div>
            </div>
            <div className="card">
                <img className="course-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg" alt="course-img" />
                <div className="details-section">
                    <h3 className="title">Typical day of Data Scientist - An inside...</h3>
                    <div className="writer-date"><span className="writer">Saurav Ghosh</span> | 05 Jul 2019</div>
                    <p className="description">I've been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation...</p>
                </div>
            </div>
            <div className="card">
                <img className="course-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg" alt="course-img" />
                <div className="details-section">
                    <h3 className="title">Amazon Web Services (AWS)...</h3>
                    <div className="writer-date"><span className="writer">Kalyan Mahalingam</span> | 05 Jul 2019</div>
                    <p className="description">It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the...</p>
                </div>
            </div>
            <div className="card">
                <img className="course-img" src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg" alt="course-img" />
                <div className="details-section">
                    <h3 className="title">EdYoda Meetup #01 : A Date with Cloud</h3>
                    <div className="writer-date"><span className="writer">Ashish Pandey</span> | 05 Jul 2019</div>
                    <p className="description">I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in...</p>
                </div>
            </div>
            
        </div>
    )
}

export default Cards;