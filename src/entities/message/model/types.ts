export interface IMessage {
  id: string;
  answerId?: string;
  typeAuthor: "bot" | "user";
  answerBody?: string;
  body: string;
  time: string;
  isBookmarked: boolean;
  date?: string;
}

export interface IMessageNotID extends Omit<IMessage, "id" | "answerId"> {}
