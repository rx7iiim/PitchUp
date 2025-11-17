type JuryMember = {
  name: string;
  role: string;
};

export default function Jury() {
  const juryMembers: JuryMember[] = [
    { name: "Mammasse Amine", role: "Jury Member" },
    { name: "Ourari Kahina", role: "Jury Member" },
    { name: "Daoudi Maroua", role: "Jury Member" },
    { name: "Azazga Imene", role: "Jury Member" },
    { name: "Baghdi Amina", role: "Jury Member" },
    { name: "Chandouh Rabah", role: "Jury Member" },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            <span className="text-teal-600">Jury </span>
            <span className="text-gray-900">Members </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-orange-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Jury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {juryMembers.map((member) => (
            <JuryMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-3">
          <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
          <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
          <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}

// Type the props
type JuryMemberCardProps = {
  name: string;
  role: string;
};

// Reusable Jury Card Component
function JuryMemberCard({ name, role }: JuryMemberCardProps) {
  // Generate initials: first letter of first + last word
  const getInitials = (fullName: string) => {
    const words = fullName.split(" ").filter(Boolean);
    if (words.length === 0) return "";
    if (words.length === 1) return words[0][0].toUpperCase();
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 md:p-8">
      <div className="flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-600 to-teal-400 flex items-center justify-center shadow-md mb-4">
          <span className="text-white text-2xl md:text-3xl font-bold">
            {initials}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>

        {/* Role */}
        <p className="text-teal-600 font-medium text-sm mt-1">{role}</p>

        {/* Decorative line */}
        <div className="w-12 h-0.5 bg-orange-400 rounded-full mt-4"></div>
      </div>
    </div>
  );
}
