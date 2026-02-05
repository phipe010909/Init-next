'use client'
import { useRouter, usePathname } from 'next/navigation'

export default function PricingToggle() {
  const router = useRouter()
  const pathname = usePathname()
  
  const isAnnual = pathname.includes('/anual')

  const handleToggle = () => {
    router.push(isAnnual ? '/planes' : '/anual')
  }

  return (
    <div 
      className="mb-12 flex items-center justify-center gap-4 font-inter cursor-pointer select-none"
      onClick={handleToggle}
    >
      <span className={`text-[24px] transition-all ${!isAnnual ? 'text-black opacity-100' : 'opacity-40'}`}>
        mensual
      </span>

      <div className="relative h-11 w-25 rounded-full bg-gradient-to-r from-[#45ABFF] to-[#2861FF] transition-transform active:scale-95">
        <div className={`absolute top-1 h-9 w-9 rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${isAnnual ? 'left-15' : 'left-1'}`} />
      </div>

      <span className={`text-[24px] font-inter transition-all ${isAnnual ? 'text-[#3F78FF] opacity-100' : 'opacity-40'}`}>
        Anual 20%
      </span>
    </div>
  )
}
