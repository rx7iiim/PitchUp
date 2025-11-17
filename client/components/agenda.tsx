"use client";

export default function Agenda() {
  const agendaItems = [
    {
      day: "Thursday, Nov 20",
      time: "7:00 PM",
      event: "Check-In",
      description: "Participants arrive, complete check-in, and get settled.",
    },
    {
      day: "Thursday, Nov 20",
      time: "7:30 PM",
      event: "Opening Ceremony",
      description:
        "Welcome speech, event overview, and hackathon kickoff vibes!",
    },
    {
      day: "Thursday, Nov 20",
      time: "8:00 PM",
      event: "Hackathon Start",
      description:
        "The hacking officially begins. Form teams and start building!",
    },
    {
      day: "Friday, Nov 21",
      time: "2:00 AM",
      event: "Snack + Fun Break",
      description:
        "Light snacks and fun activities to refresh participants during the night.",
    },
    {
      day: "Friday, Nov 21",
      time: "8:00 AM",
      event: "Breakfast",
      description:
        "Start the morning with a good meal to keep the energy high.",
    },
    {
      day: "Friday, Nov 21",
      time: "11:30 AM",
      event: "Lunch",
      description: "Midday meal to keep participants fueled and focused.",
    },
    {
      day: "Friday, Nov 21",
      time: "12:15 PM",
      event: "Prayer Time",
      description: "Break for Jumouah prayer.",
    },
    {
      day: "Friday, Nov 21",
      time: "4:00 PM",
      event: "Fun Activities",
      description:
        "Relax and enjoy mini-games, team activities, and creative breaks.",
    },
    {
      day: "Friday, Nov 21",
      time: "8:00 PM",
      event: "Dinner",
      description:
        "End the day with a hearty dinner before continuing the hack.",
    },
    {
      day: "Saturday, Nov 22",
      time: "2:00 AM",
      event: "Snacks + Fun Break",
      description:
        "Night break with snacks and engaging activities to maintain momentum.",
    },
    {
      day: "Saturday, Nov 22",
      time: "8:00 AM",
      event: "Breakfast",
      description:
        "Morning meal to keep participants energized for the final sprint.",
    },
    {
      day: "Saturday, Nov 22",
      time: "10:00 AM",
      event: "Submissions & Presentations",
      description:
        "Teams submit their final projects and start presenting to the jury.",
    },
    {
      day: "Saturday, Nov 22",
      time: "12:00 PM",
      event: "Closing Ceremony",
      description:
        "Awards, acknowledgments, and closing remarks to wrap up the event.",
    },
  ];
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Hackathon Agenda
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {agendaItems.map((item, index) => (
            <div key={index} className="flex gap-6 md:gap-10">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-teal-600 rounded-full border-4 border-white shadow-md z-10"></div>
                {index !== agendaItems.length - 1 && (
                  <div className="w-1 h-24 bg-gradient-to-b from-teal-600 to-transparent mt-4"></div>
                )}
              </div>

              <div className="pb-8">
                <p className="text-sm font-semibold text-orange-400 uppercase tracking-wider">
                  {item.day}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {item.time}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
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
