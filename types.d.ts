import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: HTMLAttributes<HTMLDivElement>;
      span: HTMLAttributes<HTMLSpanElement>;
      p: HTMLAttributes<HTMLParagraphElement>;
      h1: HTMLAttributes<HTMLHeadingElement>;
      h2: HTMLAttributes<HTMLHeadingElement>;
      h3: HTMLAttributes<HTMLHeadingElement>;
      button: ButtonHTMLAttributes<HTMLButtonElement>;
      input: InputHTMLAttributes<HTMLInputElement>;
      select: SelectHTMLAttributes<HTMLSelectElement>;
      option: HTMLAttributes<HTMLOptionElement>;
      form: HTMLAttributes<HTMLFormElement>;
      main: HTMLAttributes<HTMLElement>;
      section: HTMLAttributes<HTMLElement>;
      ul: HTMLAttributes<HTMLUListElement>;
      li: HTMLAttributes<HTMLLIElement>;
    }
  }
} 