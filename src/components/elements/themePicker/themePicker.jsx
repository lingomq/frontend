import { useTheme } from "../../../core/hooks/useTheme/useTheme.js";
import { getCurrentLocale } from "../../../core/locales/locales";
import { LOCALIZED_TEXT } from "../../../core/locales/localizedText";
import RoundedButton from "../../ui/buttons/rounded/RoundedButton.jsx";
import styles from './themePicker.module.scss';

export const ThemePicker = () => {
    const { theme, setTheme } = useTheme();

    const selectTheme = (e) => {
        let themeName = e.target.value;
        console.log(themeName);
        setTheme(themeName);
    }

    return (
        <div className={styles.themePicker}>
            <h2 className={styles.title}>{LOCALIZED_TEXT[getCurrentLocale()].themePicker.title}</h2>
            <RoundedButton value="dark" onClick={selectTheme} text="Dark theme"/>
            <RoundedButton value="light" onClick={selectTheme} text="Light theme"/>
        </div>
    )
}