// TYPES

export type ApiPoll = {
  title: string;
  description: string;
  questions: {
    id: number;
    description: string;
    type: "single_choice" | "multiple_choices" | "text";
    choices: { id: number; description: string }[];
  }[];
};

export type ApiPollAnswer = {
  name: string;
  questions: {
    id: number;
    choice_ids?: number[];
    text?: string;
  }[];
};

export type ApiPollResults = {
  title: string;
  description: string;
  questions: {
    id: number;
    description: string;
    type: "single_choice" | "multiple_choices" | "text";
    answers: {
      name: string;
      choices?: { id: number; description: string }[];
      text?: string;
    }[];
  }[];
};

// MOCKS

export const poll_1: ApiPoll = {
  title: "Mon sondage",
  description: "Voici mon premier sondage",
  questions: [
    {
      id: 1,
      description: "Vas tu te réinscrire l'année prochaine ?",
      type: "single_choice",
      choices: [
        { id: 1, description: "Oui" },
        { id: 2, description: "Non" },
        { id: 3, description: "Je ne sais pas" },
      ],
    },
    {
      id: 2,
      description: "Qu'a tu préféré cette année dans ton club?",
      type: "multiple_choices",
      choices: [
        { id: 1, description: "La compèt" },
        { id: 2, description: "Les potes" },
        { id: 3, description: "Les barbecue" },
      ],
    },
    {
      id: 3,
      description: "Quelque chose à ajouter ?",
      type: "text",
      choices: [],
    },
  ],
};

export const poll_2: ApiPoll = {
  title: "Ton sport !",
  description: "Voici mon deuxième sondage sur les sports préférés",
  questions: [
    {
      id: 1,
      description: "Quel est ton sport préféré ?",
      type: "single_choice",
      choices: [
        { id: 1, description: "Football" },
        { id: 2, description: "Handball" },
        { id: 3, description: "Basketball" },
        { id: 4, description: "Baseball" },
      ],
    },
  ],
};

export const poll_results_1: ApiPollResults = {
  title: "Mon sondage",
  description: "Voici mon premier sondage",
  questions: [
    {
      id: 1,
      description: "Vas tu te réinscrire l'année prochaine ?",
      type: "single_choice",
      answers: [
        { name: "Arthur", choices: [{ id: 1, description: "Oui" }] },
        { name: "Julie", choices: [{ id: 1, description: "Oui" }] },
        { name: "Lénaic", choices: [{ id: 2, description: "Non" }] },
      ],
    },
    {
      id: 2,
      description: "Qu'a tu préféré cette année dans ton club?",
      type: "multiple_choices",
      answers: [
        {
          name: "Arthur",
          choices: [
            { id: 1, description: "La compèt" },
            { id: 2, description: "Les potes" },
          ],
        },
        { name: "Julie", choices: [{ id: 3, description: "Les barbecue" }] },
        {
          name: "Lénaic",
          choices: [
            { id: 2, description: "Les potes" },
            { id: 3, description: "Les barbecue" },
          ],
        },
      ],
    },
    {
      id: 3,
      description: "Quelque chose à ajouter ?",
      type: "text",
      answers: [
        { name: "Arthur", text: "RAS" },
        { name: "Julie", text: "Le sondage était top" },
        { name: "Lénaic", text: "Je vais quitter le club " },
      ],
    },
  ],
};

export const poll_results_2: ApiPollResults = {
  title: "Ton sport !",
  description: "Voici mon deuxième sondage sur les sports préférés",
  questions: [
    {
      id: 1,
      description: "Quel est ton sport préféré ?",
      type: "single_choice",
      answers: [
        { name: "Arthur", choices: [{ id: 3, description: "Basketball" }] },
        { name: "Julie", choices: [{ id: 4, description: "Baseball" }] },
        { name: "Lénaic", choices: [{ id: 1, description: "Football" }] },
      ],
    },
  ],
};
