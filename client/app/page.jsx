"use client"
import axios from "axios";
import { deleteBlog } from "@/lib/delete";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [allBlogs, setAllBlogs] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await axios.get('http://localhost:4000/blogs')
      .then(function (res) {
        setAllBlogs(res.data);
      })
      .catch((error) => {
        if(error.response.data.error === undefined){
          alert('Internal error!');
        } else {
          alert(error.response.data.error);
        };
      });
    };
    getData();
  },[]);

  if(allBlogs === null) return <h1 className="text-center">Loading...</h1>

  return (
    <main className="container mb-5">
      <h1 className="text-center mt-4 mb-4">GET the all Blogs</h1>
      {
        allBlogs.map((item) => {
          return (
            <div className="card mt-3" key={item.id}>
              <div className="row p-3">
                <div className="col-sm-6 col-lg-3 fw-bold">User Id: {item.userId}</div>
                <div className="col-sm-6 col-lg-3 fw-bold">Blog Id: {item.id}</div>
                <div className="col-sm-12 col-lg-6 text-sm-end">
                  <button 
                    type="button" 
                    className="btn btn-outline-danger btn-sm me-2"
                    onClick={() => deleteBlog(item.id)}>
                    Delete
                  </button>
                </div>
              </div>
              <Link 
                href={`/${item.id}`} 
                className="link-underline link-underline-opacity-0 link-body-emphasis" 
              >
                <div className="card-body pt-0 pb-0">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Link>
            </div>
          )
        })
      }
    </main>
  );
};
