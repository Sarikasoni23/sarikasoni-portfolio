import Image from 'next/image';
import styles from '../styles/ProjectCardMore.module.css';

const ProjectCardMore = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <a
          href="https://github.com/Sarikasoni23"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.underline}
        >
          View More
        </a>
      </div>
    </div>
  );
};

export default ProjectCardMore;