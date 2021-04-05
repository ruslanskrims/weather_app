import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
import { InputField } from "../../assets/inputs/InputField";
import { Button } from "../../assets/button";
import { useFilter, useForecastWeek } from "../../hooks";
import cx from "classnames";

export const ForecastFilter = () => {
  const { setWeek, data } = useForecastWeek();
  const {
    setFilterDispatch,
    selected,
    setSelect,
    min,
    setMin,
    max,
    setMax,
    filtered,
    setFilter,
    filteredDays,
  } = useFilter();

  const initialValues = filteredDays || {
    type: "",
    minTemperature: 0,
    maxTemperature: 0,
  };

  const submitForm = () => {
    if (!min || !max) {
      alert("Min and max required");
      return;
    }

    setFilter(!filtered);
    setFilterDispatch({ selected, min, max });
    setFilter(true);
    setMin("");
    setMax("");
    setSelect("");
  };

  const resetDefaultHandler = () => {
    setWeek(data);
    setFilter(false);
  };

  return (
    <>
      <div className={styles.filter}>
        <Formik initialValues={initialValues} onSubmit={submitForm}>
          {(props) => {
            const { handleChange } = props;
            return (
              <Form>
                <div className={styles.checkboxContainer}>
                  <span
                    className={cx(styles.checkboxContainer_checkbox, {
                      [styles.selected]: selected === "cloudy",
                    })}
                    onClick={() => setSelect("cloudy")}
                    onChange={handleChange}
                  >
                    Облачно
                  </span>
                  <span
                    className={cx(styles.checkboxContainer_checkbox, {
                      [styles.selected]: selected === "sunny",
                    })}
                    onClick={() => setSelect("sunny")}
                    onChange={handleChange}
                  >
                    Солнечно
                  </span>
                  <span
                    className={cx(styles.checkboxContainer_checkbox, {
                      [styles.selected]: selected === "rainy",
                    })}
                    onClick={() => setSelect("rainy")}
                    onChange={handleChange}
                  >
                    Пасмурно
                  </span>
                </div>

                <InputField
                  id="minTemperature"
                  label="Минимальная температура"
                  name="minTemperature"
                  type="number"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
                <InputField
                  id="maxTemperature"
                  label="Максимальная температура"
                  name="maxTemperature"
                  type="number"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
                <Button type="submit" disabled={filtered}>
                  Фильтровать
                </Button>
                <Button onClick={resetDefaultHandler} type="reset">
                  Сбросить
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
