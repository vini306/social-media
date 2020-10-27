import {
  Schema, Document, model, Model,
} from 'mongoose';

const PostSchema = new Schema({
  body: {
    type: String,
    required: true,
  },
  username: String,
  comments: {
    message: String,
    username: String,
    createdAt: Date,
  },
  likes: [
    {
      username: String,
      createdAt: Date,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    refs: 'User',
  },
}, {
  timestamps: true,
});

interface IPosts{
    body: String,
    username: String,

    createAt: Date
}

export interface IPostsDocument extends IPosts, Document{

}
export interface IPostsModel extends Model<IPostsDocument>{

}
export default model<IPostsDocument, IPostsModel>('Post', PostSchema);
