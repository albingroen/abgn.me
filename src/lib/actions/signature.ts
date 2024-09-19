"use server";

import { createId } from "@paralleldrive/cuid2";

import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { Signature } from "../type";
import { getRandomAngle, getRandomNumber } from "../random-number";

export async function createSignature(name: string) {
  const filePath = "./data/signatures.json";

  const signatures = await fs.readFile(filePath, "utf-8");

  const json = JSON.parse(signatures) as { signatures: Signature[] };

  const fontIndex = Math.floor(Math.random() * 4);

  const newSignature: Signature = {
    coords: [getRandomNumber(), getRandomNumber()],
    angle: getRandomAngle(),
    id: createId(),
    fontIndex,
    name,
  };

  await fs.writeFile(
    filePath,
    JSON.stringify({ signatures: [...json.signatures, newSignature] }),
  );

  revalidatePath("/gastbok");
}
