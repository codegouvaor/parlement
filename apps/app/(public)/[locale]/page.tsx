import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localizedAlternates, resolveLocaleParam } from "@/lib/localized-metadata";
import { parliamentHome } from "@/lib/parliament-home";
import { PortalSearchBar } from "@/components/public/search/portal-search-bar";
import {
  ArticleCard,
  CtaButtonsGroup,
  LinkTile,
  SearchSuggestionTag,
} from "@/components/public/content/ads-fragments";

const HOME_PATH = "/";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);

  const tHome = await getTranslations({ locale, namespace: "home" });
  const tMeta = await getTranslations({ locale, namespace: "meta" });

  return {
    title: { absolute: tHome("metaTitle") },
    description: tMeta("description"),
    ...localizedAlternates(locale, HOME_PATH),
  };
}

/* ---- Layout styles (following tests/page.tsx conventions) ----------------- */

const heroContainerStyle: CSSProperties = {
  maxWidth: "52rem",
  marginInline: "auto",
  textAlign: "center",
};

const searchBlockStyle: CSSProperties = {
  maxWidth: "42rem",
  margin: "2.25rem auto 0",
  textAlign: "left",
};

const searchTitleStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  fontSize: "1.25rem",
  lineHeight: 1.3,
  fontWeight: 700,
};

const popularLabelStyle: CSSProperties = {
  margin: "0 0 0.5rem",
  fontSize: "0.875rem",
  color: "var(--ads-color-text-muted)",
};

const popularListStyle: CSSProperties = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
};

const linkListStyle: CSSProperties = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "grid",
  gap: "0",
  maxWidth: "72rem",
};

const teaserCardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  height: "100%",
  padding: "1.25rem",
  background: "var(--ads-color-background)",
  border: "1px solid var(--ads-color-border)",
  borderTop: "3px solid var(--ads-color-primary)",
  textDecoration: "none",
  color: "var(--ads-color-text)",
};

const teaserTagStyle: CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 700,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: "var(--ads-color-primary)",
};

const teaserTitleStyle: CSSProperties = {
  display: "block",
  fontSize: "1.0625rem",
  lineHeight: 1.35,
  fontWeight: 700,
};

const teaserDescStyle: CSSProperties = {
  display: "block",
  fontSize: "0.875rem",
  lineHeight: 1.55,
  color: "var(--ads-color-text-muted)",
};

const teaserArrowStyle: CSSProperties = {
  marginTop: "auto",
  alignSelf: "flex-end",
  fontSize: "1rem",
  color: "var(--ads-color-primary)",
};

const cardListStyle: CSSProperties = {
  listStyle: "none",
  margin: "0",
  padding: "0",
  display: "grid",
  gap: "1.5rem",
};

const statusBadgeStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.375rem",
  padding: "0.1875rem 0.625rem",
  fontSize: "0.75rem",
  fontWeight: 700,
  lineHeight: 1.4,
  borderRadius: "0.125rem",
};

const lifecycleStepStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
  padding: "0.5rem 0.75rem",
  fontSize: "0.8125rem",
  fontWeight: 600,
  lineHeight: 1.4,
  background: "var(--ads-color-surface-muted)",
  border: "1px solid var(--ads-color-border)",
  whiteSpace: "nowrap",
};

const lifecycleStepActiveStyle: CSSProperties = {
  ...lifecycleStepStyle,
  background: "var(--ads-color-primary)",
  color: "var(--ads-color-on-primary)",
  borderColor: "var(--ads-color-primary)",
};

const lifecycleArrowStyle: CSSProperties = {
  color: "var(--ads-color-text-muted)",
  fontSize: "0.75rem",
  flexShrink: 0,
};

const agendaGroupStyle: CSSProperties = {
  marginBottom: "1.75rem",
};

const agendaDayStyle: CSSProperties = {
  margin: "0 0 0.75rem",
  fontSize: "1rem",
  fontWeight: 700,
  color: "var(--ads-color-text)",
};

const agendaItemStyle: CSSProperties = {
  display: "flex",
  alignItems: "baseline",
  gap: "1rem",
  padding: "0.625rem 0",
  borderBottom: "1px solid var(--ads-color-border)",
  fontSize: "0.9375rem",
  lineHeight: 1.5,
};

const agendaTimeStyle: CSSProperties = {
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: "var(--ads-color-primary)",
  minWidth: "4rem",
  flexShrink: 0,
};

const chamberBadgeStyle: CSSProperties = {
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "var(--ads-color-text-muted)",
  padding: "0.125rem 0.5rem",
  background: "var(--ads-color-surface-muted)",
  border: "1px solid var(--ads-color-border)",
  whiteSpace: "nowrap",
};

const activityGridStyle: CSSProperties = {
  display: "grid",
  gap: "1rem",
};

const cardBaseStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  padding: "1rem 1.25rem",
  background: "var(--ads-color-background)",
  border: "1px solid var(--ads-color-border)",
};

const legislationCardStyle: CSSProperties = {
  ...cardBaseStyle,
  borderTop: "3px solid var(--ads-color-primary)",
};

const myGouvCardStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  padding: "1.5rem",
  background: "var(--ads-color-surface-muted)",
  border: "1px solid var(--ads-color-border)",
  marginTop: "1.5rem",
  maxWidth: "36rem",
};

/* ---- Helper: chamber label key for activity/legislation sections ---------- */

function chamberLabelKey(chamber: string): string {
  switch (chamber) {
    case "chambreCitoyenne":
      return "activity.chambers.chambreCitoyenne";
    case "chambreDeputes":
      return "activity.chambers.chambreDeputes";
    case "senat":
      return "activity.chambers.senat";
    default:
      return chamber;
  }
}

function statusColor(status: string): string {
  switch (status) {
    case "inProgress":
      return "var(--ads-color-success)";
    case "upcoming":
      return "var(--ads-color-primary)";
    case "finished":
      return "var(--ads-color-text-muted)";
    default:
      return "var(--ads-color-text-muted)";
  }
}

/**
 * Homepage of the Parliament of the Republic of Astoria — the functional
 * front door of the parliamentary platform.
 *
 * The page answers "que se passe-t-il au Parlement, comment le droit
 * évolue-t-il et comment puis-je y prendre part ?":
 *
 *   01 Hero / Recherche            — institutional identity + search first
 *   02 En ce moment au Parlement   — current activity (seances, commissions, votes)
 *   03 L'évolution du droit        — legislative lifecycle + active texts
 *   04 Les trois chambres          — equal institutional importance
 *   05 Participer                  — citizen participation actions
 *   06 À l'agenda                  — upcoming events grouped by day
 *   07 Comprendre le Parlement     — educational / institutional orientation
 *   08 Actualités                  — news, below functional content
 *   09 Données publiques           — open data
 *
 * Every section is driven by `parliamentHome` configuration and the message
 * catalogs, so the content can evolve without rewriting the interface.
 */
export default async function HomePage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocaleParam(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const tNavPanel = await getTranslations({ locale, namespace: "nav.panel" });

  return (
    <>
      {/* 01 — Hero / Recherche: institutional identity and global search. */}
      <section className="gov-section" aria-labelledby="home-hero-title">
        <div className="gov-section__container" style={heroContainerStyle}>
          <p className="gov-kicker">{t("hero.kicker")}</p>
          <h1 id="home-hero-title">{t("hero.title")}</h1>
          <p className="gov-lead">{t("hero.lead")}</p>
          <div style={searchBlockStyle}>
            <h2 id="home-search-title" style={searchTitleStyle}>
              {t("search.title")}
            </h2>
            <PortalSearchBar label={t("search.label")} placeholder={t("search.placeholder")} />
            <div style={{ marginTop: "1.25rem" }}>
              <p style={popularLabelStyle} id="popular-searches-label">
                {t("search.popularLabel")}
              </p>
              <ul style={popularListStyle} aria-labelledby="popular-searches-label">
                {parliamentHome.popularSearches.map((search) => (
                  <li key={search.key}>
                    <SearchSuggestionTag
                      label={t(`search.popular.${search.key}`)}
                      href={search.href}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — En ce moment au Parlement: current parliamentary activity. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="activity-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("activity.kicker")}</p>
              <h2 id="activity-title" className="gov-section__title">
                {t("activity.title")}
              </h2>
              <p className="gov-lead">{t("activity.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("activity.allLink"),
                  href: "/travaux",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <div style={activityGridStyle}>
            {parliamentHome.currentActivity.map((item) => (
              <a key={item.key} href="/travaux" style={cardBaseStyle}>
                <span style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexWrap: "wrap" }}>
                  <span style={{ ...teaserTagStyle, fontSize: "0.75rem" }}>
                    {t(`activity.type.${item.type}`)}
                  </span>
                  <span style={chamberBadgeStyle}>{t(chamberLabelKey(item.chamber))}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--ads-color-text-muted)" }}>
                    {item.time}
                  </span>
                  <span
                    style={{
                      ...statusBadgeStyle,
                      background: statusColor(item.status),
                      color: item.status === "finished" ? "var(--ads-color-text)" : "var(--ads-color-on-primary)",
                    }}
                  >
                    {t(`activity.status.${item.status}`)}
                  </span>
                </span>
                <span style={teaserTitleStyle}>{t(`activity.items.${item.key}.subject`)}</span>
                <span
                  className="fr-icon-arrow-right-line"
                  aria-hidden="true"
                  style={teaserArrowStyle}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — L'évolution du droit: legislative lifecycle and active texts. */}
      <section className="gov-section" aria-labelledby="legislation-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("legislation.kicker")}</p>
              <h2 id="legislation-title" className="gov-section__title">
                {t("legislation.title")}
              </h2>
              <p className="gov-lead">{t("legislation.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("legislation.allLink"),
                  href: "/legislation",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>

          {/* Lifecycle visualization */}
          <p style={{ margin: "0 0 0.75rem", fontSize: "0.875rem", fontWeight: 600, color: "var(--ads-color-text-muted)" }}>
            {t("legislation.lifecycleTitle")}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginBottom: "2rem",
            }}
            aria-label={t("legislation.lifecycleTitle")}
          >
            {parliamentHome.legislationSteps.map((step, index) => (
              <span key={step.key} style={{ display: "contents" }}>
                <span
                  style={
                    step.key === "debats"
                      ? lifecycleStepActiveStyle
                      : lifecycleStepStyle
                  }
                >
                  {index + 1}. {t(`legislation.stages.${step.key}`)}
                </span>
                {index < parliamentHome.legislationSteps.length - 1 && (
                  <span style={lifecycleArrowStyle} aria-hidden="true">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Active legislative texts */}
          <ul className="fr-grid-row fr-grid-row--gutters" role="list">
            {parliamentHome.legislation.map((text) => (
              <li key={text.id} className="fr-col-12 fr-col-md-6">
                <a href="/legislation" style={legislationCardStyle}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--ads-color-text-muted)" }}>
                      {text.id}
                    </span>
                    <span style={chamberBadgeStyle}>{t(`legislation.chambers.${text.chamber}`)}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--ads-color-text-muted)" }}>{text.date}</span>
                  </span>
                  <span style={teaserTitleStyle}>{t(`legislation.items.${text.key}.title`)}</span>
                  <span style={teaserDescStyle}>{t(`legislation.items.${text.key}.activity`)}</span>
                  <span
                    className="fr-icon-arrow-right-line"
                    aria-hidden="true"
                    style={teaserArrowStyle}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — Les trois chambres: equal institutional importance. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="chambers-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("chambers.kicker")}</p>
              <h2 id="chambers-title" className="gov-section__title">
                {t("chambers.title")}
              </h2>
              <p className="gov-lead">{t("chambers.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("chambers.allLink"),
                  href: "/parlement/chambres",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            {parliamentHome.chambers.map((chamber) => (
              <div key={chamber.key} className="fr-col-12 fr-col-md-4">
                <LinkTile
                  title={t(`chambers.items.${chamber.key}.title`)}
                  desc={t(`chambers.items.${chamber.key}.desc`)}
                  href={chamber.href}
                  iconId="fr-icon-building-line"
                />
                <p
                  style={{
                    margin: "0.625rem 0 0",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "var(--ads-color-primary)",
                    paddingInline: "0.25rem",
                  }}
                >
                  {t(`chambers.items.${chamber.key}.activity`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Participer à la vie démocratique: citizen actions. */}
      <section className="gov-section" aria-labelledby="participation-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("participation.kicker")}</p>
              <h2 id="participation-title" className="gov-section__title">
                {t("participation.title")}
              </h2>
              <p className="gov-lead">{t("participation.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("participation.allLink"),
                  href: "/participation",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            {parliamentHome.participationActions.map((action) => (
              <div key={action.key} className="fr-col-12 fr-col-sm-6 fr-col-lg-4">
                <LinkTile
                  title={t(`participation.items.${action.key}.title`)}
                  desc={t(`participation.items.${action.key}.desc`)}
                  href={action.href}
                  iconId={action.iconId as never}
                />
              </div>
            ))}
          </div>

          {/* MyGouv integration: personal participation space. */}
          <div style={myGouvCardStyle}>
            <span
              className="fr-icon-account-circle-line"
              aria-hidden="true"
              style={{ fontSize: "1.375rem", lineHeight: 1, color: "var(--ads-color-primary)" }}
            />
            <span style={{ fontSize: "0.9375rem", fontWeight: 700, lineHeight: 1.3 }}>
              {t("participation.myGouvLabel")}
            </span>
            <span style={{ fontSize: "0.875rem", lineHeight: 1.55, color: "var(--ads-color-text-muted)" }}>
              {t("participation.myGouvDesc")}
            </span>
            <a
              href="https://sso.gouv.aor/login"
              style={{
                fontWeight: 600,
                fontSize: "0.9375rem",
                textUnderlineOffset: "0.2em",
                color: "var(--ads-color-primary)",
              }}
            >
              {t("participation.myGouvLabel")}
              <span className="fr-icon-arrow-right-line" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* 06 — À l'agenda: upcoming events grouped by day. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="agenda-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("agenda.kicker")}</p>
              <h2 id="agenda-title" className="gov-section__title">
                {t("agenda.title")}
              </h2>
              <p className="gov-lead">{t("agenda.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("agenda.allLink"),
                  href: "/travaux/agenda-du-jour",
                  priority: "secondary",
                  iconId: "fr-icon-calendar-line",
                },
              ]}
            />
          </div>

          {(["today", "tomorrow", "week"] as const).map((when) => {
            const events = parliamentHome.agenda.filter((e) => e.when === when);
            if (events.length === 0) return null;
            return (
              <div key={when} style={agendaGroupStyle}>
                <h3 style={agendaDayStyle}>{t(`agenda.when.${when}`)}</h3>
                {events.map((event) => (
                  <div key={event.key} style={agendaItemStyle}>
                    <span style={agendaTimeStyle}>{event.time}</span>
                    <span style={{ flex: 1 }}>
                      <span style={{ fontWeight: 600 }}>{t(`agenda.items.${event.key}.title`)}</span>
                    </span>
                    <span style={chamberBadgeStyle}>{t(chamberLabelKey(event.chamber))}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* 07 — Comprendre le Parlement: educational / institutional orientation. */}
      <section className="gov-section" aria-labelledby="understand-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("understand.kicker")}</p>
              <h2 id="understand-title" className="gov-section__title">
                {t("understand.title")}
              </h2>
              <p className="gov-lead">{t("understand.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("understand.allLink"),
                  href: "/parlement",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <ul role="list" style={linkListStyle}>
            {parliamentHome.understandLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "var(--ads-color-text)",
                    border: "1px solid var(--ads-color-border)",
                    borderTop: "none",
                    background: "var(--ads-color-background)",
                  }}
                >
                  {t(`understand.items.${link.key}`)}
                  <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — Actualités du Parlement: institutional news, deliberately
          below functional content. News supports the parliamentary
          experience rather than defining it. */}
      <section className="gov-section gov-section--subtle" aria-labelledby="news-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("news.kicker")}</p>
              <h2 id="news-title" className="gov-section__title">
                {t("news.title")}
              </h2>
              <p className="gov-lead">{t("news.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("news.allLink"),
                  href: "/news",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <div className="fr-grid-row fr-grid-row--gutters">
            <div className="fr-col-12 fr-col-lg-7">
              <ArticleCard
                title={t(`news.items.${parliamentHome.news.featured.key}.title`)}
                desc={t(`news.items.${parliamentHome.news.featured.key}.desc`)}
                tag={t(`news.items.${parliamentHome.news.featured.key}.tag`)}
                date={t(`news.items.${parliamentHome.news.featured.key}.date`)}
                href={parliamentHome.news.featured.href}
                size="large"
              />
            </div>
            <div className="fr-col-12 fr-col-lg-5">
              <ul style={cardListStyle}>
                {parliamentHome.news.secondary.map((article) => (
                  <li key={article.href}>
                    <ArticleCard
                      title={t(`news.items.${article.key}.title`)}
                      tag={t(`news.items.${article.key}.tag`)}
                      date={t(`news.items.${article.key}.date`)}
                      href={article.href}
                      size="small"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 09 — Données publiques: open data and public information. */}
      <section className="gov-section" aria-labelledby="open-data-title">
        <div className="gov-section__container">
          <div className="gov-section__header">
            <div>
              <p className="gov-kicker">{t("openData.kicker")}</p>
              <h2 id="open-data-title" className="gov-section__title">
                {t("openData.title")}
              </h2>
              <p className="gov-lead">{t("openData.lead")}</p>
            </div>
            <CtaButtonsGroup
              buttons={[
                {
                  children: t("openData.allLink"),
                  href: "/donnees-publiques",
                  priority: "secondary",
                  iconId: "fr-icon-arrow-right-line",
                },
              ]}
            />
          </div>
          <ul role="list" style={linkListStyle}>
            {parliamentHome.openData.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "var(--ads-color-text)",
                    border: "1px solid var(--ads-color-border)",
                    borderTop: "none",
                    background: "var(--ads-color-background)",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
                    <span
                      className={item.iconId}
                      aria-hidden="true"
                      style={{ fontSize: "1.125rem", lineHeight: 1, color: "var(--ads-color-primary)" }}
                    />
                    {t(`openData.items.${item.key}`)}
                  </span>
                  <span className="fr-icon-arrow-right-line" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
