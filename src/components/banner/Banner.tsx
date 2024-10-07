import { IBannerProps } from "./IBannerProps";
import styles from "./Banner.module.scss";
import { ReactComponent as Training } from "../../assets/training.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { ReactComponent as Users } from "../../assets/users.svg";
import { ReactComponent as Grading } from "../../assets/grading.svg";

export const Banner: React.FC<IBannerProps> = (props) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.productTitle}>Kampfsport CRM</h1>
      <div className={styles.bannerBackground}>
        <Training className={styles.backgroundImage1} />
        <Clock className={styles.backgroundImage2} />
        <Profile className={styles.backgroundImage3} />
        <Users className={styles.backgroundImage4} />
        <Grading className={styles.backgroundImage5} />
        <Training className={styles.backgroundImage6} />
      </div>
    </div>
  );
};
