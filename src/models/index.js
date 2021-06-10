// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Comment, Note, Products, Company, Inventory } = initSchema(schema);

export {
  Blog,
  Post,
  Comment,
  Note,
  Products,
  Company,
  Inventory
};