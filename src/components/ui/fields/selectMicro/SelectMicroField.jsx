import { useState } from "react";
import styles from "./SelectField.module.scss";
import { v4 as uuid } from "uuid";

const SelectField = ({
    labelText = "",
    selectStateFunction = undefined,
    name = null,
    selectedValue = null,
    values = [],
    labelPreview = "Выберите",
}) => {

    const [selectValue, setSelectValue] = useState(selectValue != null ? selectValue : "none");
    function onChange(e) {
        if (selectStateFunction === undefined) {
            console.warn("You forgot to declare a textState method");
        } else {
            selectStateFunction(e);
            setSelectValue(e.target.value);
        }
    }

    const listItems = [<option key="0" value="none">{labelPreview}</option>];
    listItems.push(values.map((item) => (
        <option key={uuid()} value={item.value}>
            {item.name}
        </option>
    )));
    
    return (
        <div className={styles.selectMicroFieldComponent}>
            <select
                name={name}
                className={styles.selectMicroField}
                value={selectValue}
                onChange={(e) => onChange(e)}
            >
                {listItems}
            </select>
        </div>
    );
};

export default SelectField;