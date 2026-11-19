import Link from "next/link";
import { ResetPasswordForm } from "@/components/forms/password-forms";

export const metadata = { title: "Reset Password | KARÉLLE" };

export default async function ResetPasswordPage({ searchParams }) {
  const { token, error } = await searchParams;

  if (!token || error) {
    return (
      <div className="space-y-4">
        <h1 className="font-display text-4xl">Tautan tidak valid</h1>
        <p className="text-sm text-muted-foreground">Tautan reset password tidak valid atau sudah kedaluwarsa.</p>
        <Link href="/forgot-password" className="text-sm font-medium text-foreground underline-offset-4 hover:underline">Minta tautan baru</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Buat password baru</h1>
      <ResetPasswordForm token={token} />
    </div>
  );
}
