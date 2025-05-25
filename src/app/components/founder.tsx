import React from "react";

const Founder = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-white">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 border border-black/10">
        <div className="flex-shrink-0">
          {/* Replace src with actual founder photo if available */}
          <img src="/founder-placeholder.jpg" alt="Founder" className="w-28 h-28 rounded-full object-cover border-4 border-black/10 shadow" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-black mb-1">Alex Johnson</h2>
          <div className="text-black/60 font-medium mb-3">Founder & Automation Architect</div>
          <p className="text-black/70 mb-4">Alex has spent a decade helping B2B teams automate their most time-consuming work. Passionate about building systems that let founders scale without burnout, Alex brings a blend of technical expertise and business insight to every project.</p>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-black text-white font-medium hover:bg-black/90 transition-colors">
            Connect on LinkedIn
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v10.5A2.25 2.25 0 009.75 19.5h4.5a2.25 2.25 0 002.25-2.25v-1.5m-6-7.5h.008v.008H10.5V6.75zm0 3.75v6.75m3-6.75v6.75" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Founder; 