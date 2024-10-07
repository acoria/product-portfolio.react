import { useState } from "react";
import { LanguageConfig } from "../../i18n/LanguageConfig";
import { Language } from "./types/Language";
import { Value } from "../../core/types/Value";

export const useLanguageStorage = (): Value<Language> => {
  const [language, setLanguageInternal] = useState(Language.EN);

  const setLanguage = (
    value:
      | Language.DE
      | Language.EN
      | ((prevState: Language.DE | Language.EN) => Language.DE | Language.EN)
  ) => {
    setLanguageInternal((previous) => {
      let newValue: Language;
      if (typeof value === "function") {
        newValue = value(previous);
      } else {
        newValue = value;
      }
      LanguageConfig.language = newValue;
      return newValue;
    });
  };

  return [language, setLanguage];
};
