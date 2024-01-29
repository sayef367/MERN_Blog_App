import axios from "axios";

//post favorite
export function addFavorite(id) {
  // console.log(id)
  const addData = async () => {
    await axios.post(`http://localhost:4000/favorite/${id}`)
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
    }
  addData();
};

//Delete favorite
export function deleteFavorite(id) {
  const deleteData = async ()  => {
    await axios.delete(`http://localhost:4000/favorite/${id}`)
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
  }
  deleteData();
};


export default { addFavorite, deleteFavorite }