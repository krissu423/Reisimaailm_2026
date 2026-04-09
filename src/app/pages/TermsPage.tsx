import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const sections = [
  {
    title: "1. Üldsätted",
    content:
      "Käesolevad kasutustingimused reguleerivad ReisiMaailma veebikeskkonna kasutamist. Veebilehte kasutades nõustub kasutaja nende tingimustega ulatuses, mis on kohaldatava õiguse järgi lubatud.",
  },
  {
    title: "2. Teenuse kasutamine",
    content:
      "Kasutaja kohustub esitama õigeid andmeid, kasutama teenust heas usus ning hoiduma tegevusest, mis võib kahjustada platvormi toimimist, turvalisust või teiste kasutajate kogemust.",
  },
  {
    title: "3. Broneeringud ja hinnad",
    content:
      "Pakkumiste hinnad, saadavus ja tingimused võivad muutuda. Lõplik hind ja tingimused kinnitatakse broneerimisprotsessi käigus enne makse tegemist.",
  },
  {
    title: "4. Kasutajakonto",
    content:
      "Mõned funktsioonid võivad eeldada sisse logimist. Kasutaja vastutab oma kontoandmete konfidentsiaalsuse eest ning peab meid viivitamata teavitama võimalikust väärkasutusest.",
  },
  {
    title: "5. Intellektuaalne omand",
    content:
      "Veebilehe kujundus, tekstid, logod ja muud materjalid kuuluvad ReisiMaailmale või partneritele ning nende kopeerimine või levitamine ilma loata ei ole lubatud.",
  },
  {
    title: "6. Vastutuse piirang",
    content:
      "ReisiMaailm teeb mõistlikke pingutusi info täpsuse tagamiseks, kuid ei garanteeri, et kogu sisu on alati täielik, katkematu või veatu. Platvormil olev info võib olla informatiivse iseloomuga.",
  },
  {
    title: "7. Tingimuste muutmine",
    content:
      "Jätame endale õiguse tingimusi ajakohastada. Olulised muudatused avaldatakse veebilehel koos uuendatud kuupäevaga.",
  },
];

export function TermsPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl mb-4 text-primary">
            Kasutustingimused
          </h1>
          <p className="text-lg text-muted-foreground">
            Allolev sisu on baasversioon, mida saab hiljem
            täiendada juriidiliselt täpsema tekstiga vastavalt
            ettevõtte tegelikule teenusmudelile.
          </p>
        </section>

        <Card>
          <CardContent className="p-6 md:p-8 space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="text-xl text-primary">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-7">
                  {section.content}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Oluline märkus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground leading-6">
              Enne avalikku kasutuselevõttu soovitame need
              tingimused üle vaadata juristiga, eriti kui teenus
              kogub isikuandmeid, töötleb makseid või vahendab
              kolmandate osapoolte teenuseid.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}