import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "Model Y",
      subtitle: "1.99% APR Financing Available",
      linkText: "From $31,490",
      bgImage: "https://www.auto-data.net/images/f49/Tesla-Model-3-facelift-2023.jpg",
      primaryBtn: "Order Now",
      secondaryBtn: "Demo Drive",
    },
    {
      id: 2,
      title: "Model 3",
      subtitle: "Lease From $299/mo",
      linkText: "Learn More",
      bgImage: "https://tse3.mm.bing.net/th/id/OIP.kLSEZJc3ccocpfq0bJ9y7gHaEJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      primaryBtn: "Order Now",
      secondaryBtn: "Demo Drive",
    },
    {
      id: 3,
      title: "Model X",
      subtitle: "From $65,990",
      linkText: "After Federal Tax Credit",
      bgImage: "https://tse1.mm.bing.net/th/id/OIP.9QYbITgAmapAJqDPhyTjiQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" ,
      primaryBtn: "Custom Order",
      secondaryBtn: "Demo Drive",
    },
    {
      id: 4,
      title: "Model S",
      subtitle: "From $71,490",
      linkText: "Free Supercharging Included",
      bgImage: "https://th.bing.com/th/id/R.a2561cd7073aec21ce82e84f69fc3082?rik=DVXfet5rcyhK0w&pid=ImgRaw&r=0",
      primaryBtn: "Custom Order",
      secondaryBtn: "Demo Drive",
    },
    
  ];

  return (
    // Asosiy konteyner: Ekran bo'ylab to'liq joy egallaydi va ichki kontentni o'rtaga tekislaydi
    <main className="h-screen w-full bg-[#f4f4f4] flex items-center overflow-hidden">
      
      {/* Yonma-yon siljiydigan (X-o'qi bo'yicha) karusel */}
      <div className="w-full flex gap-6 px-6 overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar py-4">
        {products.map((product) => (
          <section
            key={product.id}
            className="relative h-[80vh] w-[90vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0 snap-center flex flex-col justify-between items-center pt-16 pb-12 bg-cover bg-center rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 "
            style={{ backgroundImage: `url('${product.bgImage}')` }}
          >
            {/* Matnlar qismi */}
            <div className="text-center z-10 px-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
                {product.title}
              </h1>
              <p className="text-xs md:text-sm text-gray-200 mt-2 drop-shadow">
                {product.subtitle}{" "}
                {product.linkText && (
                  <a href="#" className="underline text-white hover:text-gray-300 font-medium transition-all">
                    {product.linkText}
                  </a>
                )}
              </p>
            </div>

            {/* Tugmalar qismi */}
            <div className="flex flex-col sm:flex-row gap-3 w-[85%] sm:w-auto z-10">
              <a
                href="#"
                className="bg-white/90 text-black text-xs font-semibold py-3 px-12 rounded-full md:w-52 text-center backdrop-blur-sm hover:bg-white transition-colors"
              >
                {product.primaryBtn}
              </a>

              <a
                href="#"
                className="bg-black/50 text-white text-xs font-semibold py-3 px-12 rounded-full md:w-52 text-center backdrop-blur-sm hover:bg-black/70 border border-white/20 transition-colors"
              >
                {product.secondaryBtn}
              </a>
            </div>

            {/* Rasm ustidagi qorong'ulik (Matnlar oq rangda bo'lgani uchun aniq ko'rinishini ta'minlaydi) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
          </section>
        ))}
      </div>
    </main>
  );
}