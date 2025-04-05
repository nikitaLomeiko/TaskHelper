export interface IMessage{
    id: string;
    typeAuthor: 'bot' | 'user'
    body: string;
    time: string;
}