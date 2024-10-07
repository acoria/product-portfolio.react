import { Footer } from "../components/footer/Footer";
import { ImageContent } from "../components/imageContent/ImageContent";
import { FightingSportsCrmBanner } from "../features/banner/FightingSportsCrmBanner";
import { DesignScheme } from "../types/DesignScheme";
import { ImagePosition } from "../types/ImagePosition";
import styles from "./PortfolioPage.module.scss";

export const PortfolioPage: React.FC = () => {
  return (
    <div className={styles.portfolioPage}>
      <FightingSportsCrmBanner />
      <div>
        <ImageContent
          imageUrl="./assets/screenshots/yeoljeong_main_page.png"
          imageAlt="Screenshot of Yeoljeong main page"
          designScheme={DesignScheme.LIGHT_MODE}
        >
          <h1>Geschützter Mitgliederbereich</h1>
          <p>
            Eine Übersicht über alle Trainings, für die sich ein Schüler
            registriert hat
          </p>
        </ImageContent>
        <ImageContent
          imageUrl="./assets/screenshots/users.png"
          imageAlt="Screenshot of users page"
          designScheme={DesignScheme.DARK_MODE}
          imagePosition={ImagePosition.RIGHT}
        >
          <h1>CRM</h1>
          <p>Verwaltung aller Mitglieder an einem zentralen Ort</p>
        </ImageContent>
        <ImageContent
          imageUrl="./assets/screenshots/mobile.png"
          imageAlt="Screenshot of mobile views"
          designScheme={DesignScheme.LIGHT_MODE}
          imageExceedContent
        >
          <h1>Kompletter Mobile-Support</h1>
          <p>
            Die Software kann sowohl vom PC als auch vom Handy bedient werden
          </p>
        </ImageContent>
      </div>
      <Footer imprintUrl="toImprint" privacyPolicyUrl="toPrivacyPolicy" />
    </div>
  );
};
