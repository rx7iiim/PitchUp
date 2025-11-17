"use client";

import { useState } from "react";

import { createClient } from "@/lib/supbase/client";

export default function SignupForm() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" },
  ]);
  const [teamName, setTeamName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMemberChange = (
    index: number,
    field: "name" | "email",
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate at least team name and one member
    if (!teamName || !teamMembers[0].name || !teamMembers[0].email) {
      setError(
        "Please fill in team name and at least the team lead information"
      );
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const supabase = createClient();

      // Insert team
      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .insert([{ team_name: teamName }])
        .select();

      if (teamError) throw teamError;
      if (!teamData || teamData.length === 0)
        throw new Error("Failed to create team");

      const teamId = teamData[0].id;

      // Insert team members (only those with names)
      const membersToInsert = teamMembers
        .map((member, index) => ({
          team_id: teamId,
          name: member.name,
          email: member.email,
          member_number: index + 1,
        }))
        .filter((member) => member.name && member.email);

      if (membersToInsert.length === 0) {
        throw new Error("At least one team member is required");
      }

      const { error: membersError } = await supabase
        .from("team_members")
        .insert(membersToInsert);

      if (membersError) throw membersError;

      // Show success message
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      // Reset form
      setTeamName("");
      setTeamMembers([
        { name: "", email: "" },
        { name: "", email: "" },
        { name: "", email: "" },
        { name: "", email: "" },
      ]);
    } catch (err) {
      console.error("[v0] Registration error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Failed to register team. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-light-cyan via-white to-cream px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-navy mb-4">
            Join the Hackathon
          </h2>
          <p className="text-lg text-gray-600">
            Register your team (1-4 members)
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal to-warm-peach mx-auto rounded-full mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Team Name */}
          <div>
            <label className="block text-lg font-semibold text-navy mb-3">
              Team Name *
            </label>
            <input
              type="text"
              placeholder="Enter your awesome team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal focus:outline-none text-base"
              required
              disabled={isLoading}
            />
          </div>

          {/* Team Members */}
          <div>
            <h3 className="text-lg font-semibold text-navy mb-6">
              Team Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border-2 border-gray-100 hover:border-teal transition-colors shadow-sm"
                >
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-500 font-semibold">
                        {index === 0 ? "Team Lead *" : "Member (Optional)"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-teal focus:outline-none"
                        required={index === 0}
                        disabled={isLoading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={member.email}
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-teal focus:outline-none"
                        required={index === 0}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-semibold">
              ✗ {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-teal hover:bg-teal-dark text-white font-bold py-4 rounded-full text-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Registering Team..." : "Register Team"}
            </button>
            {submitted && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center font-semibold">
                ✓ Team registered successfully! We'll contact you soon.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
