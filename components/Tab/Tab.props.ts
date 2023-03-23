import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'smt' | 'mdt';
    color?: 'grey' | 'green' | 'red' | 'ghost' | 'primary';
    href?: string;
    children: ReactNode;
}