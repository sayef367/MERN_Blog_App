"use client"
import { useEffect, useState } from "react";
import axios from "axios";

export default function EditComment({data}) {
  const [updateComment, setUpdateComment] = useState({});

  useEffect(() => {
    setUpdateComment(data);
  },[data]);

  //comment data send the server
  const updateHandleSubmit = async (e) => {
    e.preventDefault();
    await axios.put('http://localhost:4000/comment', updateComment)
      .then((res) => {
        alert(res.data.message);
        console.log(res.data)
      });
    setUpdateComment({ name: '', email: '', body: '' });
  };
  
  return (
    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-email fs-5" id="commentModalLabel">Update comment</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <label className="col-form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={updateComment.name}
                  onChange={(e) => setUpdateComment({...updateComment, name: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Email</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={updateComment.email}
                  onChange={(e) => setUpdateComment({...updateComment, email: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Comment</label>
                <textarea 
                  className="form-control"
                  rows="4"
                  value={updateComment.body}
                  onChange={(e) => setUpdateComment({...updateComment, body: e.target.value})}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              onClick={updateHandleSubmit} 
              className="btn btn-dark">
              Update comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
