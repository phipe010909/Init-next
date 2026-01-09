import Link from "next/link";

interface Props {
  texto: string;
  href: string;
}

export const CTA = ({texto, href}: Props) => (
  <Link href={href} className="relative z-10 bg-gradient-to-r from-[#8F5A2F] to-[#A67B52] text-[#1E130C] px-10 py-3 rounded-full font-medium text-lg hover:brightness-110 transition-all shadow-lg">
    {texto}
  </Link>
);