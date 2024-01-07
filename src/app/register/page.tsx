"use client";

import { Button, Input } from "@/common";
import { Form } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/services/auth.services";
import useInput from "@/hooks/useInput";
import { FormEvent } from "react";

export default function Register() {
  const nameInput = useInput("", "required");
  const emailInput = useInput("", "email");
  const passwordInput = useInput("", "password");

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await AuthServices.register({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      });
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex">
      <Image
        src="/firstpluig.png"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
        priority
      />

      <article className="w-[50%] h-screen flex justify-center">
        <Form title="Welcome Back!" register onSubmit={handleSubmit}>
          <div className="my-0">
            <Input title="Full Name" placeholder="Placeholder" {...nameInput} />

            <Input title="Email" placeholder="user@mail.com" {...emailInput} />

            <Input
              title="Password"
              placeholder="Password"
              type="password"
              {...passwordInput}
            />
          </div>

          <Button
            body="Create Account"
            variant="primary"
            className="rounded-md h-12"
            size="big"
          />
        </Form>
      </article>
    </section>
  );
}
