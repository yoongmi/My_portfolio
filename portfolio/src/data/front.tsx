export interface Iproject {
  id: number;
  title: string;
  thumb: string;
  skill: string[];
  link: string;
}

export const project = [
  {
    id: 1,
    title: "넷플릭스 클론",
    thumb: "/frontimg/img01.jpg",
    skill: ["reactJS", "javascript", "typescript", "Recoil", "scss"],
    link: "https://yoongmi.github.io/My_Netflix/",
  },
];

export const projectLength = project.length;
