import { useState } from "react";
import Button from "./button";

export default function () {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <Button />
      <h1 className="text-6xl font-bold">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
    </main>
  );
}
