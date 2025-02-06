import MainFooter from "@/components/Footer/MainFooter";
import Tail from "@/components/HomeComponents/Tail";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <MainFooter />
    </div>
  );
}
