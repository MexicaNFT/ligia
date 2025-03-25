"use client";

import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Somoza",
    description: "Novela",
    image: "/img1.png",
  },
  {
    id: 2,
    title: "Mujeres que Cuentan Secretos",
    description: "Cuento",
    image: "/img2.png",
  },
  {
    id: 3,
    title: "Lo que el 20 se llevó",
    description: "Crónica",
    image: "/img3.png",
  },
];

export default function RecentBlogs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Publicaciones Recientes
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full sm:w-[340px] h-auto flex flex-col items-center text-center"
            >
              <div className="w-full sm:w-[340px] h-[555px] mx-auto rounded-lg overflow-hidden">
                <Image
                  src={blog.image || "/HeroImage.png"}
                  alt={blog.title}
                  width={340}
                  height={555}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-1">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
