
export default async function favoriteList() {
  const result = await fetch(`http://localhost:4000/favorite`, { cache: 'no-store' });
  const allfavorite = await result.json();
  
  if(allfavorite == []) return <h1 className="text-center">Loading...</h1>

  return (
    <div className="modal fade" id="allFavoriteModal" aria-labelledby="allFavoriteModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="allFavoriteModalLabel">All Favorite List</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div>
              {
                allfavorite.map((favorite) => {
                  return (
                    <div className="card mt-3 ms-3 me-3 p-2" key={favorite.id}>
                      <div>
                        UserId: {favorite.userId} || Id: {favorite.id} <br />
                        title: {favorite.title} <br />
                        body: {favorite.body.slice(0, 100)} <br />
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
