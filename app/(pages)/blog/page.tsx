import BlogSection from "./blog-section";

export default function Home() {
  return (
    /* h-screen: ocupa el alto total de la pantalla.
       overflow-y-auto: permite el scroll vertical si el contenido excede el alto.
       smooth-scroll: (opcional) para que el movimiento sea fluido.
    */
    <main className="w-full h-screen overflow-y-auto bg-white scroll-smooth">
      <BlogSection />
    </main>
  );
}