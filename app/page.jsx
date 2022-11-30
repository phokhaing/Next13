"use client";

import { use } from "react";
// const listCustomers = async () => {
//   let posts = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return posts.json();
// };

export default function Page() {
  // let { customers } = use(listCustomers());
  // console.log(customers);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-between">
                <div className="col-md-8">
                  <form className="d-flex flex-wrap align-items-center">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                      Search
                    </label>
                    <div className="me-3">
                      <input
                        type="search"
                        className="form-control my-1 my-md-0"
                        id="inputPassword2"
                        placeholder="Search..."
                      />
                    </div>
                    <label htmlFor="status-select" className="me-2">
                      Sort By
                    </label>
                    <div className="me-sm-3">
                      <select
                        className="form-select my-1 my-md-0"
                        id="status-select"
                      >
                        <option selected>All</option>
                        <option value={1}>Name</option>
                        <option value={2}>Post</option>
                        <option value={3}>Followers</option>
                        <option value={4}>Followings</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                  <div className="text-md-end mt-3 mt-md-0">
                    <button
                      type="button"
                      className="btn btn-success waves-effect waves-light me-1"
                    >
                      <i className="mdi mdi-cog" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger waves-effect waves-light"
                      data-bs-toggle="modal"
                      data-bs-target="#custom-modal"
                    >
                      <i className="mdi mdi-plus-circle me-1" /> Add New
                    </button>
                  </div>
                </div>
                {/* end col*/}
              </div>{" "}
              {/* end row */}
            </div>
          </div>{" "}
          {/* end card */}
        </div>
        {/* end col*/}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-3.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Freddie J. Plourde
                  </a>
                </h4>
                <p className="text-muted">
                  @Founder <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      websitename.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$2563</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$29.8k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>1125</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-4.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Christopher Gallardo
                  </a>
                </h4>
                <p className="text-muted">
                  @Webdesigner <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      abcweb.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$12.7k</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$65.3k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>2184</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-5.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Joseph M. Rohr
                  </a>
                </h4>
                <p className="text-muted">
                  @Webdesigner <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      mywebs.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$1021</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$25.6k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>325</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-6.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Mark K. Horne
                  </a>
                </h4>
                <p className="text-muted">
                  @Director <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      profileq.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$7845</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$16.7k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>5846</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-7.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    James M. Fonville
                  </a>
                </h4>
                <p className="text-muted">
                  @Manager <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      coolweb.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$4851</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$10.2k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>895</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-8.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Jade M. Walker
                  </a>
                </h4>
                <p className="text-muted">
                  @Programmer <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      supported.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$4560</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$15.3k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>742</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-2.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Marie E. Tate
                  </a>
                </h4>
                <p className="text-muted">
                  @Webdeveloper <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      website.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$3520</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$4587</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>423</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-9.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Elyse D. Davidson
                  </a>
                </h4>
                <p className="text-muted">
                  @Webdesigner <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      dumosite.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$7851</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$16.8k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>1036</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
        <div className="col-lg-4">
          <div className="text-center card">
            <div className="card-body">
              <div className="pt-2 pb-2">
                <img
                  src="/static/assets/images/users/user-10.jpg"
                  className="rounded-circle img-thumbnail avatar-xl"
                  alt="profile-image"
                />
                <h4 className="mt-3">
                  <a href="extras-profile.html" className="text-dark">
                    Sarah E. Goin
                  </a>
                </h4>
                <p className="text-muted">
                  @Manager <span> | </span>{" "}
                  <span>
                    {" "}
                    <a href="#" className="text-pink">
                      webion.com
                    </a>{" "}
                  </span>
                </p>
                <button
                  type="button"
                  className="btn btn-primary btn-sm waves-effect waves-light"
                >
                  Message
                </button>
                <button
                  type="button"
                  className="btn btn-light btn-sm waves-effect"
                >
                  Follow
                </button>
                <div className="row mt-4">
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$7421</h4>
                      <p className="mb-0 text-muted text-truncate">Post</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>$29.5k</h4>
                      <p className="mb-0 text-muted text-truncate">Followers</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="mt-3">
                      <h4>11k</h4>
                      <p className="mb-0 text-muted text-truncate">
                        Followings
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* end row*/}
              </div>{" "}
              {/* end .padding */}
            </div>
          </div>{" "}
          {/* end card*/}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      <div className="row">
        <div className="col-12">
          <div className="text-end">
            <ul className="pagination pagination-rounded justify-content-end">
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript: void(0);"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">«</span>
                  <span className="visually-hidden">Previous</span>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="javascript: void(0);">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript: void(0);">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript: void(0);">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript: void(0);">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="javascript: void(0);">
                  5
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link"
                  href="javascript: void(0);"
                  aria-label="Next"
                >
                  <span aria-hidden="true">»</span>
                  <span className="visually-hidden">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* end row */}
    </>
  );
}
