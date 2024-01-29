import axios from "axios";

//Delete Blog
export async function deleteBlog(id) {
  await axios.delete(`http://localhost:4000/blogs/${id}`)
  .then((res) => {
    alert(res.data.message);
  })
  .catch((error) => {
    if(error.response.data.error === undefined){
      alert('Internal error!');
    } else {
      alert(error.response.data.error);
    };
  });
};

//Delete Comment
export async function deleteComment(id) {
  await axios.delete(`http://localhost:4000/comment/${id}`)
  .then((res) => {
    alert(res.data.message);
  })
  .catch((error) => {
    if(error.response.data.error === undefined){
      alert('Internal error!');
    } else {
      alert(error.response.data.error);
    };
  });
};


export default {deleteBlog, deleteComment}