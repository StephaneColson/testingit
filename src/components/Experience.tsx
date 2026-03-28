import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Naboo",
    website: "https://www.naboo.app/",
    role: "Lead QA, Automatisation Playwright, IA",
    period: "2026",
    location: "Remote, France",
    type: "Mission Freelance",
    achievements: [
      "Lead QA d'une nouvelle équipe de QA/testeurs",
      "Développement de tests end-to-end avec Playwright et en environnement full IA",
      "Augmentation de la couverture de test et réduction des bugs post-release",
    ],
  },
  {
    company: "April",
    website: "https://www.april.fr",
    role: "Automatisation tests API avec Playwright",
    period: "2025",
    location: "Lyon, France",
    type: "Mission Freelance",
    achievements: [
      "Tests des API et scénarios end-to-end avec Playwright",
      "Intégration CI/CD avec Gitlab",
      "Temps de tests et confiance améliorée",
    ],
  },
  {
    company: "Pass Culture",
    website: "https://pass.culture.fr",
    role: "QA Automation Expert",
    period: "2023 - 2024",
    location: "Remote, France",
    type: "Mission Freelance",
    achievements: [
      "Mise en place d'une stratégie de test complète",
      "Développement de tests Cypress pour l'interface pro",
      "Réduction de 100% des échecs aléatoires (tests flaky)",
    ],
  },
  {
    company: "April",
    website: "https://www.april.fr",
    role: "Automaticien QA",
    period: "2022 - 2023",
    location: "Lyon, France",
    type: "Mission Freelance",
    achievements: [
      "Tests end-to-end des parcours pro et client avec Cypress",
      "Intégration CI/CD avec Jenkins",
      "Réduction de 70% du temps de test post-release",
    ],
  },
  {
    company: "Talend",
    website: "https://www.talend.com",
    role: "QA Engineer",
    period: "2021 - 2022",
    location: "Remote, France",
    type: "Mission Freelance",
    achievements: [
      "Automatisation avec Playwright",
      "Tests de non-régression",
      "Amélioration de la couverture de test de 40%",
    ],
  },
  {
    company: "Soufflet",
    website: "https://www.soufflet.com",
    role: "E-Commerce and API Tester",
    period: "2018 - 2021",
    location: "Remote,France",
    type: "Mission Freelance",
    achievements: [
      "Direction des activités d'assurance qualité pour le lancement d'une plateforme de commerce électronique",
      "Suivi des défauts et collaboration avec les équipes de développement pour assurer la qualité du produit",
      "Amélioration de la qualité du produit et renforcement de la confiance dans le code externalisé",
    ],
  },
  {
    company: "Malt",
    website: "https://www.malt.fr",
    role: "QA Specialist",
    period: "2019",
    location: "Lyon, France",
    type: "Mission Freelance",
    achievements: [
      "Test des évolutions de la plateforme et correction des bugs dans un environnement de déploiement continu",
      "Amélioration de l'automatisation de l'interface utilisateur et mise en place d'une analyse statique du code avec Sonar",
      "Suivi et traitement des tickets d'utilisateurs pour améliorer la qualité de l'application",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge className="mb-4">Expérience</Badge>
          <h2 className="text-4xl font-bold mb-6">Mes dernières missions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            J'ai eu la chance de travailler avec des startups, des scaleups et des
            grands groupes sur des projets variés et stimulants.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-tech transition-all duration-300 bg-card-gradient border border-primary/10"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-semibold text-primary hover:underline"
                      >
                        {exp.company}
                      </a>
                      <Badge variant="outline" className="text-xs w-fit">
                        {exp.type}
                      </Badge>
                    </div>

                    <h4 className="text-lg font-medium mb-3">{exp.role}</h4>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:text-right space-y-2 lg:min-w-[200px]">
                    <div className="flex items-center gap-2 lg:justify-end text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Voir toutes mes expériences sur
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.malt.fr/profile/stephanecolson"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Profil Malt
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-muted-foreground">|</span>
            <a
              href="https://www.linkedin.com/in/stephanecolson/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              LinkedIn
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;