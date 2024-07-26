import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose flex w-full flex-col items-center text-center">
      <h1 className="mb-0 text-3xl font-bold text-primary">
        Welcome to Lithia Motors Service!
      </h1>
      <div className="max-w-xl">
        <Image
          src="/hero.png"
          alt="Logo"
          width={1}
          height={1}
          layout="responsive"
        />
        <p className="mb-12">
          Lithia motors wants to put you in full control of your car-owning
          experience by providing eat to book service appointments from the
          comfort of your own home!
        </p>
        <Link href="/service" passHref>
          <Button size="lg" className="px-24">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}
