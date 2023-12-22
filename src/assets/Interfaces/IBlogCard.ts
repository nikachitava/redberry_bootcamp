export interface IBlogCard {
    blog_image: string;
    author: string,
    release_date: string;
    title: string;
    categories: JSX.Element[];
    description: string;
    readMore: ()=> void;
}