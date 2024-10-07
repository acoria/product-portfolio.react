import { AppConfig } from "../AppConfig";
import { Footer } from "../components/footer/Footer";
import { ImageContent } from "../components/imageContent/ImageContent";
import { FightingSportsCrmBanner } from "../features/banner/FightingSportsCrmBanner";
import { Toolbar } from "../features/toolbar/Toolbar";
import { texts } from "../hooks/useTranslation/texts";
import { useTranslation } from "../hooks/useTranslation/useTranslation";
import { DesignScheme } from "../types/DesignScheme";
import { ImagePosition } from "../types/ImagePosition";
import { IProductDetails } from "../types/IProductDetails";
import styles from "./PortfolioPage.module.scss";

export const PortfolioPage: React.FC = () => {
  const { t } = useTranslation();

  const productDetails: IProductDetails[] = [
    {
      title: "Geschützter Mitgliederbereich",
      description:
        "Eine Übersicht über alle Trainings, für die sich ein Schüler registriert hat",
      imageAlt: "Screenshot of Yeoljeong main page",
      imageUrl: "./assets/screenshots/yeoljeong_main_page.png",
    },
    {
      title: "CRM",
      description: "Verwaltung aller Mitglieder an einem zentralen Ort",
      imageUrl: "./assets/screenshots/users.png",
      imageAlt: "Screenshot of users page",
    },
    {
      title: "Kompletter Mobile-Support",
      description:
        "Die Software kann sowohl vom PC als auch vom Handy bedient werden",
      imageUrl: "./assets/screenshots/mobile.png",
      imageAlt: "Screenshot of mobile views",
    },
  ];

  const content = productDetails.map((productDetails, index) => (
    <ImageContent
      imageAlt={productDetails.imageAlt}
      imageUrl={productDetails.imageUrl}
      designScheme={
        index % 2 === 0 ? DesignScheme.LIGHT_MODE : DesignScheme.DARK_MODE
      }
      imagePosition={index % 2 === 0 ? ImagePosition.LEFT : ImagePosition.RIGHT}
    >
      <h1>{productDetails.title}</h1>
      <p>{productDetails.description}</p>
    </ImageContent>
  ));

  return (
    <div className={styles.portfolioPage}>
      <div>
        <Toolbar product={t(texts.productName)} />
        <FightingSportsCrmBanner />
      </div>
      <div>{content}</div>
      <Footer
        imprintUrl={AppConfig.IMPRINT_URL}
        privacyPolicyUrl={AppConfig.PRIVACY_POLICY_URL}
      />
    </div>
  );
};
