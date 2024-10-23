import React, { useState } from "react";
import MasjidImage from "../../assets/masjid.png";
import "./Faq.css";

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
      answer:
        "The wedding will take place on 22ND December at 9 A.M prompt. Please arrive at least 30 minutes early to find your seat and get settled.",
    },
    {
      question: "Where is the wedding venue located?",
      answer:
        "The wedding will be held at Shamsuddin Adisa Thomas (SAT), Central Mosque Opposite Police College GRA Ikeja Lagos. You can find directions on the map here:",
    },
    {
      question: "Is there a dress code?",
      answer:
        "Yes, the dress code; for the bride family, wine senator material (call: 08030742177) and silver lace (call: 08028110534) and also an ankara (call: 08035640502) while for the groom family, white and emerald green (call: 08033476988). Please feel free to dress comfortably while still keeping in mind the theme of the event.",
    },
    {
      question: "Can I bring a plus-one?",
      answer: "You are welcome to bring a guest.",
    },
    {
      question: "Will there be parking available at the venue?",
      answer:
        "Yes, parking is available at the venue. There will be signs directing you to the designated parking area.",
    },
    {
      question: "Will the ceremony and reception be indoors or outdoors?",
      answer:
        "The haqdul  will be held in the masjid, and the reception follows in the Hall at the same venue",
    },
    {
      question: "Can I take photos during the ceremony?",
      answer:
        "We kindly request that guests refrain from taking photos during the ceremony.",
    },
    {
      question: "How can I RSVP?",
      answer:
        "You can RSVP by filling the guest form (RSVP) on the website https://ubaydahandmasud.vercel.app/.",
    },
    {
      question: "What time does the reception end?",
      answer:
        "The reception is expected to end at Asr time. However, feel free to stay and continue celebrating with us if the party continues!",
    },
  ];

  return (
    <div className="faq-main">
      <div>
        <img src={MasjidImage} />
      </div>
      <div className="map-responsive">
        <h2 style={{ textAlign: 'center'}}>Location Map</h2>
      <div >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15853.937397560394!2d3.3463612!3d6.5865563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9218f181ff8f%3A0x588e4dbc2708d130!2sSHAMSI%20ADISA%20THOMAS%20(SAT)%20MOSQUE!5e0!3m2!1sen!2sng!4v1729613452339!5m2!1sen!2sng"
          width="400"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Responsive Google Map"
        >    
        </iframe>
      </div>
      </div>
      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
