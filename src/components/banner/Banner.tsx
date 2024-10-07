import { IBannerProps } from "./IBannerProps";
import styles from "./Banner.module.scss";

export const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.productTitle}>Kampfsport CRM</h1>
      {props.children}
    </div>
  );
};
