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
        answer: "The wedding will take place on 22ND December at 9 A.M prompt. Please arrive at least 30 minutes early to find your seat and get settled.",
    },
    {
        question: "Where is the wedding venue located?",
        answer: "The wedding will be held at Shamsuddin Adisa Thomas (SAT), Central Mosque Opposite Police College GRA Ikeja Lagos. You can find directions on the map here:"
    },
    {
        question: "Is there a dress code?",
        answer: "Yes, the dress code is, for the pride family, wine and silver while for the groom family, white and emerald green. Please feel free to dress comfortably while still keeping in mind the theme of the event.",
    },
    {
        question: "Can I bring a plus-one?",
        answer: "You are welcome to bring a guest.",
    },
    {
      question: "Will there be parking available at the venue?",
      answer: "Yes, parking is available at the venue. There will be signs directing you to the designated parking area.",
  },
  {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer: "The haqdul  will be held in the masjid, and the reception follows in the same venue [hall]",
  },
  {
    question: "Can I take photos during the ceremony?",
    answer: "We kindly request that guests refrain from taking photos during the ceremony.",
},
{
    question: "How can I RSVP?",
    answer: "You can RSVP by visiting the website https://ubaydahandmasud.vercel.app/.",
},
{
    question: "What time does the reception end?",
    answer: "The reception is expected to end at Asr time. However, feel free to stay and continue celebrating with us if the party continues!",
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
