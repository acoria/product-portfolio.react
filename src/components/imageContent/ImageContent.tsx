import { style } from "../../core/utils/style";
import { DesignScheme } from "../../types/DesignScheme";
import { ImagePosition } from "../../types/ImagePosition";
import { IImageContentProps } from "./IImageContentProps";
import styles from "./ImageContent.module.scss";

export const ImageContent: React.FC<IImageContentProps> = (props) => {
  return (
    <div
      className={style(
        styles.imageContent,
        props.imagePosition === ImagePosition.RIGHT
          ? styles.imagePositionRight
          : "",
        props.designScheme === DesignScheme.DARK_MODE
          ? styles.darkMode
          : styles.lightMode
      )}
    >
      <img
        className={style(
          styles.image,
          props.imageExceedContent ? styles.imageExceedContent : ""
        )}
        src={props.imageUrl}
        alt={props.imageAlt}
      />
      {props.children && <div className={styles.content}>{props.children}</div>}
    </div>
  );
};
