import { CTA } from '../components/CTA';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="flex flex-col items-center text-center min-h-screen justify-center mx-auto bg-[url('/hero-campestre.jpg')] bg-cover bg-center bg-[#000000]/60 bg-blend-overlay">
      <div>
        <Image
          src="/logo-blanco.png"
          alt="logo principal"
          width={120}
          height={120}
          className=""
          priority
        />
      </div>
      <div className="flex flex-col items-center gap-6 text-white max-w-2xl">
          <h1 className="text-5xl">Vive la tranquilidad que siempre soñaste</h1>
          <p className="text-xl opacity-90">Lotes campestres en un entorno natural para vivir, invertir y disfrutar.</p>
        <CTA texto="Contactanos" href="/segunda" />
      </div>
    </div>
  );
}