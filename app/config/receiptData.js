export default SECTIONS = [
  {
    title: "Frühstück",
    height: 120,
    data: [
      {
        id: 1,
        title: "Ei mit Brot ",
        subtitle: "Frühstück",
        vegetarian: "ja",
        description: "oi meu amor",
        dauer: "5",
        level: "Leicht",
        tags: "Vegetarisch, Frühstück, Laktosefrei",
        zutaten:
          "57g-Eier weich kochen, 33g-Vollkornbrot, 9g-Butter, 25g-Banane, 40g-Cantaloupe, 41g-Ananas",
        zutatenE: 3,
        image: require("../assets/Rezepte/Ei-brot.jpg"),
      },
      {
        id: 2,
        title: "Avocado-Eier",
        subtitle: "Frühstück",
        image: require("../assets/Rezepte/sample.jpg"),
        vegan: true,
        tags: "",
      },
      {
        id: 3,
        title: "Avocado-Eier",
        subtitle: "Frühstück",
        image: require("../assets/Rezepte/sample.jpg"),
        vegetarian: true,
        tags: "",
      },
      {
        id: 4,
        title: "Avocado-Eier",
        subtitle: "Frühstück",
        image: require("../assets/Rezepte/sample.jpg"),
        vegetarian: true,
        tags: "",
      },
      {
        id: 5,
        title: "Avocado-Eier",
        subtitle: "Frühstück",
        image: require("../assets/Rezepte/sample.jpg"),
        vegetarian: true,
        tags: "",
      },
    ],
  },
  {
    title: "Mittagessen",
    data: [
      {
        id: 6,
        title: "Hühnerbrust mit Süßkartoffeln ",
        subtitle: "Mitagessen",
        description:
          "Zwiebel klein schneiden, im Kokosfett glasig braten. Hühnerfleisch klein schnei- den, zugeben und anbraten. Gekochte Süßkartoffeln (nicht zu weich kochen) in dünne Scheiben schneiden, dazugeben. Ei schlagen. Wenn die anderen Zuta- ten in der Pfanne heiß sind, Ei darübergeben, stocken lassen. Am Schluss mit klein geschnittenem Schnittlauch garnieren, nach Geschmack würzen",
        dauer: "20",
        level: "Mittel",
        tags: "Fleisch, Protein, Glutenfrei, Laktosefrei, Mittag",
        zutaten:
          "73g-Zwiebel, 6g-Kokosfett, 15g-Hühnerbrust, 48g-Süßkartoffeln kochen, 29g-Ei",
        zutatenE: 2,
        image: require("../assets/Rezepte/ChickenSweetPotatoes.jpg"),
      },
      {
        id: 7,
        title: "Heilbutt im Weinteig ",
        subtitle: "Mitagessen",
        description:
          "Lauch und Karotten klein schneiden, in Wasser dünsten, würzen. Fisch abwaschen und gut abtrocknen, salzen und pfeffern.\r\nWeißwein in einen tiefen Teller geben, Mehl in einen anderen Teller geben. Den Fisch erst im Wein, dann in Mehl, dann wieder in Wein und schließlich wieder im Mehl wenden. In heißem Kokosfett ausbraten. Dabei möglichst nur einmal vorsichtig wenden. Mit Zitronenscheiben servieren.\r\nAnmerkung: Da der Alkohol des Weins beim Anbraten verdunstet, muss er hier nicht eingerechnet werden.",
        dauer: "15",
        level: "Mittel",
        tags: "Fisch, Glutenfrei, Laktosefrei, Mittag",
        zutaten:
          "90g-Lauch, 90g-Karotten, 87g-Heilbutt, 28g-Dinkelmehl, 9g-Kokosfett, 100 ml  weiß Wein,Salz, Pfeffer, Zitronenscheiben zum garnieren",
        zutatenE: 3,
        image: require("../assets/Rezepte/HeilbuttWeintteig.jpg"),
      },
    ],
  },
  {
    title: "Nachtessen",
    data: [
      {
        id: 8,
        title: "Poke-Bowl",
        subtitle: "Hauptspeise",
        image: require("../assets/Rezepte/Rezept1.jpg"),
        vegetarian: true,
        tags: "vegan",
      },
      {
        id: 9,
        title: "Avocado-Eier",
        subtitle: "Frühstück",
        image: require("../assets/Rezepte/Rezept2.jpg"),
        vegetarian: true,
        tags: "",
      },
      {
        id: 10,
        title: "Poke-Bowl",
        subtitle: "Hauptspeise",
        image: require("../assets/Rezepte/Rezept1.jpg"),
        vegetarian: true,
        tags: "",
      },
      {
        id: 11,
        title: "Avocado-Eier",
        subtitle: "Frühstück",
        image: require("../assets/Rezepte/Rezept2.jpg"),
        vegetarian: true,
        tags: "",
      },
    ],
  },
];
