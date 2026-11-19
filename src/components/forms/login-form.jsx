"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "@/actions/auth-actions";
import { FormField, FormMessage, SubmitButton } from "./form-field";

export function LoginForm({ callbackUrl }) {
  const [state, formAction, pending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <FormMessage state={state} />
      <input type="hidden" name="callbackUrl" value={callbackUrl ?? ""} />
      <FormField label="Email" name="email" type="email" autoComplete="email" required error={state?.fieldErrors?.email} defaultValue={state?.values?.email} />
      <FormField label="Password" name="password" type="password" autoComplete="current-password" required error={state?.fieldErrors?.password} />
      <div className="text-right text-sm">
        <Link href="/forgot-password" className="text-foreground underline-offset-4 hover:underline">
          Lupa password?
        </Link>
      </div>
      <SubmitButton pending={pending} pendingText="Masuk...">
        Masuk
      </SubmitButton>
    </form>
  );
}
