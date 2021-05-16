export const services = [
  {
    title: "Vaccinations",
    subtitle: null,
    summary:
      "Vaccinations are key to debilitating the spread and effects of COVID-19 infections. Schedule your vaccination appointment today!",
    features: [
      {
        text: "No cost to patients",
        tooltip: null,
        info: null,
      },
      {
        text: "For adults 18+",
        features: [
          {
            text: "2 Dose Moderna",
            tooltip: null,
            info: true,
          },
          {
            text: "Johnson & Johnson",
            tooltip: null,
            info: true,
          },
        ],
        tooltip: null,
        info: null,
      },
      {
        text: "For Patients 12+",
        features: [
          {
            text: "TBD",
            tooltip: null,
            info: true,
          },
        ],
        tooltip: null,
        info: null,
      },
    ],
    priceTag: "VAX",
    action: "Make an appointment",
    link: "https://patientportal.advancedmd.com/147482/onlinescheduling/existing",
    image: "DNA",
    color: "#FFB655",
  },
  {
    title: "COVID-19 Testing",
    subtitle: "PCR&Rapids",
    summary:
      "To continue with helping our community overcome the current pandemic, we are now offering SARS COV2 RtPCR and antigen testing.",
    features: [
      {
        text: "Rapid antigen testing results within 45 minutes",
        tooltip: "100% Specificity & 88.4% Sensitivity",
        info: null,
      },
      {
        text: "PCR results within 48-72 hours",
        tooltip: null,
        info: null,
      },
      {
        text: "Check if your travel destination accepts rapid antigen test results",
        tooltip: null,
        info: true,
      },
    ],
    priceTag: "COVID",
    action: "Make an appointment",
    link: "http://expresstestnc.as.me",
    image: "VIRUS",
    color: "#41A814",
  },
  {
    title: "Corporate Services",
    subtitle: null,
    summary:
      "Have a large team that needs to get COVID tested/vaccinated? Contact us today to learn about concierge healthcare at your location!",
    features: [],
    priceTag: null,
    action: "Contact us",
    link: null,
    image: "BLOOD",
    color: "#FF423D",
    modal: {
      title: "Contact us",
      text: "admin@carolinaclinicals",
    },
  },
];
