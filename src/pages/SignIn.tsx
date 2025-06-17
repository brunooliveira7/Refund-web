import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  function onAction(formData: FormData) {
    console.log(formData.get("email"));
  }

  return (
    <form action={onAction} className="w-full flex flex-col gap-4">
      <Input
        required
        name="email"
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        required
        name="password"
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signUp"
        className="text-sm font-semibold text-gray-100 mt-10
      mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
