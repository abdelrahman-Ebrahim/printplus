import AuthFooter from "@/components/Footer/AuthFooter";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <AuthFooter />
    </div>
  );
}
