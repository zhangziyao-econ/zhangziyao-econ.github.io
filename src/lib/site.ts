export type SiteLang = "en" | "zh";

function formatShanghaiDate(date: Date): string {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit"
  }).formatToParts(date);

  const year = parts.find((part) => part.type === "year")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";

  return `${year}-${month}`;
}

const fromEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
  ?.SITE_LAST_UPDATED;
export const SITE_LAST_UPDATED = fromEnv ?? formatShanghaiDate(new Date());

export type NavItem = {
  key: "home" | "cv" | "publications" | "writing" | "workingPapers";
  label: string;
  href: string;
};

type ProfileContent = {
  name: string;
  title: string;
  affiliation: string;
  location: string;
  email: string;
  links: Array<{ label: string; href: string }>;
};

const navLabels: Record<SiteLang, Record<NavItem["key"], string>> = {
  en: {
    home: "Home",
    cv: "CV",
    publications: "Publications",
    writing: "Writing",
    workingPapers: "Working Papers"
  },
  zh: {
    home: "\u4e3b\u9875",
    cv: "\u7b80\u5386",
    publications: "\u5b66\u672f\u53d1\u8868",
    writing: "\u5199\u4f5c",
    workingPapers: "\u5de5\u4f5c\u8bba\u6587"
  }
};

const profiles: Record<SiteLang, ProfileContent> = {
  en: {
    name: "Ziyao Zhang",
    title: "Professor (tenure-track)",
    affiliation: "School of Public Finance and Taxation, Zhongnan University of Economics and Law",
    location: "Wuhan, Hubei, China",
    email: "zhangziyao_econ@163.com",
    links: [{ label: "Affiliation Web", href: "https://csxy.zuel.edu.cn/2022/0826/c7501a304283/page.htm" }]
  },
  zh: {
    name: "\u5f20\u5b50\u5c27",
    title: "\u6559\u6388\uff08\u51c6\u8058\uff09",
    affiliation: "\u4e2d\u5357\u8d22\u7ecf\u653f\u6cd5\u5927\u5b66\u8d22\u653f\u7a0e\u52a1\u5b66\u9662",
    location: "\u6e56\u5317\u6b66\u6c49",
    email: "zhangziyao_econ@163.com",
    links: [{ label: "\u5b66\u6821\u4e3b\u9875", href: "https://csxy.zuel.edu.cn/2022/0826/c7501a304283/page.htm" }]
  }
};

export function getNav(lang: SiteLang): NavItem[] {
  const prefix = lang === "en" ? "/en" : "";
  const homeHref = lang === "en" ? "/en" : "/";

  return [
    { key: "home", label: navLabels[lang].home, href: homeHref },
    { key: "cv", label: navLabels[lang].cv, href: `${prefix}/cv` },
    { key: "publications", label: navLabels[lang].publications, href: `${prefix}/publications` },
    { key: "writing", label: navLabels[lang].writing, href: `${prefix}/writing` },
    { key: "workingPapers", label: navLabels[lang].workingPapers, href: `${prefix}/working-papers` }
  ];
}

export function getProfile(lang: SiteLang): ProfileContent {
  return profiles[lang];
}
