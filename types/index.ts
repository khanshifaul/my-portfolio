// types/index.ts
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  githubLink?: string;
  webLink?: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
  tags: string[];
}
