// pages/index.tsx
import OrderCard from "@/components/ProfileComponents/OrderCard";
import { Order } from "@/types/Orders";
import Image from "next/image";
import React from "react";

// Placeholder Orders Array
const orders: Order[] = [
  {
    id: "240810ugjyxkm1",
    date: "14 أغسطس 2024",
    status: "قيد التنفيذ",
    productImage: "/productImg.svg",
    quantity: 50,
    size: '2 "x 3.5"',
    delivery: "توصيل اعتيادي من 4 إلى 5 أيام عمل",
    color: "فضي",
    edges: "دائرية",
    totalPrice: 64,
    paymentMethod: "بطاقة الائتمان/الخصم",
    deliveryDate: "15 أغسطس ، 2024",
  },
  {
    id: "240810ugjyxkm1",
    date: "14 أغسطس 2024",
    status: "قيد التنفيذ",
    productImage: "/productImg.svg",
    quantity: 50,
    size: '2 "x 3.5"',
    delivery: "توصيل اعتيادي من 4 إلى 5 أيام عمل",
    color: "فضي",
    edges: "دائرية",
    totalPrice: 64,
    paymentMethod: "بطاقة الائتمان/الخصم",
    deliveryDate: "15 أغسطس ، 2024",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col">
      {/* Orders header */}
      <div className="pb-8">
        <p className="pb-2 text-[21px] text-[#191919]">الطلبات</p>
      </div>
      {/* Conditional Rendering */}
      {orders.length === 0 ? (
        <div className="flex flex-col gap-6 justify-center items-center py-14">
          <Image
            src={"/emptyorders.svg"}
            alt="empty"
            width={133}
            height={102}
          />
          <p className="text-[#191919] text-[21px]">لا توجد طلبات</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
