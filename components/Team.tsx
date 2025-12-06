import React, { useEffect, useRef, useState } from 'react'
import { Linkedin, Twitter } from 'lucide-react'

type Accent = 'accent' | 'secondary'

interface SocialLinks {
  linkedin?: string
  twitter?: string
}

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  accent: Accent
  socials: SocialLinks
}

// 👇 Aquí puedes cambiar el orden: primero tú, luego el resto
const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Alejandro Aracena',
    role: 'CEO & Co-Founder',
    bio: '+3 años de experiencia en manejo de datos en el sector fintech y el ecosistema startup. Graduado con Excelencia en Data Science & Negocios.',
    image:
      '/team/alejandro.jpg',
    accent: 'accent',
    socials: {
      linkedin: 'https://www.linkedin.com/in/pavel-alejandro-aracena-ocampo-626603180',

    },

  },
  {

    name: 'Cesar Vera',
    role: 'CTO & Co-Founder',
    bio: 'Experto en Microservicios y AI. Ganador Hackathon NASA, Lablab Ai x Meta y BCP (Track Transporte). ',
    image:
      '/team/cesar.jpg',
    accent: 'secondary',
    socials: {
      linkedin: 'https://www.linkedin.com/in/cesar-mateo-vera',

    },
  },
]

interface TeamCardProps {
  member: TeamMember
  delay: number
  isVisible: boolean
}

const TeamCard: React.FC<TeamCardProps> = ({ member, delay, isVisible }) => {
  const isSecondary = member.accent === 'secondary'

  return (
    <div
      className={`
        flex flex-col sm:flex-row gap-6 items-start
        bg-bolmi-dark/50 p-6 rounded-2xl border border-bolmi-border
        hover:${isSecondary ? 'border-bolmi-secondary/30' : 'border-bolmi-accent/30'}
        transition-colors duration-300 reveal-on-scroll
        ${isVisible ? 'is-visible' : ''}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`
          w-24 h-24 rounded-full flex-shrink-0 overflow-hidden
          bg-gradient-to-tr from-gray-800 to-gray-700
          border-2 ${isSecondary ? 'border-bolmi-secondary/20' : 'border-bolmi-accent/20'}
        `}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-white">{member.name}</h3>
        <div
          className={`
            font-mono text-sm mb-3
            ${isSecondary ? 'text-bolmi-secondary' : 'text-bolmi-accent'}
          `}
        >
          {member.role}
        </div>

        <p className="text-sm text-bolmi-muted mb-4 leading-relaxed">{member.bio}</p>

        <div className="flex gap-3">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Team: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" ref={sectionRef} className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header sección */}
        <div className={`text-center mb-16 reveal-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Founder-Market Fit
          </h2>
          <p className="text-bolmi-muted">
            La combinación exacta de Operaciones, Finanzas y Tecnología Profunda.
          </p>
        </div>

        {/* Cards del equipo */}
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
