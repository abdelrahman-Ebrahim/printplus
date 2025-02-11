import AuthFooter from "@/components/Footer/AuthFooter";
import ProfileSideBar from "@/components/ProfileComponents/ProfileSideBar";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="py-12 px-10">
        <div className="pt-14">
          <div className="flex gap-20 items-start justify-center px-10 min-h-[683px]">
            <ProfileSideBar />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
}
