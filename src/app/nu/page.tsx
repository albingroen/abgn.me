import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>Vad gör jag nu?</h1>

      <Image width={1064} height={600} src="/allears.webp" alt="All Ears" />

      <p>
        Under våren 2024 började det tyvärr se mörkt ut för{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://demando.io">
          Demando
        </a>
        . Då bestämde jag mig för att det var dags för någonting nytt. Då
        testade jag på att vara konsult genom{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://boulder.se/">
          Boulder
        </a>{" "}
        - det var någonting helt annat. Efter några månader efter att ha suttit
        hos{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tv4play.se/"
        >
          TV4 (Play)
        </a>{" "}
        tröttnade jag på pendligen och började istället jobba som webbutvecklare
        på{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://allears.ai/">
          All Ears
        </a>
        . Där har jag varit sedan Augusti 2024.
      </p>
    </>
  );
}
