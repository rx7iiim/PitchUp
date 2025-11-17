"use client";

export default function Agenda() {
  const agendaItems = [
    {
      day: "Friday, Nov 20",
      time: "6:00 PM",
      event: "Opening Ceremony & Team Gathering",
      description:
        "Meet fellow participants, learn about the challenges, and kick off the hackathon!",
    },
    {
      day: "Friday, Nov 20",
      time: "7:00 PM",
      event: "Hacking Begins",
      description:
        "Your 24-hour coding sprint starts now. Let the creativity flow!",
    },
    {
      day: "Saturday, Nov 21",
      time: "12:00 PM",
      event: "Lunch Break & Mentorship",
      description: "Recharge with food and connect with industry mentors",
    },
    {
      day: "Sunday, Nov 22",
      time: "2:00 PM",
      event: "Final Submissions",
      description: "Submit your project and prepare for presentations",
    },
    {
      day: "Sunday, Nov 22",
      time: "4:00 PM",
      event: "Presentations & Awards",
      description: "Showcase your work and discover the winners!",
    },
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-navy mb-4">
            Hackathon Agenda
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-warm-peach to-teal mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex gap-6 md:gap-10">
              {/* Timeline dot and line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-teal rounded-full border-4 border-white shadow-md z-10"></div>
                {index !== agendaItems.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-teal to-transparent mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <p className="text-sm font-semibold text-warm-peach uppercase tracking-wider">
                  {item.day}
                </p>
                <p className="text-2xl font-bold text-navy mb-2">{item.time}</p>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {item.event}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
