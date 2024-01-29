"use client"
import {deleteComment} from "@/lib/delete";
import getAllComments from "@/lib/getAllComments";

export default async function CreateBlog() {
  const allComments = await getAllComments();

  return (
    <div className="modal fade" id="allCommentsModal" aria-labelledby="allCommentsModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="allCommentsModalLabel">All Comments List</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              {
                allComments.map((comment) => {
                  return (
                    <div className="card mt-3 ms-3 me-3 p-2" key={comment.id}>
                      <div>
                        Blog Id: {comment.blogId} || Comment Id: {comment.id} <br />
                        Name: {comment.name} <br />
                        Email: {comment.email} <br />
                        Comment: {comment.body}
                      </div>
                      <div className="mt-2">
                        <button 
                          type="button" 
                          className="btn btn-outline-danger btn-sm me-2"
                          onClick={() => deleteComment(comment.id)}>
                          Delete
                        </button>
                        <button type="button" className="btn btn-outline-success btn-sm me-2">Edit</button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
