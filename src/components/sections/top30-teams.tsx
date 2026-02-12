"use client"

import { motion } from "framer-motion"

export function Top30Teams() {
  const teams = Array.from({ length: 30 }, (_, i) => ({
    srNo: i + 1,
  }))

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-10">
          <span className="text-neon-cyan">Top 30 Teams – Round 1</span>
        </h1>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/30 backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-zinc-400 uppercase font-mono tracking-wider">
                <tr>
                  <th className="px-6 py-4">Sr. No.</th>
                  <th className="px-6 py-4">Team Name</th>
                  <th className="px-6 py-4">College Name</th>
                  <th className="px-6 py-4">Team Leader</th>
                  <th className="px-6 py-4">Score</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {teams.map((team) => (
                  <tr key={team.srNo} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-white font-mono">{team.srNo}</td>
                    <td className="px-6 py-4 text-zinc-400"></td>
                    <td className="px-6 py-4 text-zinc-400"></td>
                    <td className="px-6 py-4 text-zinc-400"></td>
                    <td className="px-6 py-4 text-zinc-400"></td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
