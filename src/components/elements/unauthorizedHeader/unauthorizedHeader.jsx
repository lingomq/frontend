import { LogoImg } from "../../../core/config/publicImages.jsx";
import { useTheme } from "../../../core/hooks/useTheme/useTheme.js";
import { getCurrentLocale, setCurrentLocale } from "../../../core/locales/locales.js";
import { LOCALIZED_TEXT } from "../../../core/locales/localizedText.js";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import SelectField from "../../ui/fields/selectMicro/SelectMicroField.jsx";
import styles from "./unauthorizedHeader.module.scss";

export const UnauthorizedHeader = () => {
  const { theme, setTheme } = useTheme();

  const changeToBlack = () => {
    console.log(getCurrentLocale());
  };

  const changeLanguage = (e) => {
    setCurrentLocale(e.target.value);
    location.reload();
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
          <RoundedButton text={LOCALIZED_TEXT[getCurrentLocale()].unauthorizedHeader.startButtonText} onClick={changeToBlack}>
            
          </RoundedButton>
          <SelectField labelPreview="lang" selectStateFunction={changeLanguage} values={[{name:"russian", value:"RUSSIAN"}, {name:"english", value:"ENGLISH"}]}>

          </SelectField>
        </div>
      </div>
    </div>
  );
};
