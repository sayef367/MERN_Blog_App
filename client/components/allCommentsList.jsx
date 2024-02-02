"use client"
import {deleteComment} from "@/lib/delete";
import { useEffect, useState } from "react";
import EditComment from "./editComment";

export default function CreateBlog() {
  const [allComments, setAllComments] = useState(null);
  const [updateData, setUpdateData] = useState({});

  //get all comments from the server
  useEffect(() => {
    const getData = async () => {
      const result = await fetch("http://localhost:4000/comment");
      setAllComments(await result.json());
    };
    getData();
  },[]);

  return (
    <>
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
                  allComments == null ? <h2>Loading...</h2>
                  :
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
                            className="btn btn-outline-success btn-sm me-2"
                            data-bs-toggle="modal" 
                            data-bs-target="#exampleModalToggle2"
                            onClick={() => setUpdateData(comment)}>
                            Edit
                          </button>
                          <button 
                            type="button" 
                            className="btn btn-outline-danger btn-sm me-2"
                            onClick={() => deleteComment(comment.id)}>
                            Delete
                          </button>
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
      <EditComment data={updateData}/>
    </>
  );
};
