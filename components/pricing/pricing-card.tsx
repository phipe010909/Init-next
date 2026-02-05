interface PricingCardProps {
  title: string
  price: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  features,
  popular = false
}: PricingCardProps) {
  const isBasicoOEmpresa =
    title.toLowerCase().includes('basico') ||
    title.toLowerCase().includes('básico') ||
    title.toLowerCase() === 'empresa';

  return (
    <div
      className={`relative flex flex-col h-full rounded-[32px] bg-white
      px-6 sm:px-8 md:px-10
      py-3 sm:py-4
      shadow-sm transition-all duration-300
      ${popular
          ? 'border-[1.5px] border-blue-500 ring-4 ring-blue-500/5'
          : isBasicoOEmpresa
            ? 'border-2 border-gray-200'
            : 'border border-gray-200'
        }`}
      style={{ minWidth: '280px' }}
    >
      {popular && (
        <div className="absolute -top-4 right-1 z-20">
          <span className="rounded-full bg-gradient-to-r from-[#51AEFF] to-[#2E4EFF] px-6 py-2.5 text-[14px] sm:text-[16px] md:text-[18px] tracking-[3px] font-inter font-medium text-white shadow-md whitespace-nowrap">
            Más popular
          </span>
        </div>
      )}

      <div className="text-center mb-8 mt-5">
        <h3 className="text-[24px] sm:text-[28px] md:text-[30px] font-medium font-inter text-black">
          {title}
        </h3>

        {isBasicoOEmpresa && (
          <div className="mx-[-24px] sm:mx-[-32px] md:mx-[-40px] border-b border-gray-300 mt-4"></div>
        )}
      </div>

      <div className="text-center mb-2 font-inter mt-[-20px] border-t border-gray-50 pt-6">
        <p className="text-[42px] sm:text-[52px] md:text-[58px] font-medium text-[#000000] tracking-tight">
          {price}
          <span className="text-[12px] sm:text-[14px] md:text-[16px] font-normal text-gray-400 ml-1">/ mes</span>
        </p>
      </div>

      <ul className="mb-10 space-y-3 sm:space-y-4 flex-grow">
        {features.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-black font-inter font-regular text-[14px] sm:text-[18px] md:text-[20px]">
            <span className="text-blue-500 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] py-2 sm:py-2.5 mt-[-8px] font-inter text-[14px] sm:text-[16px] mb-3 font-semibold text-white transition-colors hover:opacity-90">
        Elegir plan
      </button>
    </div>
  )
}
