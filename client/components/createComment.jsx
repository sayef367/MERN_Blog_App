"use client"
import { useState } from "react";
import axios from "axios";

export default function CreateComment(props) {
  const [comment, setComment] = useState({
    blogId: props.blogId, 
    name: '',
    email: '',
    body: ''
  });

  //comment data send the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
    await axios.post('http://localhost:4000/comment', comment)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data)
      });
    setComment({ name: '', email: '', body: '' });
  };

  return (
    <div className="modal fade" id="commentModal" aria-labelledby="commentModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-email fs-5" id="commentModalLabel">Create New comment</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={comment.name}
                  onChange={(e) => setComment({...comment, name: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Enter Email</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={comment.email}
                  onChange={(e) => setComment({...comment, email: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Enter Comment</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  value={comment.body}
                  onChange={(e) => setComment({...comment, body: e.target.value})}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              onClick={handleSubmit} 
              className="btn btn-dark">
              Post comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
