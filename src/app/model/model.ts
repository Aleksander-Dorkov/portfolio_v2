export interface ProgrammingSKill {
  name: string,
  svgUrl: string
}

export interface SkillSectionInfo {
  programmingSkills: ProgrammingSKill[],
  sectionTitle: string,
  animation: string
}

export interface ProjectDetails {
  description: string,
  projectTitle: string
  projectImageUrl: string,
  deployedUrl: string,
  backEndGithubUrl: string,
  frontEndGithubUrlUrl: string,
  backEndDependencies: string[]
  frontEndDependencies: string[]
  database: string
}

export interface WorkDetail {
  company: string,
  jobTitle: string,
  timeSpan: string
  duties: string[]
}
