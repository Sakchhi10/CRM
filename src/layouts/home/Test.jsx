import React from "react";
import {
    MDBCol,
    MDBCard,
    MDBIcon,
    MDBCardBody,
    MDBRow,
    MDBContainer,
    MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
    return (
        <MDBContainer
            className="py-5"
            style={{ color: "#000" }}
        >
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="10" xl="8" className="text-center">
                    <h1 className="mb-4 pb-2 mb-md-5 pb-md-0">
                        See why thousands of agencies, recruiters, and entrepreneurs love Instantly.
                    </h1>
                </MDBCol>
            </MDBRow>
            <MDBRow className="text-start">
                <MDBCol md="4" className="mb-4 mb-md-0">
                    <MDBCard style={{ border: "none" }}>
                        <MDBCardBody className="py-4 mt-2">
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                “I’ve specialised in cold email marketing since 2018 and in this time I've used almost every popular cold-emailing tool available on the market today - <span className="text-primary"> Instantly is hands down my </span>
                                {("favourite").split(" ").map((word, index) => (
                                    <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent" }}>{word} </span>
                                ))}
                                <span style={{ color: "purple" }}>of them all</span>.”</p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-initial">
                                        <img
                                            src="https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/638a1d59e54de90988d5d548_Mask%20group-min-p-500.png"
                                            className="rounded-circle shadow-1-strong mt-3"
                                            width="50"
                                            height="50"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <h5 className="font-weight-bold mt-3 d-flex justify-content-initial">SAM WILSON</h5>
                                    <h6 className="font-weight-bold d-flex justify-content-initial text-muted">
                                        Managing Director @ Canbury Partners
                                    </h6>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4 mb-md-0">
                    <MDBCard style={{ border: "none" }}>
                        <MDBCardBody className="py-4 mt-2">
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                “Instantly is the exact email outreach solution that <span className="text-primary"> I always wish </span>
                                {("existed").split(" ").map((word, index) => (
                                    <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent" }}>{word} </span>
                                ))}. We’ve tried almost every product that people in the outbound space talks about and none of them even comes close to this.” </p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-initial">
                                        <img
                                            src="https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/638b15d3b9a23c14d3bab843_image%2016%20(1)-min.png"
                                            className="rounded-circle shadow-1-strong mt-3"
                                            width="50"
                                            height="50"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <h5 className="font-weight-bold mt-3 d-flex justify-content-initial">TONY LIU</h5>
                                    <h6 className="font-weight-bold d-flex justify-content-initial text-muted">
                                        CEO @ Omnichannel
                                    </h6>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4 mb-md-0">
                    <MDBCard style={{ border: "none" }}>
                        <MDBCardBody className="py-4 mt-2">
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                The two best things about Instantly is that it allows you to send at scale, and the team teaches you how to do it. <span className="text-primary"> If you are on a normal email outreach program then you have no clue </span>
                                {("what").split(" ").map((word, index) => (
                                    <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent" }}>{word} </span>
                                ))} <span style={{ color: "purple" }}> you are missing out on.</span>
                            </p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-initial">
                                        <img
                                            src="https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/63eb94b5d8c4c160867a2759_david.png"
                                            className="rounded-circle shadow-1-strong mt-3"
                                            width="50"
                                            height="50"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <h5 className="font-weight-bold mt-3 d-flex justify-content-initial">DAVID TAGGART</h5>
                                    <h6 className="font-weight-bold d-flex justify-content-initial text-muted">
                                        Founder @ PDMacro
                                    </h6>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            <MDBRow className="text-start">
                <MDBCol md="4" className="mb-4 mb-md-0 mt-5">
                    <MDBCard style={{ border: "none" }}>
                        <MDBCardBody className="py-4 mt-2">
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                "I've tried a few other email automation tools but Instantly beats all of them in terms of ease of use, deliverability optimization settings, unlimited email account additions. One top of the amazing features, <span className="text-primary"> their support team is world class and very </span>
                                {("helpful").split(" ").map((word, index) => (
                                    <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent" }}>{word} </span>
                                ))}
                                <span style={{ color: "purple" }}> when needed</span>."</p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-initial">
                                        <img
                                            src="https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/63f366af344db29298dcdc24_unnamed%20(2).png"
                                            className="rounded-circle shadow-1-strong mt-3"
                                            width="50"
                                            height="50"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <h5 className="font-weight-bold mt-3 d-flex justify-content-initial">SANJAY JOHN EAPEN</h5>
                                    <h6 className="font-weight-bold d-flex justify-content-initial text-muted">
                                        CEO @ Thincture
                                    </h6>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4 mb-md-0 mt-5">
                    <MDBCard style={{ border: "none" }}>
                        <MDBCardBody className="py-4 mt-2">
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                "It's super easy to use. I've used a lot of softwares, but <span className="text-primary">Instantly comes with easiest and </span>
                                {("most").split(" ").map((word, index) => (
                                    <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent" }}>{word} </span>
                                ))}
                                <span style={{ color: "purple" }} > user friendly interface</span>." </p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-initial">
                                        <img
                                            src="https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/63f37ccb43a17b944322acb4_thumb_square_43212d0585ab6381bc0e1a4823370653.webp"
                                            className="rounded-circle shadow-1-strong mt-3"
                                            width="50"
                                            height="50"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <h5 className="font-weight-bold mt-3 d-flex justify-content-initial">SHIVANG SINGH</h5>
                                    <h6 className="font-weight-bold d-flex justify-content-initial text-muted">
                                        CEO @ Emaily Zone
                                    </h6>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4" className="mb-4 mb-md-0 mt-5">
                    <MDBCard style={{ border: "none" }}>
                        <MDBCardBody className="py-4 mt-2">
                            <p className="mb-2">
                                <MDBIcon fas icon="quote-left" className="pe-2" />
                                The overall <span className="text-primary"> UI is very clean and they have been </span>
                                {("adding").split(" ").map((word, index) => (
                                    <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent" }}>{word} </span>
                                ))}
                                <span style={{ color: "purple" }}> new features frequently </span> based on customer feedback which is great. Love Instantly!</p>
                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="d-flex justify-content-initial">
                                        <img
                                            src="https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/63eb996305e98670e534cb78_tasha.png"
                                            className="rounded-circle shadow-1-strong mt-3"
                                            width="50"
                                            height="50"
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <h5 className="font-weight-bold mt-3 d-flex justify-content-initial">TASHA ROACHFORD</h5>
                                    <h6 className="font-weight-bold d-flex justify-content-initial text-muted">
                                        CEO @ Brand Digitizer
                                    </h6>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}