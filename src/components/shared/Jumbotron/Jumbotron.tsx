import React, { ReactNode, CSSProperties } from 'react';
import styles from './Jumbotron.module.scss';

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
    <div className={`${styles.container} ${className}`} style={style}>
      {image && <img src={image} alt={title || 'Jumbotron image'} className={styles.image} />}
      <div className={styles.content}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
