import React, { useState } from "react";
import * as R from "ramda";

import styles from "./styles.module.scss";
import { Button, Loader } from "../../../common-ui";
import logoSportEasy from "../../../../assets/img/logoSportEasy.svg";
import { NavLink } from "react-router-dom";
import { Question } from "../../components/Question";
import { SharingModal } from "../../components/SharingModal";
import { apiClient } from "../../../api-client";
import {
  ApiPollCreatePayload,
  ApiQuestionPayload,
} from "../../../api-client/mocks";

export const PollCreate = () => {
  const [form, setForm] = useState({
    email: "",
    title: "",
    description: "",
    questions: [
      {
        description: "",
        question_type: "single_choice",
        choices: [{ description: "" }],
      },
    ],
  } as ApiPollCreatePayload);
  const [formErrors, setFormErrors] = useState({} as { [k: string]: any });
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pollId, setPollId] = useState(null);

  const onSubmit = () => {
    setLoading(true);

    apiClient.lpq
      .createPoll({ payload: form })
      .then((response) => {
        setLoading(false);
        setModalIsOpen(true);
        setPollId(response);
      })
      .catch((response) => {
        setFormErrors(response);
        setLoading(false);
      });
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

            {formErrors.title && (
              <div className={styles.error}>{formErrors.title}</div>
            )}
          </div>

          <div className={styles.emailContainer}>
            <div className={styles.emailLabel}>Ton email : </div>

            <input
              className={styles.emailInput}
              type="text"
              value={form.email}
              onChange={(evt) => setForm({ ...form, email: evt.target.value })}
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
          {formErrors.description && (
            <div className={styles.error}>{formErrors.description}</div>
          )}
        </div>
        {form.questions.map((question, index) => (
          <div className={styles.block}>
            <Question
              index={index + 1}
              onDelete={() => {
                const newQuestions = [...form.questions];
                newQuestions.splice(index, 1);
                setForm({ ...form, questions: newQuestions });
              }}
              question={question}
              setQuestion={(evt: ApiQuestionPayload) =>
                setForm({
                  ...form,
                  questions: R.assocPath([index], evt, form.questions),
                })
              }
              errors={formErrors.questions && formErrors.questions[index]}
            />
          </div>
        ))}
        <div className={styles.addButtonContainer}>
          <Button
            description="+ Ajouter une question"
            onClick={() =>
              setForm({
                ...form,
                questions: [
                  ...form.questions,
                  {
                    description: "",
                    question_type: "single_choice",
                    choices: [{ description: "" }],
                  },
                ],
              })
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

      <SharingModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        pollId={pollId}
      />
    </div>
  );
};
