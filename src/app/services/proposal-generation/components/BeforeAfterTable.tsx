import React from 'react';

const BeforeAfterTable = () => (
  <section>
    <h3 className="font-semibold mb-4">Before and After Snapshot</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 font-medium">Before</th>
            <th className="py-2 px-4 font-medium">After</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Time spent per proposal<br />1–2 hours</td>
            <td className="py-2 px-4">5–10 minutes</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4">Response speed<br />Slow & inconsistent</td>
            <td className="py-2 px-4">Fast, professional, consistent</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Follow-ups<br />Manual or forgotten</td>
            <td className="py-2 px-4">Automated + personalized</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="py-2 px-4">Team dependency<br />Founder-led</td>
            <td className="py-2 px-4">Can run without you</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default BeforeAfterTable; 