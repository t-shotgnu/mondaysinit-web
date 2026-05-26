import ekaLogo from "../assets/eka_net_logo.svg";
import xebiaLogo from "../assets/Xebia_Logo_0.svg";
import capgeminiLogo from "../assets/capgemini_logo.svg";
import cuttingEdgeLogo from "../assets/cutting_edge_logo.png";
import csharkLogo from "../assets/cshark_logo.svg";
import vonageLogo from "../assets/vonage_logo.svg";

// Photo imports for past events
import photo1_1 from "../assets/11_05_2026/1.jpg";
import photo1_2 from "../assets/11_05_2026/2.jpg";
import photo1_3 from "../assets/11_05_2026/3.jpg";
import photo1_4 from "../assets/11_05_2026/4.jpg";
import photo1_5 from "../assets/11_05_2026/5.jpg";
import photo1_6 from "../assets/11_05_2026/6.jpg";

import photo_2_1 from "../assets/18_05_2026/1.png";
import photo_2_2 from "../assets/18_05_2026/2.png";
import photo_2_3 from "../assets/18_05_2026/3.png";
import photo_2_4 from "../assets/18_05_2026/4.png";

import type { ImageMetadata } from "astro";

export interface Logo {
  src: string;
  alt: string;
  style: string;
}

export interface Presentation {
  date: string;
  time: string;
  title: string;
  logos?: Logo[];
  location?: string;
  speaker: string;
  description: string;
  photos?: ImageMetadata[];
  completed: boolean;
}

export const presentations: Presentation[] = [
  {
    date: "11 Maja 2026",
    time: "18:00",
    title: "Tworzenie aplikacji w Blazorze",
    logos: [
      {
        src: ekaLogo.src,
        alt: "EKA.NET Logo",
        style: "height: 32px; width: auto; opacity: 0.9; flex-shrink: 0;",
      },
    ],
    location: "s. D1.2 C-16 PWr",
    speaker: "<strong>Filip Kwiek</strong>, prezes Koła Naukowego EKA.NET",
    description: `Nasz cykl rozpoczniemy warsztatami od EKA.NET - jednego z naszych organizatorów, którzy pokażą jak napisać frontend z pomocą... C#!<br /><br />Ucząc się C# i powiązanych technologii, wiele usłyszeć można o Blazorze. Dla niektórych jest to kolejne wymyślanie koła na nowo, a dla innych kolejny dziwny pomysł Microsoftu, podobny do silverlight-a, który nie przetrwa dłużej. Jednak wraz ze swoim wejściem w 2018 razem z .NET Core 3.0, do tego momentu działa i jest prężnie rozwijany przez Microsoft.<br /><br />Po co nam kolejny webowy framework UI? Dlaczego to jest dla Nas, jako dotnetowców przydatne? W kilka chwil stworzymy razem Waszą pierwszą aplikację w Blazorze, pobierając dane z portalu Open Data Wrocław oraz poddając je analizie na dwa sposoby.<br /><br />Celem warsztatów jest pokazanie, że nawet dla backendowca nie taki frontend straszny jak go malują. 😇`,
    photos: [photo1_1, photo1_2, photo1_3, photo1_4, photo1_5, photo1_6],
    completed: true,
  },
  {
    date: "18 Maja 2026",
    time: "18:00",
    title: "Skuteczny dobór architektury aplikacji",
    logos: [
      {
        src: xebiaLogo.src,
        alt: "Xebia Logo",
        style: "height: 40px; width: auto; opacity: 0.9; flex-shrink: 0;",
      },
    ],
    location: "s. D1.2 C-16 PWr",
    speaker:
      "<strong>Paweł Muraczewski</strong>, team leader i senior fullstack developer z firmy Xebia!",
    description: `Dzięki niemu, na realnych przykładach z branży dowiemy się, jak skutecznie dobierać architekturę aplikacji. ⚡<br /><br />Cały warsztat będzie miał na celu przedstawienie wiodących podejść w projektowaniu architektury dużych komercyjnych aplikacji internetowych. Zaprezentowane zostaną najpopularniejsze rodzaje architektury systemów wraz ze sposobem ich implementacji. Przedyskutujemy również ich zalety i wady oraz spróbujemy zdecydować o idealnych przypadkach ich użycia.<br /><br />Wszystko po to, aby zachęcić obecnych na warsztacie do zdroworozsądkowego doboru architektury. Nie ma przecież rozwiązania idealnego do wszystkich problemów, decyzja architektoniczna zawsze mocno zależeć musi od analizy potrzeb klienta. ⚖️`,
    photos: [photo_2_1, photo_2_2, photo_2_3, photo_2_4],
    completed: true,
  },
  {
    date: "25 Maja 2026",
    time: "18:00",
    title: "Świadome użycie AI",
    logos: [
      {
        src: capgeminiLogo.src,
        alt: "Capgemini Logo",
        style: "height: 40px; width: auto; opacity: 0.9; flex-shrink: 0;",
      },
      {
        src: cuttingEdgeLogo.src,
        alt: "Cutting Edge Logo",
        style: "height: 40px; width: auto; opacity: 0.9; flex-shrink: 0;",
      },
    ],
    location: "Zdalnie",
    speaker:
      "<strong>Krzysztof Korus</strong> z Capgemini, członek Cutting Edge Community",
    description: `Odkrywamy wszystkie karty na maj!<br /><br />Te warsztaty pokażą Wam, że użycie AI nie zawsze wiąże się z "vibe codingiem". Tutaj dowiecie się m.in. jak świadomie używać AI zarówno w projektach prywatnych jak i komercyjnych oraz jak zarządzać kontekstem narzędzia AI.<br /><br />Poznacie również liczne wskazówki dobrych praktyk pracy z narzędziami takimi jak Github Copilot czy Claude Code. 🤖`,
    completed: true,
  },
  {
    date: "1 Czerwca 2026",
    time: "18:00",
    title: "Kariera w software development",
    logos: [
      {
        src: csharkLogo.src,
        alt: "CSHARK Logo",
        style: "height: 28px; width: auto; opacity: 0.9; flex-shrink: 0;",
      },
    ],
    location: "s. D1.2 C-16 PWr",
    speaker: "<strong>Adam Skubiszewski</strong> z CSHARK",
    description: `Pierwsze warsztaty kolejnej części cyklu przeprowadzi Adam Skubiszewski z CSHARK. 🦈<br /><br /><strong>O Prelekcji:</strong><br />Kariera w software development zmienia się szybciej niż w jakimkolwiek momencie w ostatnich 20 latach. Język programowania, struktury danych, frameworki, a nawet znajomość technologii chmurowych - to wciąż fundament, który jednak przestaje wystarczać. W tej prelekcji pokażę, jak wyglądała praca programisty 15 lat temu, jak wygląda dziś (zespoły produktowe PO + engineer, AI jako część codziennego workflow) i dokąd to wszystko zmierza w perspektywie 3-5 lat. Opowiem o tym z perspektywy osoby, która odpowiada za SDLC w 230-osobowej organizacji i sama na co dzień pracuje z AI jako kluczowym narzędziu pracy - nie jako gadżecie. Na koniec konkrety: kilka realnych narzędzi i workflow'ów, które można wdrożyć od razu, żeby zacząć budować tę przewagę.`,
    completed: false,
  },
  {
    date: "8 Czerwca 2026",
    time: "18:00",
    title: "Juggling as a job - czyli o sztuce balansowania między technologią, ludźmi a AI",
    logos: [
      {
        src: vonageLogo.src,
        alt: "Vonage Logo",
        style: "height: 40px; width: auto; opacity: 0.9; flex-shrink: 0;",
      },
    ],
    location: "s. D1.2 C-16 PWr",
    speaker: "<strong>Mikołaj Konko-Zachoszcz, Maciej Fras, Róża Kwiatkowska</strong> z firmy Vonage",
    description: `Prelekcja składa się z 3 uzupełniających się części przeprowadzonych przez prelegentów z firmy Vonage, którzy odpowiedzą na pytanie, jak współcześnie pogodzić rozwój oprogramowania, zespół i narzędzia AI. 🤹‍♂️<br /><br /><strong>Mikołaj Konko-Zachoszcz: Nie wierz ślepo w swoje prompty - czego AI nie zastąpi programiście? 🤖⚙️</strong><br />Comprehension debt, halucynacje, LLMy potwierdzające hipotezy i przyspieszenie tempa pracy.<br /><br /><strong>Maciej Fras: Nie tylko kod - rozwój kariery inżyniera oprogramowania. 🧑‍💻📈</strong><br />Jak zadbać o rozwój swojej kariery jako programista. Rola jaką odgrywają budowanie relacji, współpraca w zespole, na czym polega specyfika różnych rodzajów firm z którymi można mieć do czynienia. Wszystko to na podstawie książki "The Software Engineer Guidebook" oraz własnych doświadczeń.<br /><br /><strong>Róża Kwiatkowska: Czym jest Scrum i jak wygląda jego wykorzystanie w praktyce. 👥🎯</strong><br />Jakie umiejętności są przydatne nie tylko w IT, ale w każdej pracy — m.in. komunikacja, współpraca, organizacja pracy, planowanie oraz rozwiązywanie problemów. Scrum to nie tylko framework, ale także sposób efektywnego działania i współpracy.`,
    completed: false,
  },
  {
    date: "15 Czerwca 2026",
    time: "18:00",
    title: "Temat wkrótce...",
    location: "s. D1.2 C-16 PWr",
    speaker: "<strong>Prelegent i organizator wkrótce</strong>",
    description: "Szykujemy dla Was wyjątkowe zamknięcie całego cyklu warsztatów Monday InIT. Szczegóły dotyczące ostatniego spotkania, temat prelekcji oraz organizator zostaną ogłoszeni już wkrótce! Bądźcie czujni! 🚀",
    completed: false,
  },
];
