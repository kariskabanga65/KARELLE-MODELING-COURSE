import Link from "next/link";
import { RegisterForm } from "@/components/forms/register-form";

export const metadata = { title: "Daftar sebagai Student | KARÉLLE" };

export default function RegisterStudentPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-display text-4xl">Daftar sebagai Student</h1>
        <p className="text-sm text-muted-foreground">Mulai belajar modeling dari para profesional.</p>
      </div>
      <RegisterForm variant="student" />
      <p className="text-sm text-muted-foreground">
        Sudah punya akun? <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">Masuk</Link>
      </p>
    </div>
  );
}
