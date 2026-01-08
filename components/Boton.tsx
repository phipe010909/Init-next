import Link from "next/link";

interface Props {
  texto: string;
  href: string;
}

export default function Boton({texto, href}: Props){
 
  return (
    <>
      <Link href={href} className="bg-blue-700 text-white py-[12px] px-[24px] rounded-md hover:bg-blue-300 hover:scale-120 ">
      {texto}
      </Link>
    </>
  );
}
