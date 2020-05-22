import { User } from './user';

export class Post{
    id: number;
    title: string;
    body: string;
    userId: number;
    user: User;
}
