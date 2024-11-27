import { default as React, ReactNode, CSSProperties } from 'react';
interface JumbotronProps {
    title?: string;
    subtitle?: string;
    image?: string;
    description?: string;
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}
declare const Jumbotron: React.FC<JumbotronProps>;
export default Jumbotron;
