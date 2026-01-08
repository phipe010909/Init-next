import Boton from "@/components/Boton";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Página principal</h1>

      <Boton texto="Ir a la segunda página" href="/segunda"/>
    </div>
  );
}


