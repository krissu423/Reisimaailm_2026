import { Database, Lock, Mail, Shield } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const privacyItems = [
  {
    icon: Database,
    title: "Milliseid andmeid kogume",
    content:
      "Võime koguda kontaktandmeid, broneeringuinfot, makseprotsessi jaoks vajalikke tehnilisi andmeid ning kasutusstatistikat veebilehe täiustamiseks.",
  },
  {
    icon: Shield,
    title: "Miks andmeid kasutame",
    content:
      "Kasutame andmeid teenuse osutamiseks, klienditoe pakkumiseks, broneeringute haldamiseks, turvalisuse tagamiseks ja kasutajakogemuse parandamiseks.",
  },
  {
    icon: Lock,
    title: "Kuidas andmeid kaitseme",
    content:
      "Rakendame mõistlikke tehnilisi ja korralduslikke meetmeid, et kaitsta andmeid loata ligipääsu, muutmise, avalikustamise või hävimise eest.",
  },
  {
    icon: Mail,
    title: "Kasutaja õigused",
    content:
      "Kasutajal on õigus küsida ligipääsu oma andmetele, taotleda parandamist või kustutamist ning võtta meiega ühendust privaatsusküsimustes.",
  },
];

export function PrivacyPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-5xl space-y-8">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-4 text-primary">
            Privaatsuspoliitika
          </h1>
          <p className="text-lg text-muted-foreground">
            See on esialgne privaatsuspoliitika plokk, mis sobib
            prototüübi jaoks ning aitab katta olulised teemad
            enne lõpliku juriidilise teksti lisamist.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privacyItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl text-primary">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground leading-7">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              Andmete jagamine ja säilitamine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground leading-7">
            <p>
              Jagame andmeid ainult ulatuses, mis on vajalik
              teenuse osutamiseks, näiteks makseteenuse
              pakkujate, majutuspartnerite või transporditeenuse
              vahendajatega.
            </p>
            <p>
              Säilitame andmeid ainult nii kaua, kui see on
              vajalik teenuse täitmiseks, seadusest tulenevate
              kohustuste täitmiseks või õigustatud huvide
              kaitseks.
            </p>
            <p>
              Täpsema privaatsusteabe, andmesubjekti õiguste või
              päringute jaoks saab ühendust võtta aadressil{" "}
              <span className="text-foreground font-medium">
                info@reisimaailm.ee
              </span>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}