import { CSSProperties } from "react";
import { getBorderRadius, getColor } from "@/styles/utils";

export interface Style {
  [key: string]: CSSProperties;
}

export const darkStyle: Style = {
  'code[class*="language-"]': {
    color: `${getColor("code").variable}`,
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: '"#a9b7c6"',
    fontFamily: "Consolas, Monaco, 'Andale Mono', monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    background: `${getColor("background").lighter}`,
  },
  'pre[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'pre[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'code[class*="language-"]::-moz-selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'code[class*="language-"] ::-moz-selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'pre[class*="language-"]::selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'pre[class*="language-"] ::selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'code[class*="language-"]::selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  'code[class*="language-"] ::selection': {
    color: "inherit",
    background: "rgba(33, 66, 131, .85)",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#2b2b2b",
    padding: ".1em",
    borderRadius: ".3em",
  },
  comment: {
    color: `${getColor("code").comments}`,
  },
  prolog: {
    color: "#808080",
  },
  cdata: {
    color: "#808080",
  },
  delimiter: {
    color: `${getColor("code").key}`,
  },
  boolean: {
    color: "#cc7832",
  },
  keyword: {
    color: `${getColor("code").key}`,
  },
  selector: {
    color: "#cc7832",
  },
  important: {
    color: "#cc7832",
  },
  atrule: {
    color: "#cc7832",
  },
  operator: {
    color: `${getColor("secondary").white}`,
  },
  punctuation: {
    color: `${getColor("secondary").white}`,
  },
  "attr-name": {
    color: "#a9b7c6",
  },
  tag: {
    color: "#e8bf6a",
  },
  "tag.punctuation": {
    color: "#e8bf6a",
  },
  doctype: {
    color: "#e8bf6a",
  },
  builtin: {
    color: "#e8bf6a",
  },
  entity: {
    color: "#6897bb",
  },
  number: {
    color: "#6897bb",
  },
  symbol: {
    color: "#6897bb",
  },
  property: {
    color: "#9876aa",
  },
  constant: {
    color: "#9876aa",
  },
  variable: {
    color: "#9876aa",
  },
  string: {
    color: `${getColor("code").value}`,
  },
  char: {
    color: `${getColor("code").value}`,
  },
  "attr-value": {
    color: "#a5c261",
  },
  "attr-value.punctuation": {
    color: "#a5c261",
  },
  "attr-value.punctuation:first-child": {
    color: "#a9b7c6",
  },
  url: {
    color: "#287bde",
    textDecoration: "underline",
  },
  function: {
    color: `${getColor("code").function}`,
  },
  regex: {
    background: "#364135",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  inserted: {
    background: "#294436",
  },
  deleted: {
    background: "#484a4a",
  },
  "code.language-css .token.property": {
    color: "#a9b7c6",
  },
  "code.language-css .token.property + .token.punctuation": {
    color: "#a9b7c6",
  },
  "code.language-css .token.id": {
    color: "#ffc66d",
  },
  "code.language-css .token.selector > .token.class": {
    color: "#ffc66d",
  },
  "code.language-css .token.selector > .token.attribute": {
    color: "#ffc66d",
  },
  "code.language-css .token.selector > .token.pseudo-class": {
    color: "#ffc66d",
  },
  "code.language-css .token.selector > .token.pseudo-element": {
    color: "#ffc66d",
  },
};
