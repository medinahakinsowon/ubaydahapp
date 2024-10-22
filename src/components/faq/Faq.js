import React, { useState } from 'react';
import MasjidImage from '../../assets/masjid.png'
import './Faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // const faqs = [
  //   { question: 'What is the wedding date?', answer: 'The wedding is on November 20, 2024.' },
  //   { question: 'Where is the venue?', answer: 'The wedding will be held at Sunset Beach Resort.' },
  //   { question: 'Can I bring a guest?', answer: 'Yes, please indicate your guest when you RSVP.' },
  // ];
  const faqs = [
    {
        question: "What is the date and time of the wedding?",
        answer: "The wedding will take place on 22ND December at 8 A.M prompt. Please arrive at least 30 minutes early to find your seat and get settled.",
    },
    {
        question: "Where is the wedding venue located?",
        answer: "The wedding will be held at Shamsi Adisa Thomas . You can find directions on the map here: [Insert Google Maps Link].",
    },
    {
        question: "Is there a dress code?",
        answer: "Yes, the dress code is [Formal/Semi-Formal/Casual/etc.]. Please feel free to dress comfortably while still keeping in mind the theme of the event.",
    },
    {
        question: "Can I bring a plus-one?",
        answer: "If your invitation includes a plus-one, you are welcome to bring a guest. If you are unsure, please contact us to confirm.",
    },
    {
      question: "Will there be parking available at the venue?",
      answer: "Yes, parking is available at the venue. There will be signs directing you to the designated parking area. We recommend carpooling if possible.",
  },
  {
      question: "Are children allowed at the wedding?",
      answer: "[Yes/No]. We would love to see everyone, but we kindly ask that you leave the little ones at home for this event. If you have any questions, please let us know.",
  },
  {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer: "The ceremony will be held [indoors/outdoors], and the reception will follow [indoors/outdoors]. Please dress accordingly for the weather.",
  },
  {
      question: "What should I do if I have dietary restrictions?",
      answer: "Please let us know about any dietary restrictions or allergies when you RSVP. We will do our best to accommodate your needs.",
  },
  {
      question: "Are there accommodations nearby?",
      answer: "Yes, there are several hotels nearby. We recommend [Hotel Name 1] and [Hotel Name 2] for convenient accommodations. Be sure to book early to secure your room.",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer: "We kindly request that guests refrain from taking photos during the ceremony. Our photographer will capture the moments, and we will share the pictures with you later. However, feel free to take photos during the reception.",
},
{
    question: "How can I RSVP?",
    answer: "You can RSVP by [visiting our website/calling/texting/emailing]. Please make sure to respond by [RSVP Deadline Date].",
},
{
    question: "What time does the reception end?",
    answer: "The reception is expected to end at [End Time]. However, feel free to stay and continue celebrating with us if the party continues!",
},
];

  return (
    <div className='faq-main'>
      <div>
        <img src={MasjidImage} />
      </div>
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">{faq.question}</div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQ;
