import { Language } from "../../components/language/Language";
import { IToolbarProps } from "./IToolbarProps";
import styles from "./Toolbar.module.scss";

export const Toolbar: React.FC<IToolbarProps> = (props) => {
  return (
    <div className={styles.toolbar}>
      {typeof props.product === "object" ? (
        props.product
      ) : (
        <h1 className={styles.productTitle}>{props.product}</h1>
      )}
      <Language />
    </div>
  );
};
