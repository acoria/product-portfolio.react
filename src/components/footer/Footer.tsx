import { IFooterProps } from "./IFooterProps";
import styles from "./Footer.module.scss";
import { useTranslation } from "../../hooks/useTranslation/useTranslation";
import { texts } from "../../hooks/useTranslation/texts";
import { Link } from "../link/Link";

export const Footer: React.FC<IFooterProps> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.footer}>
      <Link to={props.imprintUrl} openInNewTab>
        {t(texts.imprint)}
      </Link>
      <Link to={props.privacyPolicyUrl} openInNewTab>
        {t(texts.privacyPolicy)}
      </Link>
    </div>
  );
};
