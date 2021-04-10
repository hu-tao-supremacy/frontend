import { Question } from "../../../apollo/types";
export interface QuestionWithAnswer extends Question {
  answer?: string;
}
