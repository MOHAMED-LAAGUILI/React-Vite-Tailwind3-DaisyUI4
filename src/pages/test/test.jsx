import { useEffect, useState } from "react";

export default function Test() {
  const [remaining, setRemaining] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 59,
  });

  // Example countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          clearInterval(interval); // Stop countdown
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {[
        { label: "days", value: remaining.days },
        { label: "hours", value: remaining.hours },
        { label: "min", value: remaining.minutes },
        { label: "sec", value: remaining.seconds },
      ].map((item, index) => (
        <div key={index} className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span
              style={{ "--value": item.value } }
              aria-live="polite"
              aria-label={`${item.value} ${item.label}`}
            >
              {item.value}
            </span>
          </span>
          {item.label}
        </div>
      ))}
    </div>

<br /><br />
    <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
    </div>
  );
};
