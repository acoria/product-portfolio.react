import { ReactElement } from "react";
import { DesignScheme } from "../../types/DesignScheme";
import { ImagePosition } from "../../types/ImagePosition";

export interface IImageContentProps {
  children?: ReactElement | ReactElement[];
  imageUrl: string;
  imageAlt: string;
  imageExceedContent?: boolean;
  imagePosition?: ImagePosition;
  designScheme: DesignScheme;
}
