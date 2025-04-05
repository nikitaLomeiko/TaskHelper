export interface IMessage {
  id: string;
  answerId?: string;
  typeAuthor: "bot" | "user";
  answerBody?: string;
  body: string;
  time: string;
  isBookmarked: boolean;
}

export interface IMessageNotID extends Omit<IMessage, "id" | "answerId"> {}
