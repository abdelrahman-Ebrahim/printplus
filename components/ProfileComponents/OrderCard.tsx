// components/OrderCard.tsx
import { Order } from "@/types/Orders";
import Image from "next/image";
import React from "react";

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="w-full rounded-lg border border-[#E7E7E7] flex flex-col">
      {/* Card Header */}
      <div className="w-full flex items-center justify-between py-4 px-6 border-b border-[#E7E7E7]">
        {/* ID and Date right side */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/document.svg"}
              alt="document"
              width={20}
              height={20}
            />
            <p className="text-[#2E2E2E] font-medium text-sm space-x-[-1.1%]">
              {order.id}
            </p>
          </div>
          <div className="font-medium text-[#2E2E2E]">•</div>
          <div className="flex items-center gap-2">
            <Image
              src={"/calendar.svg"}
              alt="calendar"
              width={20}
              height={20}
            />
            <p className="text-[#2E2E2E] font-medium text-sm space-x-[-1.1%]">
              {order.date}
            </p>
          </div>
        </div>
        {/* Status left side */}
        <div className="bg-[#F3D6D5] py-[6px] px-[12px] rounded-[4px] flex justify-center items-center">
          <p className="text-[#C5312D] font-medium text-[12px]">
            {order.status}
          </p>
        </div>
      </div>
      {/* Card Body */}
      <div className="flex justify-start items-start gap-4 p-6">
        {/* Product Image */}
        <Image
          src={order.productImage}
          alt="productImg"
          width={108}
          height={110}
          className="self-center"
        />
        {/* Product Details */}
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-[13px]">
            <div className="flex gap-1 items-center font-medium text-sm">
              <p>العدد:</p>
              <p className="text-[#7E7E7E]">{order.quantity}</p>
            </div>
            <div className="flex gap-1 items-center font-medium text-sm">
              <p>المقاس:</p>
              <p className="text-[#7E7E7E]">{order.size}</p>
            </div>
            <div className="flex gap-1 items-center font-medium text-sm">
              <p>التوصيل:</p>
              <p className="text-[#7E7E7E]">{order.delivery}</p>
            </div>
            <div className="flex gap-1 items-center font-medium text-sm">
              <p>لون التذهيب:</p>
              <p className="text-[#7E7E7E]">{order.color}</p>
            </div>
            <div className="flex gap-1 items-center font-medium text-sm">
              <p>الحواف:</p>
              <p className="text-[#7E7E7E]">{order.edges}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Total Price */}
      <div className="border-y border-[#E7E7E7] py-4 px-6 flex items-center justify-between">
        <p className="text-sm font-medium text-[#2E2E2E]">إجمالي الدفع</p>
        <p className="text-xl font-medium">{order.totalPrice} ر.س</p>
      </div>
      {/* Order Details */}
      <div className="flex items-center justify-between py-4 px-6">
        {/* Credit and Delivery */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={"/creditcard.svg"}
              alt="creditcard"
              width={20}
              height={20}
            />
            <p className="text-sm font-medium text-[#2E2E2E]">
              {order.paymentMethod}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={"/clock.svg"} alt="clock" width={20} height={20} />
            <p className="text-sm font-medium text-[#2E2E2E]">
              يصلك في {order.deliveryDate}
            </p>
          </div>
        </div>
        {/* Cancel Button */}
        <button className="py-[6px] px-6 rounded-[4px] border border-primary flex justify-center items-center">
          <p className="text-[12px] text-primary font-medium">إلغاء الطلب</p>
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
