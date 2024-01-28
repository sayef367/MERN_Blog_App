import CreateBlog from "../createBlog";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand pt-0 pb-0 fw-bold fs-3">
            Doodle inc.
          </a>
          <button className="navbar-toggler collapsed" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fw-light">
              <li className="nav-item p-1 ms-2 me-2">
                Comments
              </li>
              <li className="nav-item p-1 ms-2 me-2">
                Favorites
              </li>
              <li className="nav-item ms-2 me-2">
                <button type="button" 
                  className="btn btn-dark btn-sm rounded-5 fw-light" 
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal">
                  Create Blog
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CreateBlog />
    </div>
  );
};