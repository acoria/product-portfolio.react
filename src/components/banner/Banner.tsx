import { IBannerProps } from "./IBannerProps";
import styles from "./Banner.module.scss";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";

export const Banner: React.FC<IBannerProps> = (props) => {
    const {t} = useTranslation()
  return (
    <div className={styles.banner}>
      {props.children}
      <button className={styles.contactButton}>{t(texts.contact)}</button>
    </div>
  );
};
