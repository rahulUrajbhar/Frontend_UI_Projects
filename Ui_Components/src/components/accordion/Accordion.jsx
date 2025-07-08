"use client";
import React, { useState } from "react";
import "./accordion.css";
import faqs from "./DummyAccordionData";
const Accordion = () => {
  const [openId, setOpenId] = useState(null);
  function Change(id) {
    setOpenId((openId) => (openId === id ? "" : id));
  }
  return (
    <div className="faqContainer">
      {faqs.map((faq) => {
        return (
          <div key={faq.id} className="accordionList">
            <div className="accordionHeader">
              <span>{faq.question}</span>
              <span className="accordionIcon" onClick={() => Change(faq.id)}>
                {openId ? "-" : "+"}
              </span>
            </div>
            {openId === faq.id && <div className="accordionDiscription">{faq.answer}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
