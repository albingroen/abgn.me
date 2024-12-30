import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Albin Groen" },
    {
      name: "description",
      content:
        "Hej! My name is Albin Groen. I'm a self-taught designer turned developer.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
