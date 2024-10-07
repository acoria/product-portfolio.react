import styles from "./FightingSportsCrmBanner.module.scss";
import { ReactComponent as Training } from "../../assets/training.svg";
import { ReactComponent as Clock } from "../../assets/clock.svg";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { ReactComponent as Users } from "../../assets/users.svg";
import { ReactComponent as Grading } from "../../assets/grading.svg";
import { Banner } from "../../components/banner/Banner";

export const FightingSportsCrmBanner: React.FC = () => {
  return (
    <Banner>
      <div className={styles.fightingSportsCrmBanner}>
        <Training className={styles.backgroundImage1} />
        <Clock className={styles.backgroundImage2} />
        <Profile className={styles.backgroundImage3} />
        <Users className={styles.backgroundImage4} />
        <Grading className={styles.backgroundImage5} />
        <Training className={styles.backgroundImage6} />
      </div>
    </Banner>
  );
};
