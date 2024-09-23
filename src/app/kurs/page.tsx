import { CalendarIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        width={1573}
        height={701}
        src="/kurs-city.png"
        alt="Västerås skyline with app icons"
      />

      <br />

      <h1>Kvällskurs i Apputveckling</h1>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 mb-6">
          <MapPinIcon size={20} className="stroke-gray-400" />{" "}
          <h3 className="!m-0 font-medium">Västerås</h3>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <CalendarIcon size={20} className="stroke-gray-400" />{" "}
          <h3 className="!m-0 font-medium">Oktober 2024</h3>
        </div>
      </div>

      <p>
        Vill du lära dig att bygga appar? Då har du hittat rätt! Anmäl dig till
        en kurs med mig i Västerås, där du under sex tillfällen får chansen att
        dyka in i världen av apputveckling.
      </p>

      <h2>Vem är Albin?</h2>

      <div className="flex gap-6 items-start">
        <Image width={125} height={125} alt="jag" src="/profile.png" />

        <blockquote>
          Jag är en självlärd utvecklare med många års erfarenhet av både app-
          och webbutveckling. Jag har arbetat med allt från mindre företag som
          Dooer till större organisationer som TV4. På fritiden driver jag flera
          sidoprojekt och är aktiv inom open source-communityn, där jag har
          skapat paket som används av tiotusentals utvecklare världen över.
        </blockquote>
      </div>

      <h2>Om kursen</h2>

      <p>
        Under kursens sex tillfällen kommer du få all kunskap du behöver för att
        börja bygga egna appar. Du får en genomgång av de olika tekniker som är
        aktuella för apputveckling 2024, med en diskussion om fördelar och
        nackdelar, samt mina egna rekommendationer.
      </p>

      <p>
        Vi kommer att använda gratisverktyget React Native, som är starkt
        inspirerat av React.
      </p>
      <p>
        De tre första tillfällena fokuserar på grunderna, där vi tillsammans
        bygger en enklare app. Under de resterande tillfällena kommer du att
        arbeta med din egen appidé, med stöd och vägledning från mig hela vägen.
      </p>

      <h3>Kurstillfällen</h3>

      <ul>
        <li>2 oktober 2024</li>
        <li>9 oktober 2024</li>
        <li>16 oktober 2024</li>
        <li>23 oktober 2024</li>
        <li>30 oktober 2024</li>
        <li>6 november 2024</li>
      </ul>

      <h3>Plats & tid</h3>

      <p>
        {" "}
        <a href="https://b26.se">B26 Västerås</a> (<i>alt. digitalt</i>) kl
        18:30 - 20:00
      </p>

      <h3>Pris & betalning</h3>

      <p>
        500 kr/tillfälle <i>(ex. moms)</i>. Betalas via faktura.
      </p>

      <h3>Utrustning</h3>

      <p>
        Du kommer att använda din egen laptop. Det går bra att använda både{" "}
        <b>Windows</b>, <b>Mac</b> och <b>Linux</b>!
      </p>

      <h2>Anmälan & frågor</h2>

      <p>Kontaka mig så återkommer jag med mer information.</p>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:albingroen@proton.me?subject=Kursanmälan"
      >
        albingroen@proton.me
      </a>

      <br />

      <a target="_blank" rel="noopener noreferrer" href="tel+46720173749">
        +46 720 17 37 49
      </a>

      <p>
        <b>Varmt välkommen!</b>
      </p>
    </>
  );
}
