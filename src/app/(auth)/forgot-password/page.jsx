import Link from "next/link";
import { ForgotPasswordForm } from "@/components/forms/password-forms";

export const metadata = { title: "Lupa Password | KARÉLLE" };

export default function ForgotPasswordPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-display text-4xl">Lupa password</h1>
        <p className="text-sm text-muted-foreground">Masukkan email akun Anda untuk membuat tautan reset password.</p>
      </div>
      <ForgotPasswordForm />
      <p className="text-sm">
        <Link href="/login" className="text-foreground underline-offset-4 hover:underline">Kembali ke halaman masuk</Link>
      </p>
    </div>
  );
}
