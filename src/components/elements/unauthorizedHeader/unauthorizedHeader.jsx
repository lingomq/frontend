import {
  LogoImg,
  ThemePaliterImg,
} from "../../../core/config/publicImages.jsx";
import { useTheme } from "../../../core/hooks/useTheme/useTheme.js";
import {
  getCurrentLocale,
  setCurrentLocale,
} from "../../../core/locales/locales.js";
import { LOCALIZED_TEXT } from "../../../core/locales/localizedText.js";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import SelectField from "../../ui/fields/selectMicro/SelectMicroField.jsx";
import ModalManager from "../../ui/modal/ModalManager.js";
import { modalSize } from "../../ui/modal/ModalSize.js";
import { ThemePicker } from "../themePicker/themePicker.jsx";
import styles from "./unauthorizedHeader.module.scss";

export const UnauthorizedHeader = () => {
  const { theme, setTheme } = useTheme();

  const changeToBlack = () => {};

  const changeLanguage = (e) => {
    setCurrentLocale(e.target.value);
    location.reload();
  };

  const showThemePicker = () => {
    console.log("sho");
    ModalManager.addModal(modalSize.SMALL, <ThemePicker/>);
  }

  return (
    <div className={styles.headerWrap}>
      <div className={styles.header}>
        <img src={LogoImg} className={styles.logo} alt="logo" />
        <div className={styles.nav}>
          <a className={styles.navigationLink} href="https://google.com">
            {LOCALIZED_TEXT[getCurrentLocale()].unauthorizedHeader.start}
          </a>
          <a className={styles.navigationLink} href="https://google.com">
            {LOCALIZED_TEXT[getCurrentLocale()].unauthorizedHeader.about}
          </a>
          <a className={styles.navigationLink} href="https://google.com">
            {LOCALIZED_TEXT[getCurrentLocale()].unauthorizedHeader.faq}
          </a>
          <RoundedButton
            text={
              LOCALIZED_TEXT[getCurrentLocale()].unauthorizedHeader
                .startButtonText
            }
            onClick={changeToBlack}
          ></RoundedButton>
          <SelectField
            labelPreview="lang"
            selectStateFunction={changeLanguage}
            values={[
              { name: "russian", value: "RUSSIAN" },
              { name: "english", value: "ENGLISH" },
            ]}
          ></SelectField>
          <div className={styles.themePaliterButton} onClick={showThemePicker}>
            <img src={ThemePaliterImg} alt="theme-paliter" />
          </div>
        </div>
      </div>
    </div>
  );
};
