"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { login } from "@/actions/login";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/guest/form-error";
import { FormSuccess } from "@/components/guest/form-success";
import { Button } from "@/components/ui/button"; // Button component assumed to stay
import { LoginSchema } from "@/schemas";

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <CardWrapper
      showSocial
      backButtonHref="/auth/register"
      backButtonLabel="Don't have an account?"
      headerLabel="Welcome back"
    >
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {showTwoFactor && (
            <div>
              <label className="block text-sm font-medium" htmlFor="code">
                Two Factor Code
              </label>
              <input
                id="code"
                {...form.register("code")}
                className="input-class"
                disabled={isPending}
                placeholder="123456"
              />
              {form.formState.errors.code && (
                <p className="error-class">
                  {form.formState.errors.code.message}
                </p>
              )}
            </div>
          )}
          {!showTwoFactor && (
            <>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  {...form.register("email")}
                  className="input-class"
                  disabled={isPending}
                  placeholder="john.doe@example.com"
                  type="email"
                />
                {form.formState.errors.email && (
                  <p className="error-class">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  {...form.register("password")}
                  className="input-class"
                  disabled={isPending}
                  placeholder="******"
                  type="password"
                />
                <Button
                  asChild
                  className="px-0 font-normal"
                  size="sm"
                  variant="link"
                >
                  <Link href="/auth/reset">Forgot password?</Link>
                </Button>
                {form.formState.errors.password && (
                  <p className="error-class">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>
            </>
          )}
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <Button className="w-full" disabled={isPending} type="submit">
          {showTwoFactor ? "Confirm" : "Login"}
        </Button>
      </form>
    </CardWrapper>
  );
};
