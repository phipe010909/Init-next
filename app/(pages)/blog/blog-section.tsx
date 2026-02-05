"use client";
import { BlogCard } from "@/components/blog/blog-card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Interface integrada (BlogType)
interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  comments: number;
}

// Datos integrados con tus rutas reales de imágenes
const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: "Marketing Digital",
    title: "10 Estrategias de Marketing Digital Que Impulsarán Tu Negocio",
    description: "Descubre las estrategias de marketing digital más efectivas para atraer y convertir leads en clientes.",
    image: "/blog/icons/images/blog-1.jpg", 
    date: "Hace 2 días",
    comments: 3
  },
  {
    id: 2,
    category: "Desarrollo Web",
    title: "Tendencias en Desarrollo Web para 2024: ¿Qué Esperar?",
    description: "Explora las últimas tendencias en desarrollo web que marcarán el 2024 y mantente a la vanguardia.",
    image: "/blog/icons/images/programacion.jpg", 
    date: "Hace 5 días",
    comments: 3
  },
  {
    id: 3,
    category: "Estrategia Digital",
    title: "Cómo Utilizar la Inteligencia Artificial en tu Estrategia Digital",
    description: "Aprende cómo integrar la inteligencia artificial en tu estrategia digital para mejorar tus resultados y eficiencia.",
    image: "/blog/icons/images/estrategia digital.png", 
    date: "Hace 1 semana",
    comments: 3
  }
];

export default function BlogSection() {
  return (
    <div 
      className="relative min-h-screen w-full bg-cover bg-center"
      // Ruta corregida a tu fondo .png
      style={{ backgroundImage: "url('/blog/icons/background/fondo.png')" }}
    >
      <section className="relative z-10 py-16 px-4 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-[44px] md:text-[52px] font-regular text-[#1E293B] mb-2 leading-tight">
            Explorar <span className="text-[#3B82F6] font-semibold">Nuestro Blog</span>
          </h2>
          <p className="text-[#64748B] text-lg font-medium">
            Descubre las últimas tendencias, consejos y casos de éxito en el mundo digital
          </p>
          <button className="mt-8 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-blue-200 text-[16px] tracking-[2px] transition-all active:scale-95">
            ver todos los artículos
          </button>
        </div>

        <div className="w-full max-w-7xl bg-white/40 backdrop-blur-md rounded-[45px] p-6 md:p-14 shadow-2xl border border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="flex justify-center items-center gap-8 mt-14">
            <button className="text-gray-400 text-xl hover:text-blue-500 transition-colors">
              <FaArrowLeft />
            </button>
            <div className="flex gap-8">
              <span className="w-3 h-3 rounded-full bg-[#3B82F6]"></span>
              <span className="w-3 h-3 rounded-full bg-blue-200"></span>
              <span className="w-3 h-3 rounded-full bg-blue-200"></span>
            </div>
            <button className="text-gray-400 text-xl hover:text-blue-500 transition-colors">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}