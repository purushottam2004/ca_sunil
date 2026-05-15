import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, FileCheck, Award } from 'lucide-react'

const stats = [
  { icon: Users,        value: 500,  suffix: '+', label: 'Clients Served',     color: 'blue'   },
  { icon: GraduationCap, value: 200, suffix: '+', label: 'Students Trained',   color: 'green'  },
  { icon: FileCheck,    value: 1000, suffix: '+', label: 'Returns Filed',       color: 'gold'   },
  { icon: Award,        value: 10,   suffix: '+', label: 'Years of Experience', color: 'purple' },
]

const colors = {
  blue:   'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  green:  'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  gold:   'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
}

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1500
          const steps = 60
          const increment = value / steps
          const interval = setInterval(() => {
            start += increment
            if (start >= value) {
              setCount(value)
              clearInterval(interval)
            } else {
              setCount(Math.floor(start))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-brand-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-xl ${colors[stat.color]} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl font-bold text-brand-navy dark:text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
