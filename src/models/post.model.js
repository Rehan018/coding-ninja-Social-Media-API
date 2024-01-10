class Post {
  constructor(id, userId, content, likes = [], comments = []) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.likes = likes;
    this.comments = comments;
  }
  addComment(commentId, userId, text) {
    const newComment = { id: commentId, userId, text };
    this.comments.push(newComment);
    return newComment;
  }
  deleteComment(commentId) {
    const index = this.comments.findIndex(
      (comment) => comment.id === commentId
    );
    if (index !== -1) {
      const deleteComment = this.comments.splice(index, 1)[0];
      return deleteComment;
    }
    return null;
  }
}

const posts = {}; // In-memory storage for posts

const getAllPostsByUserId = (userId) => {
  return Object.values(posts).filter((post) => post.userId === userId);
};

const createPost = (userId, content) => {
  const postId = Date.now().toString(); // Unique identifier
  const newPost = new Post(postId, userId, content);
  posts[postId] = newPost;
  return newPost;
};

const updatePostById = (postId, updatedData) => {
  if (posts[postId]) {
    posts[postId] = { ...posts[postId], ...updatedData };
    return posts[postId];
  }
  return null;
};

const deletePostById = (postId) => {
  if (posts[postId]) {
    const deletedPost = { ...posts[postId] };
    delete posts[postId];
    return deletedPost;
  }
  return null;
};

const likePostById = (postId, userId) => {
  if (posts[postId]) {
    if (!posts[postId].likes.includes(userId)) {
      posts[postId].likes.push(userId);
    }
    return posts[postId];
  }
  return null;
};

const dislikePostById = (postId, userId) => {
  if (posts[postId]) {
    posts[postId].likes = posts[postId].likes.filter(
      (likeUserId) => likeUserId !== userId
    );
    return posts[postId];
  }
  return null;
};

const addCommentToPostById=(postId,userId,text)=>{
	if(posts[postId]){
		const commentId=Date.now().toString();
		return posts[postId].addComment(commentId,userId,text);
	}
	return null;
};
const deleteCommentFromPostById=(postId,commentId)=>{
	if(posts[postId]){
		return posts[postId].deleteComment(commentId);
	}
	return  null;
};

export default {
  getAllPostsByUserId,
  createPost,
  updatePostById,
  deletePostById,
  likePostById,
  dislikePostById,
  addCommentToPostById,
  deleteCommentFromPostById,
};
