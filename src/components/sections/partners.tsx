"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Partners() {
    return (
        <section id="partners" className="pt-8 pb-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-15"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-[0.1em] uppercase">
                        <span className="text-neon-cyan">Partners</span>
                    </h2>
                </motion.div>

                <div className="flex justify-center flex-wrap gap-8">
                    {/* IBW Partner */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="relative bg-zinc-900/50 border border-white/10 rounded-xl p-8 hover:border-neon-cyan/50 transition-all duration-300 w-64 h-64 flex flex-col items-center justify-center backdrop-blur-sm">
                            <div className="relative w-40 h-40 mb-4">
                                <Image
                                    src="/images/partners/IBW%202026.png"
                                    alt="IBW"
                                    fill
                                    className="object-contain transition-all duration-300"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                IBW
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
