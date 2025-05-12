import { SkillType } from "@/app/type/skill";

export const languages: SkillType[] = [
  {
    name: "Languages",
    item: [
      {
        languages: "HTML",
        value: "95",
      },
      {
        languages: "CSS",
        value: "90",
      },
      {
        languages: "JavaScript",
        value: "75",
      },
      {
        languages: "TypeScript",
        value: "25",
      },
    ],
  },
];
export const frontend: SkillType[] = [
  {
    name: "Frontend",
    item: [
      {
        languages: "React",
        value: "80",
      },
      {
        languages: "Next.js",
        value: "65",
      },
      {
        languages: "Tailwind CSS",
        value: "60",
      },
    ],
  },
];
export const backend: SkillType[] = [
  {
    name: "Backend",
    item: [
      {
        languages: "Express",
        value: "30",
      },
      {
        languages: "MongoDB",
        value: "40",
      },
      {
        languages: "Oracle",
        value: "40",
      },
    ],
  },
];
export const tools: SkillType[] = [
  {
    name: "Tools",
    item: [
      {
        languages: "Git",
        value: "80",
      },
    ],
  },
];
export const allSkills = [...languages, ...frontend, ...backend, ...tools];
