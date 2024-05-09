import React from 'react';

import Img1 from "../../public/assets/home/email.png";
import Img2 from "../../public/assets/home/warm.png";
import Testimonials from "../layouts/home/Testimonials";
import Faq from "../layouts/home/Faq";
import Image1 from "../../public/assets/home/respond.png";
import Image2 from "../../public/assets/home/active.png";
import Image3 from "../../public/assets/home/acceralater.png";
import Image4 from "../../public/assets/home/master.png";
import Test from "../layouts/home/Test";
import Image5 from "../../public/assets/home/last.png";
// import "./Mainpage.css";

const Home = () => {
    return (
        <div className='bg-light'>
            <div style={{ position: 'relative' }}>
                <img src="" alt="" style={{ width: '100%', height: '600px' }} />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '80%' }}>
                    <h2 style={{ color: 'black', margin: '0 50px', padding: '10px 20px', fontSize: "70px" }} className='mt-5'>10x your leads,<span className='text-primary'> Appointments,<br />and Close </span>
                        {("More").split(" ").map((word, index) => (
                            <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent", fontWeight: "bold" }}>{word} </span>
                        ))}
                        <span style={{ color: "purple" }}> Deals.</span></h2>
                    <h6 style={{ padding: "20px", fontSize: "20px", textAlign: "center" }}>ChatsBox Scales your outreach campaigns by Managing Multiple Facebook, Instagram, LinkedIn, X (Twitter) Accounts & Email Marketing in one <b>UNIBOX</b>.</h6>
                    <div>
                        <button style={{ margin: '0 50px', padding: '10px 20px', fontSize: '16px', color: "white", border: "none", fontWeight: "bold" }} className='rounded-pill bg-primary px-5'>GET STARTED NOW</button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', fontSize: '20px' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jLPsBYMBXZAUrXHFj_BYPSB9qE1g2p8e0g&usqp=CAU" alt="Checkmark" style={{ width: '20px', marginRight: '5px' }} />
                            No credit card required
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7jLPsBYMBXZAUrXHFj_BYPSB9qE1g2p8e0g&usqp=CAU" alt="Checkmark" style={{ width: '20px', marginRight: '5px' }} />
                            Free Warmup included
                        </div>
                    </div>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-9 mt-4'>
                                <p style={{ textAlign: "left", fontSize: "30px", paddingBottom: "40px" }}>
                                    10,000+ clients <span className='text-primary'>are replying immediately
                                        <br className='mb-5'></br> To Close More Deals, Never Miss a Deal.</span>
                                </p>
                            </div>
                            <div className='col-lg-3 float-right mt-5'>
                                <button style={{ marginLeft: '100px', padding: '10px 20px', fontSize: '16px', color: "blue", border: "none", whiteSpace: "nowrap" }} className='rounded-pill border border-primary'>SEE MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonials */}
            <Testimonials />


            {/*  Instantly User Ratings*/}

            <section className="section-frame overflow-hidden">
                <div className="wrapper" style={{ borderRadius: "1rem" }}>
                    <button className='text-center rounded-pill border-danger text-danger mb-3 px-4'>Features</button>
                    <h2 className='mb-4'>What You Can Do With ChatsBox</h2>
                    <div className="container-fluid py-17">
                        <div className="row text-center">
                            <div className="col-xl-11 col-xxl-10 mx-auto">
                                <div className="row gy-6 text-center my-2">
                                    <div className="col-md-6 col-lg-3">

                                        <img src="https://icon-library.com/images/my-account-icon-png/my-account-icon-png-17.jpg" alt="" style={{ height: "90px" }} />
                                        <h4 className='mt-3'>Connect All your accounts </h4>
                                        <p className='mb-0'>Connect Multiple Facebook, Instagram, LinkedIn, X (Twitter) Accounts in CRM(ChatsBox) & Get all the responses in one unibox.</p>
                                    </div>

                                    <div className="col-md-6 col-lg-3">

                                        <img src="https://ps.w.org/mailsend/assets/icon-256x256.png?rev=2854081" alt="" style={{ height: "90px" }} />
                                        <h4 className='mt-3'>Send Unlimited Emails </h4>
                                        <p className="mb-0">Use Our highly converting Messages, Templates to send Personalized emails and connect with your Prospects </p>
                                    </div>

                                    <div className="col-md-6 col-lg-3">

                                        <img src="https://datarob.com/content/images/size/w600/2021/02/How-to-Write-a-Follow-Up-Email.jpg" alt="" style={{ height: "90px" }} />
                                        <h4 className='mt-3'>Follow up with Leads </h4>
                                        <p className="mb-0">Reminders & Google Calender Integration to help you follow up with your Potential Leads, Never miss a conversation.</p>
                                    </div>

                                    <div className="col-md-6 col-lg-3">

                                        <img src="data:image/jpeg;base64,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" alt="" style={{ height: "90px" }} />
                                        <h4 className='mt-3'>Close More Deals </h4>
                                        <p className="mb-0">Never Miss a Response, connect & reply your prospects immediately. Convert your prospects to Paying Clients.</p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Email */}

            <section>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3 text-center mt-4">
              <h4 className="text-success serh4">About Us</h4>
            </div> */}
                        <div className=" py-5 mb-2 bg-white rounded mt-5">
                            <div className="row">
                                <div className="col-lg-7 mt-5">
                                    <img src={Img1} className="img-fluid rounded-3" alt="about" />
                                </div>
                                <div className="col-lg-5">
                                    {/* <h1 className="mb-2 colorhead" style={{color:" #1caf41"}}>About Us</h1> */}
                                    <h1 className=" font-weight-bold" style={{ textAlign: "initial", fontSize: "3rem", fontWeight: "bold" }}>
                                        Extremely Scale Your Outreach with
                                        <span className='text-primary'> Multiple Social </span>
                                        {("Media").split(" ").map((word, index) => (
                                            <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent", fontWeight: "bold" }}>{word} </span>
                                        ))}
                                        <span style={{ color: "purple" }}>Accounts</span>
                                    </h1>
                                    <p style={{ textAlign: 'initial' }}>One Subscription let’s you
                                        Send thousands of emails
                                        every day without damaging your sender reputation.Create your campaigns,
                                        connect your Multiple sending accounts,
                                        and watch those leads
                                        turn into customers!
                                    </p>

                                    <button className='rounded-pill border border-primary text-primary py-2 mt-5 d-flex justify-content-initial px-3' style={{ fontWeight: "bold" }}>GET STARTED NOW</button>
                                    <img src="https://media.istockphoto.com/id/1365197728/vector/add-plus-medical-cross-round-button-3d-vector-icon-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=A-7oq1uyF-3viWoEdb4wF3JgWX-EXzDl7UHa6ZK_EzI=" alt="" style={{ height: "80px" }} className='d-flex justify-content-initial' />
                                </div>
                            </div>
                        </div>
                        <div className=" p-3 mb-3 bg-white rounded mt-5 ">
                            <div className="row">
                                <div className="col-lg-6 ">
                                    <h1 className="mt-4 font-weight-bold" style={{ textAlign: "initial", fontSize: "3rem", fontWeight: "bold" }}>
                                        <span className='text-primary'>Increase </span>
                                        {("conversion").split(" ").map((word, index) => (
                                            <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent", fontWeight: "bold" }}>{word} </span>
                                        ))}
                                        <span style={{ color: "purple" }}>rates </span> by up to 90%
                                    </h1>
                                    <p style={{ textAlign: 'justify' }} className='mt-5'>With ChatsBox, a lead never slips away,
                                        and a follow-up opportunity is never missed.
                                        Identify interested leads and reengage
                                        Them with a Quality Questions & close
                                        More Deals.
                                    </p>
                                    <button className='rounded-pill border border-primary text-primary py-2 mt-5 d-flex justify-content-initial px-3' style={{ fontWeight: "bold" }}>GET STARTED NOW</button>
                                    <img src="https://media.istockphoto.com/id/1365197728/vector/add-plus-medical-cross-round-button-3d-vector-icon-cartoon-minimal-style.jpg?s=612x612&w=0&k=20&c=A-7oq1uyF-3viWoEdb4wF3JgWX-EXzDl7UHa6ZK_EzI=" alt="" style={{ height: "80px" }} className='d-flex justify-content-initial' />
                                </div>
                                <div className="col-lg-6">
                                    <img src={Img2} className="img-fluid rounded-3" alt="about" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Faq */}
            <Faq />

            {/* Respond */}
            <div >
                <img src={Image1} alt="" style={{ width: "80%", filter: "contrast(120%)" }} className='rounded-3' />
            </div>

            {/* Analytics */}
            <div className=" p-3 mb-3 px-5 rounded mt-5 ">
                <div className="row">
                    <div className="col-lg-6 ">
                        <h1 className="mt-4 font-weight-bold" style={{ textAlign: "initial", fontSize: "3.5rem", fontWeight: "bold" }}>
                            Level Up Your Outreach
                            <span className='text-primary'> Campaigns with Our </span>
                            {("Winning").split(" ").map((word, index) => (
                                <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent", fontWeight: "bold" }}>{word} </span>
                            ))} <span style={{ color: "purple" }}>Scripts & Templates.</span>
                        </h1>

                        <h4 style={{ textAlign: "justify" }} className='mt-5'>Level up your outreach game with our
                            Winning scripts, Templates, Hooks &
                            Many more with 90% open rates &
                            Response rates. Reach out to your Prospects
                            On all Social Media Platforms to Get More Deals.
                        </h4>
                        <button className='rounded-pill border border-primary text-primary py-2 mt-5 d-flex justify-content-initial px-3' style={{ fontWeight: "bold" }}>GET STARTED NOW</button>
                    </div>
                    <div className="col-lg-6">
                        <img src={Image2} className="img-fluid rounded-3" alt="about" />
                    </div>
                </div>
            </div>

            {/* Instantly */}
            <div className=" p-3 mb-2 px-4 rounded mt-5">
                <div className="row">
                    <div className="col-lg-7">
                        <img src={Image3} className="img-fluid rounded-3" alt="about" />
                    </div>
                    <div className="col-lg-5">
                        {/* <h1 className="mb-2 colorhead" style={{color:" #1caf41"}}>About Us</h1> */}
                        <h1 className="mt-2" style={{ textAlign: "initial", fontSize: "3rem", fontWeight: "bold", fontFamily: "sans-serif" }}>
                        ChatsBox’s Enhanced <span className='text-primary'>Reminder & </span>
                            {("Reporting").split(" ").map((word, index) => (
                                <span key={index} style={{ background: `linear-gradient(to right, blue 0%, blue 30%, purple 70%)`, WebkitBackgroundClip: "text", color: "transparent", fontWeight: "bold" }}>{word} </span>
                            ))}<span style={{color:"purple"}}>System</span>
                        </h1>

                        <h4 style={{ textAlign: "justify" }} className='mt-4'>Our Reminder system as well as Google Calendar event notification feature to know when to follow up with your prospects & Enhanced reporting system to organize & track your conversations will help you stay updated & connected which results in Closing More Deals.</h4>
                        <button className='rounded-pill border border-primary text-primary py-2 mt-3 d-flex justify-content-initial px-3' style={{ fontWeight: "bold" }}>GET STARTED NOW</button>
                    </div>
                </div>
            </div>

            {/* MasterClass */}
            <div >
                <img src={Image4} alt="" style={{ width: "80%", filter: "contrast(120%)" }} className='rounded-3 mt-5' />
            </div>

            {/* Test */}
            <Test />

            <button className='rounded-pill border-primary text-primary py-2 px-5 my-4 font-weight-bold'>SEE MORE</button>


            {/* Get started */}
            <div >
                <img src={Image5} alt="" style={{ width: "80%", filter: "contrast(120%)" }} className='rounded py-5' />
            </div>

        </div >
    );
};

export default Home;
