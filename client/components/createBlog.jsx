"use client"
import { useState } from "react";

export default function CreateBlog() {
  const [blog, setBlog] = useState({
    userId: '',
    title: '',
    body: ''
  });

  const handleSubmit = () => {
    console.log(blog);
    setBlog({ userId: '', title: '', body: '' });
  };

  return (
    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Create New Blog</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              <div className="mb-3">
                <label className="col-form-label">User Id</label>
                <input 
                  type="number" 
                  className="form-control" 
                  value={blog.userId}
                  onChange={(e) => setBlog({...blog, userId: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Blog Title</label>
                <input 
                  type="text" 
                  className="form-control"
                  value={blog.title}
                  onChange={(e) => setBlog({...blog, title: e.target.value})}
                />
              </div>
              <div className="mb-3">
                <label className="col-form-label">Blog Body</label>
                <textarea 
                  className="form-control"
                  rows="6"
                  value={blog.body}
                  onChange={(e) => setBlog({...blog, body: e.target.value})}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={handleSubmit} className="btn btn-dark">Post Blog</button>
          </div>
        </div>
      </div>
    </div>
  );
};
