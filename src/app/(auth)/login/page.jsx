import Link from "next/link";
import { LoginForm } from "@/components/forms/login-form";

export const metadata = { title: "Masuk | KARÉLLE" };

const NOTICES = {
  logout: "Anda berhasil keluar.",
  reset: "Password berhasil diganti. Silakan masuk dengan password baru.",
};

export default async function LoginPage({ searchParams }) {
  const params = await searchParams;
  const notice = Object.keys(NOTICES).find((key) => params?.[key]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-display text-4xl">Masuk ke akun Anda</h1>
        <p className="text-sm text-muted-foreground">Untuk Admin, Teacher, dan Student.</p>
      </div>
      {notice && <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">{NOTICES[notice]}</p>}
      <LoginForm callbackUrl={params?.callbackUrl} />
      <p className="text-sm text-muted-foreground">
        Belum punya akun?{" "}
        <Link href="/register/student" className="font-medium text-foreground underline-offset-4 hover:underline">Daftar sebagai Student</Link>
        {" atau "}
        <Link href="/register/teacher" className="font-medium text-foreground underline-offset-4 hover:underline">Teacher</Link>
      </p>
    </div>
  );
}
