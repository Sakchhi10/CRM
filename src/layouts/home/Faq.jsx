import React, { useState } from 'react';

import {Accordion, Typography, AccordionSummary,  Button, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';  // Use 'styled' from '@mui/system' instead of 'makeStyles'
import Img1 from "../../../public/assets/home/faq1.png";
import Img2 from "../../../public/assets/home/faq2.png";
import Img3 from "../../../public/assets/home/faq3.png";

// Define a styled component for Accordion
const CustomAccordion = styled(Accordion)({
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  marginBottom: '80px',
});

const useStyles = {
  button: {
    marginTop: '10px',
    fontWeight: 'bold',
  },
};

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: 'Protect Your Deliverability with Email Validation and Bulk Domain Testing',
      answer: 'Clean & verify your lead lists and ensure your domains are correctly set up for cold emailing. Our one-click bulk domain tester lets you know if your domain is missing important records.',
      image: Img1,
    },
    {
      question: 'Automate and Personalise Emails with Campaign Builder & Integrations ',
      answer: 'Our Campaign Builder lets you use variables, sequences and smart scheduling to maximise your deliverability and response rates.',
      image: Img2,
    },
    {
      question: 'Save Time with Inbox Rotation',
      answer: 'Instead of having separate campaigns for each of your sending accounts you can add all your sending accounts to one campaign.',
      image: Img3,
    },
  ];

  return (
    <div className='mb-4 mt-5' style={{ display: 'flex', justifyContent: 'center',textAlign:"initial" }}>
      <div style={{ maxWidth: '1100px', width: '100%' }}>
        {faqData.map((faq, index) => (
          <CustomAccordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleAccordionChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
              <Typography variant="h4">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div style={{ display: 'flex', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <Typography className='text-start mt-4' style={{ fontSize: "30px" }}>
                    {faq.answer}
                  </Typography>
                  <Button variant="contained" color="primary" sx={useStyles.button} className='d-flex justify-content-initial mt-5 rounded-pill py-2 px-4' href="">
                    Start for Free
                  </Button>
                </div>
                {faq.image && (
                  <div style={{ marginLeft: '20px' }}>
                    <img src={faq.image} alt={`Image for ${faq.question}`} style={{ maxWidth: '100%', height: 'auto' }} className='mt-4' />
                  </div>
                )}
              </div>
            </AccordionDetails>
          </CustomAccordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;
