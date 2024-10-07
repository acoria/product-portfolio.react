import styles from "./FightingSportsContent.module.scss";
import { ImageContent } from "../../components/imageContent/ImageContent";
import { DesignScheme } from "../../types/DesignScheme";
import { ImagePosition } from "../../types/ImagePosition";
import { IProductDetails } from "../../types/IProductDetails";

export const FightingSportsContent: React.FC = () => {
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
      <h1 className={styles.title}>{productDetails.title}</h1>
      <p className={styles.description}>{productDetails.description}</p>
    </ImageContent>
  ));
  return <div className={styles.content}>{content}</div>;
};
