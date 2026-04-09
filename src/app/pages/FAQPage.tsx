import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Card, CardContent } from "../components/ui/card";

const faqItems = [
  {
    question: "Kuidas saan reisi broneerida?",
    answer:
      "Vali sobiv sihtkoht või pakkumine, täida reisija andmed, kontrolli broneeringu kokkuvõtet ja jätka maksmisele. Pärast edukat makset kuvatakse broneering sinu reiside vaates.",
  },
  {
    question: "Kas konto loomine on vajalik?",
    answer:
      "Mõne tegevuse jaoks, näiteks broneeringu lõpetamiseks ja dokumentide haldamiseks, võib olla vajalik sisse logida. See aitab siduda broneeringud konkreetse kasutajaga.",
  },
  {
    question: "Kust leian oma reisidokumendid?",
    answer:
      "Pärast broneeringu kinnitamist on dokumendid leitavad lehelt „Minu Reisid” ja vajadusel ka eraldi dokumentide vaates.",
  },
  {
    question:
      "Kas ma saan oma broneeringut muuta või tühistada?",
    answer:
      "See sõltub konkreetse pakkumise ja teenusepakkuja tingimustest. Enne maksmist tasub alati üle vaadata broneeringu tingimused ja tühistamisreeglid.",
  },
  {
    question: "Kuidas te minu andmeid kaitsete?",
    answer:
      "Kasutame mõistlikke turvameetmeid ning töötleme andmeid ainult teenuse osutamiseks vajalikes piirides. Täpsem info on toodud privaatsuspoliitikas.",
  },
  {
    question: "Kuidas saan klienditoega ühendust võtta?",
    answer:
      "Meiega saab ühendust võtta kontaktilehe kaudu, e-posti teel või telefoni teel. Kontaktandmed on leitavad nii footeris kui ka Kontakt lehel.",
  },
];

export function FAQPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl mb-4 text-primary">
            KKK
          </h1>
          <p className="text-lg text-muted-foreground">
            Vastused sagedamini küsitud küsimustele, et
            kasutajal oleks enne broneerimist võimalikult selge
            ülevaade.
          </p>
        </section>

        <Card>
          <CardContent className="p-4 md:p-6">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                >
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-7">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}