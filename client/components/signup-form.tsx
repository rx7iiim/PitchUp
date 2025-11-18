"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/client";

export default function SignupForm() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "", email: "", github: "", linkedin: "", motivation: "" },
    { name: "", email: "", github: "", linkedin: "", motivation: "" },
    { name: "", email: "", github: "", linkedin: "", motivation: "" },
    { name: "", email: "", github: "", linkedin: "", motivation: "" },
    { name: "", email: "", github: "", linkedin: "", motivation: "" },
  ]);
  const [teamName, setTeamName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [rateLimitRemaining, setRateLimitRemaining] = useState(0);

  useEffect(() => {
    const lastSubmitTime = localStorage.getItem("pitchup_last_submit");
    if (lastSubmitTime) {
      const elapsed = Date.now() - parseInt(lastSubmitTime);
      const remainingMs = 60000 - elapsed; // 60 second cooldown
      if (remainingMs > 0) {
        setRateLimitRemaining(Math.ceil(remainingMs / 1000));
      }
    }
  }, []);

  useEffect(() => {
    if (rateLimitRemaining > 0) {
      const timer = setTimeout(() => {
        setRateLimitRemaining(rateLimitRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [rateLimitRemaining]);

  const handleMemberChange = (
    index: number,
    field: "name" | "email" | "github" | "linkedin" | "motivation",
    value: string
  ) => {
    const updated = [...teamMembers];
    updated[index][field] = value;
    setTeamMembers(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rateLimitRemaining > 0) {
      setError(
        `Please wait ${rateLimitRemaining} seconds before submitting again`
      );
      return;
    }

    const filledMembers = teamMembers.filter((m) => m.name && m.email);
    if (!teamName) {
      setError("Please fill in team name");
      return;
    }
    if (filledMembers.length < 3) {
      setError("Please fill in at least 3 team members");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const supabase = createClient();

      const { data: teamData, error: teamError } = await supabase
        .from("teams")
        .insert([{ team_name: teamName }])
        .select();

      if (teamError) throw teamError;
      if (!teamData || teamData.length === 0)
        throw new Error("Failed to create team");

      const teamId = teamData[0].id;

      const membersToInsert = teamMembers
        .map((member, index) => ({
          team_id: teamId,
          name: member.name,
          email: member.email,
          github: member.github || null,
          linkedin: member.linkedin || null,
          motivation: member.motivation || null,
          member_number: index + 1,
        }))
        .filter((member) => member.name && member.email);

      if (membersToInsert.length < 3) {
        throw new Error("At least 3 team members are required");
      }

      const { error: membersError } = await supabase
        .from("team_members")
        .insert(membersToInsert);

      if (membersError) throw membersError;

      localStorage.setItem("pitchup_last_submit", Date.now().toString());
      setRateLimitRemaining(60);

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);

      setTeamName("");
      setTeamMembers([
        { name: "", email: "", github: "", linkedin: "", motivation: "" },
        { name: "", email: "", github: "", linkedin: "", motivation: "" },
        { name: "", email: "", github: "", linkedin: "", motivation: "" },
        { name: "", email: "", github: "", linkedin: "", motivation: "" },
        { name: "", email: "", github: "", linkedin: "", motivation: "" },
      ]);
    } catch (err) {
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
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-white to-orange-50 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Join the Hackathon
          </h2>
          <p className="text-lg text-gray-600">
            Register your team (minimum 3 members, maximum 5)
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-teal-600 to-orange-400 mx-auto rounded-full mt-4"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-3">
              Team Name *
            </label>
            <input
              type="text"
              placeholder="Enter your awesome team name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={isLoading || rateLimitRemaining > 0}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Team Members (Minimum 3 Required)
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-teal-600 transition-colors shadow-sm"
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-sm text-gray-500 font-semibold">
                        {index < 3 ? "Team Member *" : "Member (Optional)"}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={member.name}
                        onChange={(e) =>
                          handleMemberChange(index, "name", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        required={index < 3}
                        disabled={isLoading || rateLimitRemaining > 0}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email@example.com"
                        value={member.email}
                        onChange={(e) =>
                          handleMemberChange(index, "email", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        required={index < 3}
                        disabled={isLoading || rateLimitRemaining > 0}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        GitHub
                      </label>
                      <input
                        type="text"
                        placeholder="github.com/username"
                        value={member.github}
                        onChange={(e) =>
                          handleMemberChange(index, "github", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading || rateLimitRemaining > 0}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        placeholder="linkedin.com/in/username"
                        value={member.linkedin}
                        onChange={(e) =>
                          handleMemberChange(index, "linkedin", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoading || rateLimitRemaining > 0}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Motivation (Optional)
                      </label>
                      <textarea
                        placeholder="Tell us why you want to participate..."
                        value={member.motivation}
                        onChange={(e) =>
                          handleMemberChange(
                            index,
                            "motivation",
                            e.target.value
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100 disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                        rows={3}
                        disabled={isLoading || rateLimitRemaining > 0}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-semibold">
              ✗ {error}
            </div>
          )}

          <div className="pt-6">
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-full text-lg transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || rateLimitRemaining > 0}
            >
              {rateLimitRemaining > 0
                ? `Please wait ${rateLimitRemaining}s before submitting again`
                : isLoading
                ? "Registering Team..."
                : "Register Team"}
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
