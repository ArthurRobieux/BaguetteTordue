import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Button, Loader } from "../../../common-ui";
import logoSportEasy from "../../../../assets/img/logoSportEasy.svg";
import { NavLink } from "react-router-dom";
import { Question } from "../../components/Question";
import { SharingModal } from "../../components/SharingModal";

export const PollCreate = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    questions: [""],
  });
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalIsOpen(true);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NavLink to="/">
          <img src={logoSportEasy} alt="logo" />
        </NavLink>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.block}>
          <div className={styles.titleContainer}>
            <div className={styles.titleLabel}>Titre du sondage : </div>

            <input
              className={styles.textInput}
              type="text"
              value={form.title}
              onChange={(evt) => setForm({ ...form, title: evt.target.value })}
            />
          </div>

          <textarea
            className={styles.textAreaInput}
            value={form.description}
            onChange={(evt) =>
              setForm({ ...form, description: evt.target.value })
            }
            placeholder="Ajouter une description"
          />
        </div>
        {form.questions.map((_, index) => (
          <div className={styles.block}>
            <Question index={index + 1} />
          </div>
        ))}
        <div className={styles.addButtonContainer}>
          <Button
            description="+ Ajouter une question"
            onClick={() =>
              setForm({ ...form, questions: [...form.questions, ""] })
            }
            invert
            maxWidth
          />
        </div>
      </div>

      <div className={styles.submitContainer}>
        <Button
          description="Créer le sondage"
          disabled={loading}
          onClick={() => onSubmit()}
        />
        {loading && (
          <div className={styles.loaderContainer}>
            <Loader />
          </div>
        )}
      </div>

      <SharingModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};
