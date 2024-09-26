export interface ProjectCardProp {
  imageSrc: string;
  title: string;
  description: string;
  hosted_link?: string;
  github_repo_link?: string;
}

export interface SkillCardProp {
  domain: string;
  skills: string[];
}

export interface ProjectModalProp {
  trigger: React.ReactNode;
  hosted_link?: string;
  github_repo_link?: string;
}
