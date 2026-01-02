import React from 'react'

const Home = ({launch,title,btn,txt,desktop,mobile,video,Element}) => {
    return (
        <>
            <section className="section-01">
                <div className="main-01">
                    <div className="media">
                    {video == null ? 
                    <picture>
                            <source srcSet={desktop} media="(min-width: 600px)" />
                            <source srcSet={mobile} media="(max-width: 599px)" />
                            <img src={desktop} alt="Responsive content" />
                    </picture> 
                    :
                    <video src={video} autoPlay loop muted/>
                    }</div>
                        <div className="rag-content">
                            {/* element, if provided */}
                                {Element && (
                                    <div
                                    className="content-box" style={{
                                        display: "flex",
                                        justifyContent: "flex-end",   // push to right
                                        alignItems: "center",          // center along horizontal axis (vertical middle)
                                        height: "100%",                // parent must have height
                                    }}
                                    >
                                    <div
                                        className="element"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-once="false"
                                    >
                                        {Element}
                                    </div>
                                    </div>
                                )}
                            <div className="box-content">
                                <div className="content-01">
                                    <h3 data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{launch}</h3>
                                    <h1 data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{title}</h1>
                                    <p data-aos="fade-up" data-aos-duration="800" data-aos-once="false">{txt}</p>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-down"></div>
                </div>
            </section>
        </>
    )
}


export default Home



