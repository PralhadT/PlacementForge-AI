import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { q: "Is this platform suitable for beginners?", a: "Absolutely! Our AI generates personalized roadmaps starting from the absolute basics of programming up to advanced DSA." },
    { q: "How accurate is the AI Resume Analyzer?", a: "Our AI is trained on thousands of successful resumes and uses the same ATS logic that top tech companies use to filter candidates." },
    { q: "Do you offer company-specific preparation?", a: "Yes, we have curated mock interviews and question banks for top MNCs like Amazon, Google, Microsoft, and leading Indian startups." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section style={{ padding: '80px 0', maxWidth: '800px', margin: '0 auto' }}>
      <div className="container">
        <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>Frequently Asked <span className="text-gradient">Questions</span></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass" 
              style={{ padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontWeight: '600' }}>{faq.q}</h4>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              {openIndex === i && (
                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
