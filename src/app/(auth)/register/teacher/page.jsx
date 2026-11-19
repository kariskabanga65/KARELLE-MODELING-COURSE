import Link from "next/link";
import { RegisterForm } from "@/components/forms/register-form";
import { getAllCategories } from "@/lib/db/queries/categories";

export const metadata = { title: "Daftar sebagai Teacher | KARÉLLE" };

export default async function RegisterTeacherPage() {
  const categories = await getAllCategories();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-display text-4xl">Daftar sebagai Teacher</h1>
        <p className="text-sm text-muted-foreground">
          Akun Anda langsung aktif sebagai Student. Akses Teacher diberikan setelah Admin menyetujui pengajuan.
        </p>
      </div>
      <RegisterForm variant="teacher" categories={categories} />
      <p className="text-sm text-muted-foreground">
        Sudah punya akun? <Link href="/login" className="font-medium text-foreground underline-offset-4 hover:underline">Masuk</Link>
      </p>
    </div>
  );
}
