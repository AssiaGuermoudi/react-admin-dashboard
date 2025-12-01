import { tokens } from "../theme";

export const mockHistorique = [
  { id: "EX001", action: "Ajout examen", enseignant: "M. Ali", date: "2025-05-02" },
  { id: "EX002", action: "Modification salle", enseignant: "Mme Sara", date: "2025-05-03" },
  { id: "EX003", action: "Suppression examen", enseignant: "M. Omar", date: "2025-05-05" },
];

export const mockBarData = [
  { module: "Mathématiques", examens: 12 },
  { module: "Physique", examens: 9 },
  { module: "Informatique", examens: 15 },
  { module: "Chimie", examens: 7 },
];

export const mockPieData = [
  { id: "validé", label: "Validé", value: 45, color: "hsl(120, 70%, 50%)" },
  { id: "en_attente", label: "En attente", value: 20, color: "hsl(50, 70%, 50%)" },
  { id: "conflit", label: "Conflit", value: 10, color: "hsl(0, 70%, 50%)" },
];

export const mockLineData = [
  {
    id: "Examens par jour",
    color: tokens("dark").greenAccent[500],
    data: [
      { x: "01 juin", y: 5 },
      { x: "02 juin", y: 8 },
      { x: "03 juin", y: 6 },
      { x: "04 juin", y: 10 },
      { x: "05 juin", y: 12 },
    ],
  },
];

// ✅ Mock data complète pour les examens
export const mockDataExams = [
  {
    id: 1,
    module: "Programmation",
    groupe: "G1",
    date: "2025-01-20",
    heure: "10:00",
    salle: "B12",
    enseignant: "Mme Yasmine",
    statut: "Validé",
  },
  {
    id: 2,
    module: "Mathématiques",
    groupe: "G2",
    date: "2025-01-22",
    heure: "14:00",
    salle: "A03",
    enseignant: "Mr Karim",
    statut: "En attente",
  },
  {
    id: 3,
    module: "Informatique",
    groupe: "G1",
    date: "2025-01-25",
    heure: "09:00",
    salle: "C01",
    enseignant: "M. Omar",
    statut: "Conflit",
  },
];
