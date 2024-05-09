import React from "react";
import Slider from "react-slick";

import {
  Card,
  Container,
  CardMedia,
  Typography,
  Box,
  
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = [
  {
    id: 1,
    image: "https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/63f36b11c05007caa49ff085_channels4_profile-p-500.jpeg",
    // alt: "Test1",
    text: "Email outreach is one of the most effective ways to expand your business and gain new business. Instantly does this well; you can add unlimited email accounts and just does all the basics in the right way!",
    author: "Alex Siderius",
    title: "CEO at Webaware",
  },
  {
    id: 2,
    image: "https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/638a1d59e54de90988d5d548_Mask%20group-min-p-500.png",
    // alt: "Test1",
    text: "“I’ve specialised in cold email marketing since 2018 and in this time I've used almost every popular cold-emailing tool available on the market today - Instantly is hands down my favourite of them all.”",
    author: "Sam Wilson",
    title:"Managing Director of Canbury Partners",
  },
  {
    id: 3,
    image: "https://assets-global.website-files.com/63860c8c65e7bef4a1eeebeb/63eb75f14ee4632dcd84d969_61fd8187b161ba3820af635c_Tony_compressed-p-500-p-500.jpeg",
    // alt: "Test1",
    text: "“Instantly is the exact email outreach solution that I always wish existed. We’ve tried almost every product that people in the outbound space talks about and none of them even comes close to this.”",
    author: "Tony Liu",
    title:"CEO at Omnichannel",
  },
  
];

const CustomPrevArrow = (props) => (
    <Box {...props} style={{ display: "block", position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 1, cursor: "pointer", color: "#0000FF" }}>
      <KeyboardArrowLeft fontSize="large" />
    </Box>
  );
  
  const CustomNextArrow = (props) => (
    <Box {...props} style={{ display: "block", position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", zIndex: 1, cursor: "pointer", color: "#0000FF" }}>
      <KeyboardArrowRight fontSize="large" />
    </Box>
  );
  
  const Testimonials = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      nextArrow: <CustomNextArrow />,
      prevArrow: <CustomPrevArrow />,
    };
  
    return (
      <Container sx={{ my: 5, padding: "6px" }}>
        <div className="text-center mb-2"></div>
        <Slider {...settings}>
          {Slides?.map((slide, index) => (
            <Box key={index.toString()} width="100%">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "row" },
                  justifyContent: "center",
                  alignItems: "center",
                  margin: 4,
                  padding: "50px",  // Increase padding for larger card
                  borderRadius: "20px",  // Increase border-radius for rounded corners
                  // boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
                width="100%"
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: "100%", md: "1500px" },  // Increase width for larger image
                    borderRadius: "10%",  // Make the image more circular
                    overflow: "hidden",
                  }}
                  image={slide.image}
                  alt={slide.alt}
                />
                <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", margin: "20px" }}>
                  <Typography variant="body1" sx={{ textAlign: "justify", fontSize: "1.5rem", color: "#555" }}>
                    <img
                      src="https://banner2.cleanpng.com/20180421/kcw/kisspng-quotation-mark-computer-icons-double-quotes-5adb16475088e0.9420521815243075273299.jpg"
                      alt="quote"
                      style={{ width: "1.5rem", marginRight: "5px", marginLeft: "5px"}}
                    />
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: "justify", fontSize: "1.5rem", color: "#555" }}>
                    {slide.text}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold", color: "grey", marginTop: 8,textAlign:"initial"}}>
                    {slide.author}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: "bold", color: "grey", marginTop: 1,textAlign:"initial"}}>
                    {slide.title}
                  </Typography>
                </div>
              </Card>
            </Box>
          ))}
        </Slider>
      </Container>
    );
  };
  
  export default Testimonials;