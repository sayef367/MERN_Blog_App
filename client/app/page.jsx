
import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
// import { useEffect, useState } from "react";

export default async function Home() {
  const allBlogs = await getAllPosts();
  // const [allBlogs, setAllBlogs] = useState([]);
  // useEffect(async () => {
  //   const result = await fetch("http://localhost:4000/blogs");
  //   const data = result.json();
  //   setAllBlogs(data);
  // },[]);
  // if(!allBlogs) return <h2>Loading...</h2>

  return (
    <main className="container">
      <h1 className="text-center mt-4 mb-4">GET the all Blogs</h1>
      {
        allBlogs.map((item) => {
          return (
            <Link 
              href={`/${item.id}`} 
              className="card mt-3 link-underline link-underline-opacity-0 link-body-emphasis" 
              key={item.id}
            >
              <div className="row p-3">
                <div className="col-sm-6 col-lg-3 fw-bold">User Id: {item.userId}</div>
                <div className="col-sm-6 col-lg-3 fw-bold">Blog Id: {item.id}</div>
                <div className="col-sm-12 col-lg-6 text-sm-end">
                  <button type="button" className="btn btn-outline-danger btn-sm me-2">Delete</button>
                  <button type="button" className="btn btn-outline-success btn-sm me-2">Edit</button>
                  <button type="button" className="btn btn-outline-secondary btn-sm ">Mark</button>
                </div>
              </div>
              <div className="card-body pt-0 pb-0">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Link>
          )
        })
      }
    </main>
  );
};
