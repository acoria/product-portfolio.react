import { IFooterProps } from "./IFooterProps";
import styles from "./Footer.module.scss";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";

export const Footer: React.FC<IFooterProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <a href={props.imprintUrl}>{t(texts.imprint)}</a>
      <a href={props.privacyPolicyUrl}>{t(texts.privacyPolicy)}</a>
    </div>
  );
};
