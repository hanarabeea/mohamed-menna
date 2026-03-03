"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/love-story1.jpg',
  '/love-story2.jpg',
]

export default function LoveStoryGallery() {
  return (
    <section
      className="relative py-12 px-4 sm:px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent overflow-visible"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Two centered circular frames */}
        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap">
          {images.map((src, index) => {
            const delay = index * 0.5

            return (
              <motion.div
                key={index}
                className="relative flex-shrink-0"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                animate={{
                  rotate: [
                    0,
                    20,
                    -20,
                    20,
                    -20,
                    0,
                  ],
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  scale: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  },
                  rotate: {
                    duration: 12 + (index * 1.5),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay,
                  },
                }}
              >
                {/* Circular Frame */}
                <motion.div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-accent/50 bg-gradient-to-br from-accent/30 to-accent/10"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    clipPath: 'circle(50% at 50% 50%)',
                  }}
                >
                  <Image
                    src={src}
                    alt={`Love story moment ${index + 1}`}
                    fill
                    className="object-cover"
                    style={index === 0 ? { objectPosition: 'center top' } : undefined}
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  />

                  {/* Decorative inner ring */}
                  <div className="absolute inset-0 rounded-full border-2 md:border-4 border-white/40 pointer-events-none" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
