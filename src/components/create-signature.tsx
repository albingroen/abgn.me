"use client";

import { createSignature } from "@/lib/actions/signature";
import { SignatureIcon } from "lucide-react";

export default function CreateSignature() {
  return (
    <button
      onClick={() => {
        const name = window.prompt("Skriv en hälsning!");

        if (!name) return;

        createSignature(name);
      }}
      className="font-sans py-2 px-4 rounded-md hover:bg-gray-100 transition border font-medium shadow-sm flex items-center gap-2"
    >
      Skriv en hälsning
      <SignatureIcon size={16} />
    </button>
  );
}
