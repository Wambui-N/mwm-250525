import React from 'react';

const AutomationBulletsSection = () => (
  <section className="relative flex flex-col md:flex-row gap-8 items-stretch my-8">
    {/* Pain Card */}
    <div className="flex-1 bg-maroon/90 rounded-2xl shadow-lg p-8 text-white flex flex-col justify-between">
      <h3 className="font-semibold mb-4 text-xl">Here's what you'll never have to do again:</h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-3"><span className="text-2xl">❌</span>Manually rewrite proposals for each client</li>
        <li className="flex items-center gap-3"><span className="text-2xl">❌</span>Copy-paste info from emails and forms</li>
        <li className="flex items-center gap-3"><span className="text-2xl">❌</span>Forget to follow up on pending proposals</li>
        <li className="flex items-center gap-3"><span className="text-2xl">❌</span>Spend hours perfecting the wording</li>
      </ul>
    </div>
    {/* Wave Divider */}
    <div className="hidden md:block w-8 flex-shrink-0 relative">
      <svg viewBox="0 0 32 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-full w-full">
        <path d="M16 0C24 40 8 120 16 160" stroke="#ffab6e" strokeWidth="4" fill="none" />
      </svg>
    </div>
    {/* Relief Card */}
    <div className="flex-1 bg-yellow/90 rounded-2xl shadow-lg p-8 text-black flex flex-col justify-between">
      <h3 className="font-semibold mb-4 text-xl text-maroon">Here's what I automate for you:</h3>
      <ul className="space-y-4">
        <li className="flex items-center gap-3"><span className="text-2xl">✅</span>A form or CRM trigger to kickstart the process</li>
        <li className="flex items-center gap-3"><span className="text-2xl">✅</span>Proposal generation using your brand-approved templates</li>
        <li className="flex items-center gap-3"><span className="text-2xl">✅</span>Auto-saving to Google Docs or PDF</li>
        <li className="flex items-center gap-3"><span className="text-2xl">✅</span>Auto-email with a ready-to-send draft (with optional human review step)</li>
        <li className="flex items-center gap-3"><span className="text-2xl">✅</span>Follow-up sequence if there's no reply</li>
      </ul>
    </div>
  </section>
);

export default AutomationBulletsSection; 