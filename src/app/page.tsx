import { redirect } from "next/navigation";

export default function Page() {
  redirect("/blogg");

  return <h1>Albin Groen</h1>;
}
