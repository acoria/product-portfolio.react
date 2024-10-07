import { AppConfig } from "../AppConfig";
import { Footer } from "../components/footer/Footer";
import { FightingSportsCrmBanner } from "../features/banner/FightingSportsCrmBanner";
import { FightingSportsContent } from "../features/content/FightingSportsContent";
import { Toolbar } from "../features/toolbar/Toolbar";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import styles from "./PortfolioPage.module.scss";

export const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.portfolioPage}>
      <div>
        <Toolbar product={t(texts.productName)} />
        <FightingSportsCrmBanner />
      </div>
      <FightingSportsContent />
      <Footer
        imprintUrl={AppConfig.IMPRINT_URL}
        privacyPolicyUrl={AppConfig.PRIVACY_POLICY_URL}
      />
    </div>
  );
};
