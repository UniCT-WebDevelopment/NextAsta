"use client";

import {
  createItemAction,
  createUploadUrlAction,
} from "@/app/items/create/actions";
import { DatePickerDemo } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { pageTitleStyles } from "@/styles";
import { useState } from "react";

export default function CreatePage() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <main className="space-y-8">
      <h1 className={pageTitleStyles}>Metti un prodotto all'asta</h1>

      <form
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();

          if (!date) {
            return;
          }

          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const file = formData.get("file") as File;

          const uploadUrl = await createUploadUrlAction(file.name, file.type);

          await fetch(uploadUrl, {
            method: "PUT",
            body: file,
          });

          const name = formData.get("name") as string;
          const startingPrice = parseInt(
            formData.get("startingPrice") as string
          );
          const startingPriceInCents = Math.floor(startingPrice * 100);

          await createItemAction({
            name,
            startingPrice: startingPriceInCents,
            fileName: file.name,
            endDate: date,
          });
        }}
      >
        <Input
          required
          className="max-w-lg"
          name="name"
          placeholder="Dai il nome al tuo prodotto"
        />
        <Input
          required
          className="max-w-lg"
          name="startingPrice"
          type="number"
          step="0.01"
          placeholder="A quale prezzo iniziare l'asta?"
        />
        <Input type="file" name="file"></Input>
        <DatePickerDemo date={date} setDate={setDate} />
        <Button className="self-end" type="submit">
          Pubblica il prodotto
        </Button>
      </form>
    </main>
  );
}
