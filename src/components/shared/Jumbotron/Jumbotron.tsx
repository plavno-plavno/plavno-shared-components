import React, { ReactNode, CSSProperties } from 'react';
import './styles.css';

interface JumbotronProps {
  title?: string;
  subtitle?: string;
  image?: string;
  description?: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  subtitle,
  image,
  description,
  children,
  style,
  className = '',
}) => {
  return (
    <div className={`jumbotron ${className}`} style={style}>
      {image && <img src={image} alt={title || 'Jumbotron image'} className="jumbotron-image" />}
      <div className="jumbotron-content">
        {title && <h1 className="jumbotron-title">{title}</h1>}
        {subtitle && <h2 className="jumbotron-subtitle">{subtitle}</h2>}
        {description && <p className="jumbotron-description">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
