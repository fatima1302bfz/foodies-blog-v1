export type CommentBody = {
    comment: string;
    email: string;
    username: string;
    avatar: string
}

export interface CommentType extends CommentBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: 'comment';
}

export interface PostType {
    title: string,
    publishedAt: string,
    name: string,
    likes: number,
    mainImage: string,
    authorImage: string,
    description: string,
    body: string,
    _id: string,
    slug: {_type: string, current: string}
}

export interface LikesType {
    _id: string;
    nblike: number;
    username: string;
    _type: 'like';
}