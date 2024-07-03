import { CodeLine } from "@/components/Code/Code";
import { getColor } from "@/styles/utils";

export const TREE_MENU_DATA = [
  {
    title: "personal-info",
    items: [
      { title: "bio", color: getColor("accent").salmon },
      { title: "job-experience", color: getColor("accent").green },
      { title: "education", color: getColor("secondary").blue },
    ],
  },
];

export const bioSnippet: CodeLine[] = [
  {
    comment:
      "bio\n \nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];
export const jobSnippet: CodeLine[] = [
  {
    comment:
      "job-experience\n \nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];
export const educationSnippet: CodeLine[] = [
  {
    comment:
      "education\n \nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.\nMy name is Soledad Pattoglio.\nI was born in BUE, but I'm currently based in MAD.",
    isBlock: true,
  },
];

export const LEFT_CONTENT = [
  { id: "bio", title: "bio", snippet: bioSnippet },
  {
    id: "job-experience",
    title: "job-experience",
    snippet: jobSnippet,
  },
  {
    id: "education",
    title: "education",
    snippet: educationSnippet,
  },
];
