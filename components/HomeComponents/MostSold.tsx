import React from "react";
import MostSoldCard from "./MostSoldCard";

const mostSoldItems = [
  {
    imageSrc: "/Sold1.svg",
    altText: "Sold1",
    title: "ورق اعمال A4",
    price: "10.24",
    quantity: "50 قطعة",
  },
  {
    imageSrc: "/Sold2.svg",
    altText: "Sold2",
    title: "كارت اعمال مطفي",
    price: "10.24",
    quantity: "50 قطعة",
  },
  {
    imageSrc: "/Sold3.svg",
    altText: "Sold3",
    title: "فلاير مقاس DL",
    price: "10.24",
    quantity: "50 قطعة",
  },
  {
    imageSrc: "/Sold4.svg",
    altText: "Sold4",
    title: "مجلد ملفات كارتوني",
    price: "10.24",
    quantity: "50 قطعة",
  },
];

export const MostSold = () => {
  return (
    <section className="flex justify-center items-center gap-20 py-[72px] px-[181px]">
      <div className="flex flex-col gap-12 justify-center items-center">
        <h2 className="font-semibold text-2xl text-[#191919]">المنتجات الأكثر مبيعًا</h2>
        {/* Most Sold Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mostSoldItems.map((item, index) => (
            <MostSoldCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
