import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[];
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog;
  readonly comments?: (Comment | null)[];
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Comment {
  readonly id: string;
  readonly post?: Post;
  readonly content: string;
  constructor(init: ModelInit<Comment>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly image?: string;
  constructor(init: ModelInit<Note>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}

export declare class Products {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  constructor(init: ModelInit<Products>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products>) => MutableModel<Products> | void): Products;
}

export declare class Company {
  readonly id: string;
  readonly name: string;
  readonly country: string;
  readonly city: string;
  readonly street: string;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}