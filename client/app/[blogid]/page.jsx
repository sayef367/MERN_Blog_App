import CreateComment from "@/components/createComment";
import Favorite from "@/components/favorite";
import getPost from "@/lib/getPost";

export default async function Page({ params }) {
  const { blogid } = params;
  const data = await getPost(blogid);
  const post = data.getBlog;
  const comments = data.blogComments;
  if(!data) return <h2>Loading...</h2>

  return (
    <div className="container mt-5">
      <div className="input-group">
        <div className="me-5">
          <h5>User Id:- {post.userId}</h5>
          <h5>Blog Id:- {post.id}</h5>
        </div>
        <Favorite id={post.id}/>
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="card mt-5">
        <h3 className="ps-3 pt-3">All Post comment</h3>
        {
          comments.map((comment) => {
            return (
              <div className="card mt-3 ms-3 me-3 p-2" key={comment.id}>
                <p>
                  Blog Id:- {comment.blogId} <br />
                  Name:- {comment.name} <br />
                  Email:- {comment.email}
                </p>
                <p>{comment.body}</p>
              </div>
            )
          })
        }
        <div className="p-3">
          <button 
            type="button" 
            className="btn btn-outline-secondary" 
            data-bs-toggle="modal" 
            data-bs-target="#commentModal">
            Add Comment
          </button>
        </div>
        <CreateComment blogId={post.id}/>
      </div>
    </div>
  );
};
