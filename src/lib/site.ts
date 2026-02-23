export type SiteLang = "en" | "zh";
export const SITE_LAST_UPDATED = "2026-02-23";

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
    home: "主页",
    cv: "简历",
    publications: "学术发表",
    writing: "写作",
    workingPapers: "工作论文"
  }
};

const profiles: Record<SiteLang, ProfileContent> = {
  en: {
    name: "Ziyao Zhang",
    title: "Professor (tenure-track)",
    affiliation: "School of Public Finance and Taxation, Zhongnan University of Economics and Law",
    location: "Wuhan, Hubei, China",
    email: "zhangziyao_econ@163.com",  href: "zhangziyao_econ@163.com",
    links: [{ label: "Affiliation Web", href: "https://csxy.zuel.edu.cn/2022/0826/c7501a304283/page.htm" }]
  },
  zh: {
    name: "张子尧",
    title: "教授（准聘）",
    affiliation: "中南财经政法大学财政税务学院",
    location: "湖北武汉",
    email: "zhangziyao_econ@163.com", href: "zhangziyao_econ@163.com",
    links: [{ label: "学校主页", href: "https://csxy.zuel.edu.cn/2022/0826/c7501a304283/page.htm" }]
  }
};

export function getNav(lang: SiteLang): NavItem[] {
  const prefix = lang === "zh" ? "/zh" : "";

  return [
    { key: "home", label: navLabels[lang].home, href: `${prefix}/` },
    { key: "cv", label: navLabels[lang].cv, href: `${prefix}/cv` },
    { key: "publications", label: navLabels[lang].publications, href: `${prefix}/publications` },
    { key: "writing", label: navLabels[lang].writing, href: `${prefix}/writing` },
    { key: "workingPapers", label: navLabels[lang].workingPapers, href: `${prefix}/working-papers` }
  ];
}

export function getProfile(lang: SiteLang): ProfileContent {
  return profiles[lang];
}
