import Image from "next/image";

interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  comments: number;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-[32px] overflow-hidden flex flex-col h-full border border-gray-400 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="p-4 pb-0">
        <div className="relative h-48 w-full overflow-hidden rounded-[24px]">
          <Image 
            src={post.image} 
            alt={post.title} 
            fill 
            className="object-cover" 
          />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="bg-[#EBF2FF] text-[#3B82F6] text-[12px] font-medium px-4 py-1.5 rounded-full inline-block">
            {post.category}
          </span>
        </div>
        <h3 className="text-[20px] font-medium text-[#1e293b] leading-tight mb-3 tracking-tight">
          {post.title}
        </h3>
        <p className="text-black font-medium text-[13px] leading-relaxed mb-2 line-clamp-3">
          {post.description}
        </p>

        <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between text-[#94a3b8] text-[13px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Image 
                className="opacity-50"
                src="/blog/icons/relog.png" 
                width={20}
                height={20}
                alt="Calendar Icon"
              />
              <span className="font-medium whitespace-nowrap">{post.date}</span>
            </div>
            <span className="font-medium">{post.comments} comentarios</span>
          </div>

          <button className="text-[#3B82F6] text-[18px] font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Leer más <span className="text-[20px] leading-none text-black">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}