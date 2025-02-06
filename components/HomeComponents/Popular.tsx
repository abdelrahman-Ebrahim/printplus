import React from "react";
import PopularGridCard from "./PopularGridCard";

const Popular = () => {
  return (
    <section className="py-[72px] px-[181px] flex justify-center items-center">
      <div className="flex flex-col gap-12 justify-center items-center">
        <h2 className="font-semibold text-2xl text-[#191919]">الأكثر شيوعاً</h2>
        {/* Popular Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <PopularGridCard
            href="/"
            imageSrc="/Popular1.svg"
            altText="popular1"
            label="مستلزمات الأعمال"
          />
          <PopularGridCard
            href="/"
            imageSrc="/Popular2.svg"
            altText="popular2"
            label="منتجات دعايا وهدايا"
          />
          <PopularGridCard
            href="/"
            imageSrc="/Popular3.svg"
            altText="popular3"
            label="التغليف والملصقات"
          />
          <PopularGridCard
            href="/"
            imageSrc="/Popular4.svg"
            altText="popular4"
            label="الملابس والأقمشة"
          />
          <PopularGridCard
            href="/"
            imageSrc="/Popular5.svg"
            altText="popular5"
            label="المنتجات الكبيرة واللوحات"
          />
          <PopularGridCard href="/" isButton={true} label="شاهد الكل" />
        </div>
      </div>
    </section>
  );
};

export default Popular;
