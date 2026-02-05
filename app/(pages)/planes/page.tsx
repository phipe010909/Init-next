'use client'

import { useState } from 'react'
import PricingCard from '@/components/pricing/pricing-card'

export default function PlanesPage() {
  const [isYearly, setIsYearly] = useState(false)

  const handleToggle = () => {
    setIsYearly((prev) => !prev)
  }

  return (
    <main className="w-full min-h-dvh overflow-y-auto scroll-smooth">
      <section
        className="w-full flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 min-h-screen"
        style={{
          backgroundImage: "url('/planes/icons/fondo.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Principal */}
        <div className="flex flex-col items-center w-full max-w-6xl -mt-[60px]">

          {/* Títulos */}
          <div className="text-center mb-10 px-2">
            <h2 className="text-[36px] sm:text-[42px] md:text-[50px] text-black leading-tight">
              <span className="font-inter font-normal">Planes que se </span>
              <span className="font-bold font-inter">Adaptan a Tu Negocio</span>
            </h2>
            <p className="mt-4 text-[18px] sm:text-[20px] tracking-[3px] text-gray-600 font-inter">
              Elige el plan perfecto según el tamaño de tu equipo
            </p>
          </div>

          {/* Toggle mensual-anual */}
          <div className="mb-10 flex justify-center">
            <div className="flex items-center justify-center gap-4 font-inter font-medium">

              <span
                className={`text-[24px] transition-colors duration-300 ${!isYearly ? 'text-black' : 'text-gray-300'
                  }`}
              >
                Mensual
              </span>

              <button
                onClick={handleToggle}
                aria-label="Cambiar periodo de facturación"
                className="relative h-11 w-24 rounded-full bg-gradient-to-r from-[#45ABFF] to-[#2861FF] transition-transform active:scale-95"
              >
                <div
                  className={`absolute top-1 h-9 w-9 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${isYearly ? 'translate-x-14' : 'translate-x-1'
                    }`}
                />
              </button>

              <span
                className={`text-[24px] transition-colors duration-300 ${isYearly ? 'text-[#3F78FF]' : 'text-gray-300'
                  }`}
              >
                Anual 20%
              </span>

            </div>
          </div>

          {/* Glass */}
          <div className="relative -mt-[-20px] z-10 w-full rounded-[28px] bg-white/15 p-6 sm:p-8 md:p-14 backdrop-blur-xl shadow-xl border border-black/10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

              <div className="w-full tracking-[3px]">
                <PricingCard
                  title="Basico"
                  price={isYearly ? '$20' : '$7'}
                  features={[
                    'característica 1',
                    'característica 2',
                    'característica 3',
                    'característica 4',
                  ]}
                />
              </div>

              <div className="w-full tracking-[3px]">
                <PricingCard
                  title="Profesional"
                  price={isYearly ? '$39' : '$9'}
                  popular
                  features={[
                    'característica 1',
                    'característica 2',
                    'característica 3',
                    'característica 4',
                  ]}
                />
              </div>

              <div className="w-full tracking-[3px]">
                <PricingCard
                  title="Empresa"
                  price={isYearly ? '$50' : '$12'}
                  features={[
                    'característica 1',
                    'característica 2',
                    'característica 3',
                    'característica 4',
                  ]}
                />
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}





