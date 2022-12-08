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
    thumb: "/frontimg/img01.JPG",
    skill: [
      "reactJS",
      "javascript",
      "typescript",
      "Recoil",
      "html5",
      "Styled Component",
    ],
    link: "https://yoongmi.github.io/My_Netflix/",
  },
  {
    id: 2,
    title: "todoList",
    thumb: "/frontimg/img02.JPG",
    skill: ["reactJS", "javascript", "typescript", "html5", "Styled Component"],
    link: "https://yoongmi.github.io/React_todo/",
  },
];

export const projectLength = project.length;
