import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#F57B51]">
      <Link href={"/login"}>
        <Button size={"lg"} variant="secondary">
          Login
        </Button>
      </Link>
    </main>
  );
}
