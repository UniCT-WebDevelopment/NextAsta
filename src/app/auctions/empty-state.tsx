import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="space-y-8 flex flex-col items-center justify-center">
      <Image src="/package.svg" width="200" height="200" alt="Package" />
      <h2 className="text-2xl font-bold">Non hai ancora nessun asta</h2>
      <Button asChild>
        <Link href="/items/create">Crea un'Asta</Link>
      </Button>
    </div>
  );
}
