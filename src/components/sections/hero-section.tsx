"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 px-2 lg:px-20">
      <div className="grid grid-cols-7 grid-rows-7 gap-2 md:gap-5 h-[400px] sm:h-[600px] md:h-[950px]">
        <Card
          bgColor="bg-[#2a1b15]"
          className="col-span-5 row-span-5 text-white flex flex-col justify-between p-3 sm:p-5 md:p-10 relative overflow-hidden min-h-[200px] sm:min-h-[350px]"
        >
          {/* Background Bakery Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Cupcake --%3E%3Cpath d='M20 70h20l-3 20H23l-3-20z' /%3E%3Cpath d='M22 70c0-8 8-12 10-12s10 4 10 12l-10 10z' /%3E%3C!-- Donut --%3E%3Ccircle cx='140' cy='40' r='12' /%3E%3Ccircle cx='140' cy='40' r='4' /%3E%3C!-- Cake Slice --%3E%3Cpath d='M160 140l25-10-25-10v20z' /%3E%3Cpath d='M160 140v-20h-25l25 20z' /%3E%3C!-- Cherry --%3E%3Ccircle cx='40' cy='160' r='5' /%3E%3Cpath d='M40 155c0-5 6-8 10-8' /%3E%3C!-- Bread --%3E%3Cpath d='M80 120c0-10 30-10 30 0h-30z' /%3E%3Cpath d='M80 120v5h30v-5' /%3E%3C!-- Cookie --%3E%3Ccircle cx='110' cy='30' r='8' /%3E%3Cpath d='M118 30c-2 0-3 2-3 4' /%3E%3Ccircle cx='107' cy='28' r='0.5' fill='%23ffffff' /%3E%3Ccircle cx='112' cy='33' r='0.5' fill='%23ffffff' /%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "200px 200px",
            }}
          />

          <div className="absolute -bottom-8 sm:-bottom-5 md:bottom-0 right-0  w-[70%] h-[80%] z-10 pointer-events-none">
            <Image
              src="/food/choco-cake.png"
              alt="chocolate cake"
              fill
              className="object-contain scale-110 md:scale-125 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              sizes="(max-width: 768px) 100vw, 70vw"
              priority
            />
          </div>

          <div className="z-1">
            <h1 className="font-shrikhand text-[clamp(2rem,10vw,8rem)] leading-[0.85] mb-2 md:mb-4">
              SWEET
              <br />
              DELIGHT!
            </h1>
            <p className="max-w-[70%] md:max-w-xs text-orange-100/80 text-[10px] sm:text-sm md:text-lg leading-tight">
              From warm breads to delightful pastries, made with love.
            </p>
          </div>

          <div className="flex items-center justify-between z-10 mt-2">
            <div className="text-xl md:text-5xl font-shrikhand text-[#f1b434]">
              ( 4.9 )
              <span className="block text-[8px] md:text-sm font-sans text-white/60 mt-0.5 tracking-tighter md:tracking-wider uppercase">
                since 1985
              </span>
            </div>
          </div>

          {/* Cookies */}
          <div className="absolute -right-2 -top-12 w-1/4 h-full overflow-hidden pointer-events-none opacity-90">
            <Image
              src="/food/cookie.png"
              alt="Cookie"
              fill
              className="object-contain scale-[1.2] md:scale-125 translate-x-1/4 -translate-y-1/4"
              sizes="25vw"
              priority
            />
          </div>

          <div className="absolute top-2 sm:top-10 lg:top-28 lg:-right-20 md:-right-10 -right-7 w-1/4 h-full overflow-hidden pointer-events-none opacity-90">
            <Image
              src="/food/cookie.png"
              alt="Cookie"
              fill
              className="object-contain rotate-90 scale-[1.2] md:scale-125 translate-x-1/4 -translate-y-1/4"
              sizes="25vw"
              priority
            />
          </div>
        </Card>

        <Card
          bgColor="bg-[#99e1e5]"
          className="col-span-2 row-span-3 flex flex-col items-center justify-center text-center p-3 sm:p-5 md:p-10"
        >
          <h3 className="font-shrikhand text-lg sm:text-3xl md:text-5xl leading-none">
            SWEET
          </h3>
          <p className="text-[8px] md:text-sm opacity-70 font-bold tracking-tighter md:tracking-widest uppercase">
            Main St.
          </p>
          <div className="relative w-full aspect-square lg:aspect-2/1 mt-1 md:mt-4">
            <Image
              src={`/food/girl-with-donut.png`}
              alt="Girl with cookie"
              fill
              className="object-contain object-bottom scale-110"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
        </Card>

        <Card
          bgColor="bg-[#ff718b]"
          className="col-span-2 row-span-4 flex flex-col items-center text-center text-white p-3 sm:p-5 md:p-10"
        >
          <h3 className="font-shrikhand text-sm sm:text-3xl md:text-4xl lg:text-6xl leading-none">
            Everyday
          </h3>
          <p className="text-[8px] md:text-sm opacity-80 mb-2 md:mb-6 font-bold tracking-tighter md:tracking-widest uppercase">
            Seattle
          </p>
          <div className="relative w-full flex-1 min-h-[60px] md:min-h-[150px]">
            <Image
              src="/food/donutstack.png"
              alt="Donut stack"
              fill
              className="object-contain drop-shadow-lg"
              sizes="(max-width: 768px) 100vw, 30vw"
            />
          </div>
          <p className="text-[10px] md:text-xs opacity-70 mt-2 hidden sm:block">
            Warm breads since 1985.
          </p>
        </Card>

        <Card
          bgColor="bg-[#ffd9b7]"
          className="col-span-5 row-span-2 flex flex-row items-center gap-2 md:gap-10 p-3 sm:p-5 md:p-10"
        >
          <div className="flex-1">
            <h2 className="font-shrikhand text-2xl sm:text-5xl md:text-6xl leading-[0.9]">
              20%
              <br />
              <span className="text-xs sm:text-3xl md:text-5xl">DISCOUNT</span>
            </h2>
          </div>

          <div className="flex-[1.5] flex flex-col gap-1 md:gap-4">
            {[
              {
                name: "Fresh Doughnut",
                price: "$4.99",
                color: "bg-pink-400",
                icon: "/food/donut1.png",
              },
              {
                name: "Chocolate Glaze",
                price: "$5.49",
                color: "bg-red-400",
                icon: "/food/donut2.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-black/10 pb-1 md:pb-4 last:border-0"
              >
                <div className="flex items-center gap-1 md:gap-4">
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={70}
                    height={70}
                    className="w-8 h-8 sm:w-12 sm:h-12 md:w-18 md:h-18 object-contain p-0.5"
                  />
                  <h4 className="font-bold text-[8px] sm:text-sm md:text-xl">
                    {item.name}
                  </h4>
                </div>
                <div className="flex items-center gap-1 md:gap-4">
                  <span className="font-bold text-[8px] sm:text-sm md:text-xl">
                    {item.price}
                  </span>
                  <button className="w-4 h-4 md:w-10 md:h-10 rounded-full bg-[#f1b434] border border-black flex items-center justify-center font-bold text-[10px] md:text-2xl shadow-neo-sm md:shadow-neo">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
