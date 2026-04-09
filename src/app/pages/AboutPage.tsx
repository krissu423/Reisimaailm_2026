import {
  Award,
  Globe2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const values = [
  {
    icon: Globe2,
    title: "Läbimõeldud reisilahendused",
    description:
      "Koondame lennud, majutuse ja lisateenused ühte lihtsasse broneerimisvoogu, et reisi planeerimine oleks kiire ja selge.",
  },
  {
    icon: ShieldCheck,
    title: "Usaldus ja turvalisus",
    description:
      "Eelistame läbipaistvaid tingimusi, turvalisi makseid ja selget suhtlust igas klienditeekonna etapis.",
  },
  {
    icon: HeartHandshake,
    title: "Inimlik klienditugi",
    description:
      "Aitame nii enne reisi, reisi ajal kui ka pärast reisi, et kliendil oleks kindel ja toetatud tunne.",
  },
  {
    icon: Award,
    title: "Kvaliteetne valik",
    description:
      "Valime pakkumised, mis sobivad eri eelarvete ja reisistiilidega kasutajatele – perereisidest linnapuhkusteni.",
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-6xl space-y-8">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-4 text-primary">
            Meist
          </h1>
          <p className="text-lg text-muted-foreground">
            ReisiMaailm on kaasaegne reisibroneerimise platvorm,
            mille eesmärk on muuta puhkuse või tööreisi
            korraldamine lihtsaks, turvaliseks ja meeldivaks.
          </p>
        </section>

        <Card>
          <CardContent className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl mb-4 text-primary">
                Mida me teeme
              </h2>
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>
                  Pakume kasutajatele mugavat võimalust sirvida
                  sihtkohti, võrrelda pakkumisi, teha
                  broneeringuid ja hallata reisidokumente ühes
                  kohas.
                </p>
                <p>
                  Selle prototüübi fookus on selgel
                  kasutajateekonnal: avastus, otsing,
                  broneerimine, maksmine ja reisi haldamine. Iga
                  samm on kujundatud nii, et kasutaja leiaks
                  olulise info kiiresti üles.
                </p>
                <p>
                  Meie eesmärk on ehitada reisikeskkond, mis
                  tundub usaldusväärne, modernne ja arusaadav
                  nii esmakordsele külastajale kui ka
                  korduvkasutajale.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="h-full">
                    <CardContent className="p-5 space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-6">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Missioon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-6">
                Luua kasutajasõbralik reisiplatvorm, mis aitab
                teha paremaid otsuseid ja vähendab
                broneerimisprotsessi keerukust.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Visioon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-6">
                Kujuneda usaldusväärseks digitaalseks
                reisikaaslaseks, kelle juurde tullakse tagasi
                nii inspireeriva sisu kui ka mugava teenuse
                pärast.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fookus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-6">
                Selge infoarhitektuur, loogiline navigeerimine,
                tugev mobiilikogemus ja professionaalne
                visuaalne keel.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}