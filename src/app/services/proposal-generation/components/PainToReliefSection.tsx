import React from "react";
import { Clock, ClockIcon } from "lucide-react";

const PainToReliefSection = () => (
  <section className="flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-br from-fog via-white to-fog p-8 shadow-md md:flex-row">
    <div className="flex-1">
      <p className="text-lg text-black/80">
      Writing a proposal can take hours — not just in formatting, but
        thinking, rewording, second-guessing. Multiply that by every client, and
        you're bleeding time you could spend closing.
      </p>
    </div>
    <div className="flex flex-shrink-0 items-center justify-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-yellow shadow-lg">
        <ClockIcon className="h-12 w-12 text-maroon" />
      </span>
    </div>
  </section>
);

export default PainToReliefSection;
