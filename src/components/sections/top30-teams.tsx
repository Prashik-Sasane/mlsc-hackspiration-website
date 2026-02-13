"use client"

import { motion } from "framer-motion"
import Celebration from "@/components/ui/celebration"

export function Top30Teams() {

  const teams = [
    { track: "Track 1", name: "arjun.1251030190"},
    { track: "Track 1", name: "Algoholics"},
    { track: "Track 1", name: "Nexus"},
    { track: "Track 1", name: "Algotop"},
    { track: "Track 1", name: "AlgoPookies"},
    { track: "Track 1", name: "Team Xion"},
    { track: "Track 1", name: "ben_10"},
    { track: "Track 1", name: "Team DUO++"},
    { track: "Track 1", name: "virajpisal99"},
    { track: "Track 1", name: "timelimitExceeded"},
    { track: "Track 1", name: "Pirates"},
    { track: "Track 1", name: "shreya.tiwari"},
    { track: "Track 1", name: "Amateur"},
    { track: "Track 1", name: "Supe"},
    { track: "Track 1", name: "FourBlocks"},

    { track: "Track 2", name: "purvaw06" },
    { track: "Track 2", name: "NeuralTrust",},
    { track: "Track 2", name: "NyanCoders"},
    { track: "Track 2", name: "Blackbox" },
    { track: "Track 2", name: "Alpha Hackers"},
    { track: "Track 2", name: "shivani.kinagi"},
    { track: "Track 2", name: "Team Diamonds"},
    { track: "Track 2", name: "shashankkakad10"},
    { track: "Track 2", name: "Code Blooded"},
    { track: "Track 2", name: "suhail17mohammad"},
    { track: "Track 2", name: "adhirajp76",},
    { track: "Track 2", name: "Bits" },
    { track: "Track 2", name: "iadityapatil27" },
    { track: "Track 2", name: "IdenPro" },
    { track: "Track 2", name: "Jai Data Di" },
  ]

  return (
    <div className="container mx-auto px-4">
      <Celebration />

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
                  <th className="px-6 py-4">Sr No</th>
                  <th className="px-6 py-4">Track</th>
                  <th className="px-6 py-4">Team Name</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {teams.map((team, index) => (
                  <tr key={index} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-white font-mono">
                      {index + 1}
                    </td>

                    <td className="px-6 py-4 text-cyan-400 font-semibold">
                      {team.track}
                    </td>

                    <td className="px-6 py-4 text-zinc-300">
                      {team.name}
                    </td>
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
