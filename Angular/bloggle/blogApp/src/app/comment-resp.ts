// Define the Reply interface
interface Reply {
  replyContent: string;
  username: string;
}

// Define the CommentResp interface
export interface CommentResp {
  blogId: string;
  comment: string;
  username: string;
  reply: Reply | null;
  createdAt:Date
}

// Define the structure of the response from the backend
export interface CommentResponse {
  data: CommentResp[];
}
