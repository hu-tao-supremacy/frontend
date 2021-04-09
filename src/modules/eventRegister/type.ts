import { Question } from "./../../apollo/types.d";
export interface QuestionWithAnswer extends Question {
  answer?: string;
}
