import { IBannerProps } from "./IBannerProps";
import styles from "./Banner.module.scss";

export const Banner: React.FC<IBannerProps> = (props) => {
  return <div className={styles.banner}>{props.children}</div>;
};
