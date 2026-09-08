/**
 * Homepage content of the Parliament of the Republic of Astoria.
 *
 * The homepage is the functional front door of the Parliament: it answers
 * "que se passe-t-il au Parlement, comment le droit évolue-t-il et comment
 * puis-je y prendre part ?". Every section is driven by this configuration
 * and the message catalogs, so the content can evolve without rewriting the
 * interface — and so a future API can replace the static entries seam by
 * seam (labels resolve under `home.*` in the message catalogs).
 *
 * Nothing here invents constitutional rules: statuses, chambers and
 * identifiers are realistic interface metadata, not legal doctrine.
 */

/** The three components of the Astorian Parliament, of equal importance. */
export type ChamberKey = "chambreCitoyenne" | "chambreDeputes" | "senat";

/** Status of a piece of current parliamentary activity. */
export type ActivityStatus = "inProgress" | "upcoming" | "finished";

/** Type of an item of the "En ce moment au Parlement" section. */
export type ActivityType = "seance" | "commission" | "vote";

export type CurrentActivityItem = {
  key: string;
  type: ActivityType;
  chamber: ChamberKey;
  time: string;
  status: ActivityStatus;
};

/** Step of the legislative lifecycle shown in "L'évolution du droit". */
export type LegislationStep = { key: string };

/** Stage of a legislative text in the "Évolution du droit" section. */
export type LegislationStage =
  | "initiative"
  | "examen"
  | "commission"
  | "debats"
  | "votes"
  | "adoption"
  | "promulgation";

export type LegislationText = {
  /** Identifier displayed to the user (e.g. "PL-2025-014"). */
  id: string;
  /** Message key: resolved under `home.legislation.items.<key>.title/activity`. */
  key: string;
  stage: LegislationStage;
  chamber: ChamberKey;
  date: string;
};

export type Chamber = {
  key: ChamberKey;
  href: string;
};

export type ParticipationAction = {
  key: string;
  href: string;
  iconId: string;
  /** When set, the action requires authentication through MyGouv. */
  requiresAuth?: boolean;
};

export type AgendaWhen = "today" | "tomorrow" | "week";

export type AgendaEvent = {
  key: string;
  chamber: ChamberKey;
  time: string;
  when: AgendaWhen;
};

export type UnderstandLink = {
  key: string;
  href: string;
};

export type NewsItem = {
  key: string;
  href: string;
};

export type OpenDataLink = {
  key: string;
  href: string;
  iconId: string;
};

/**
 * Static homepage configuration of the Parliament. Each array is the seam
 * where a future API response plugs in without touching the page component.
 *
 * Message resolution pattern (mirrors tests/page.tsx conventions):
 *   - Items with a `key` resolve under `home.<section>.items.<key>.<field>`.
 *   - Section-level labels resolve under `home.<section>.<field>`.
 */
export const parliamentHome = {
  popularSearches: [
    { key: "lois", href: "/legislation" },
    { key: "projets", href: "/legislation/projets-de-loi" },
    { key: "seances", href: "/travaux/seances" },
    { key: "commissions", href: "/travaux/commissions" },
    { key: "parlementaires", href: "/parlementaires" },
  ],

  currentActivity: [
    {
      key: "seance1",
      type: "seance",
      chamber: "chambreDeputes",
      time: "14h00",
      status: "inProgress",
    },
    {
      key: "commission1",
      type: "commission",
      chamber: "senat",
      time: "15h30",
      status: "upcoming",
    },
    {
      key: "vote1",
      type: "vote",
      chamber: "chambreCitoyenne",
      time: "16h00",
      status: "upcoming",
    },
    {
      key: "seance2",
      type: "seance",
      chamber: "chambreCitoyenne",
      time: "11h00",
      status: "finished",
    },
  ] as CurrentActivityItem[],

  legislationSteps: [
    { key: "initiative" },
    { key: "examen" },
    { key: "commission" },
    { key: "debats" },
    { key: "votes" },
    { key: "adoption" },
    { key: "promulgation" },
  ] as LegislationStep[],

  legislation: [
    {
      id: "PL-2025-014",
      key: "plEnvironnement",
      stage: "debats",
      chamber: "chambreDeputes",
      date: "12.02.2025",
    },
    {
      id: "PP-2025-031",
      key: "ppEducation",
      stage: "commission",
      chamber: "senat",
      date: "08.02.2025",
    },
    {
      id: "PL-2025-008",
      key: "plTransparence",
      stage: "adoption",
      chamber: "chambreCitoyenne",
      date: "29.01.2025",
    },
    {
      id: "PL-2024-142",
      key: "plNumerique",
      stage: "promulgation",
      chamber: "senat",
      date: "18.12.2024",
    },
  ] as LegislationText[],

  chambers: [
    {
      key: "chambreCitoyenne",
      href: "/parlement/chambres/chambre-citoyenne",
    },
    {
      key: "chambreDeputes",
      href: "/parlement/chambres/chambre-des-deputes",
    },
    {
      key: "senat",
      href: "/parlement/chambres/senat",
    },
  ] as Chamber[],

  participationActions: [
    {
      key: "voter",
      href: "/participation/votes",
      iconId: "fr-icon-checkbox-circle-line",
      requiresAuth: true,
    },
    {
      key: "petitions",
      href: "/participation/petitions",
      iconId: "fr-icon-edit-line",
      requiresAuth: true,
    },
    {
      key: "consultations",
      href: "/participation/consultations",
      iconId: "fr-icon-chat-3-line",
    },
    {
      key: "initiatives",
      href: "/participation/initiatives-citoyennes",
      iconId: "fr-icon-lightbulb-line",
      requiresAuth: true,
    },
    {
      key: "candidatures",
      href: "/participation/candidatures",
      iconId: "fr-icon-user-add-line",
      requiresAuth: true,
    },
  ] as ParticipationAction[],

  agenda: [
    {
      key: "seancePublique",
      chamber: "chambreDeputes",
      time: "17h00",
      when: "today",
    },
    {
      key: "commissionBudget",
      chamber: "senat",
      time: "09h30",
      when: "tomorrow",
    },
    {
      key: "questionsCitoyennes",
      chamber: "chambreCitoyenne",
      time: "11h00",
      when: "week",
    },
    {
      key: "auditionExperts",
      chamber: "senat",
      time: "14h00",
      when: "week",
    },
  ] as AgendaEvent[],

  understandLinks: [
    { key: "fonctionnement", href: "/parlement/fonctionnement" },
    { key: "troisChambres", href: "/parlement/chambres" },
    { key: "processusLegislatif", href: "/legislation" },
    { key: "suivreLoi", href: "/legislation/historique-legislatif" },
    { key: "participer", href: "/participation" },
    { key: "constitution", href: "/parlement/cadre-constitutionnel" },
  ] as UnderstandLink[],

  news: {
    featured: { key: "ouvertureSession", href: "/news/ouverture-de-session" },
    secondary: [
      { key: "rapportCommission", href: "/news/rapport-commission" },
      { key: "adoptionLoiNumerique", href: "/news/adoption-loi-numerique" },
      { key: "consultationPublique", href: "/news/consultation-publique" },
    ] as NewsItem[],
  },

  openData: [
    { key: "donneesOuvertes", href: "/donnees-publiques", iconId: "fr-icon-database-line" },
    { key: "apiParlementaire", href: "/donnees-publiques/api", iconId: "fr-icon-code-line" },
    { key: "statistiques", href: "/donnees-publiques/statistiques", iconId: "fr-icon-bar-chart-line" },
    { key: "archives", href: "/legislation/archives", iconId: "fr-icon-archive-line" },
  ] as OpenDataLink[],
};
