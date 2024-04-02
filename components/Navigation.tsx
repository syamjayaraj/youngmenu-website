import Link from "next/link";

export default function Navigation({ data }: any) {
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-white fixed-top navbar-custom sticky sticky-light"
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand logo text-uppercase" href="/">
          <img
            src={`http://localhost:1337${data?.logo?.data?.attributes?.url}`}
            className="logo-dark"
            alt=""
            height="40"
          />
          <img
            src={`http://localhost:1337${data?.logo?.data?.attributes?.url}`}
            className="logo-light"
            alt=""
            height="40"
          />
          {/* <span className="fw-bold">YoungMenu</span> */}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto" id="navbar-navlist">
            {data?.navItem?.map((item: any, index: number) => {
              return (
                <li className="nav-item" key={"nav-item" + index}>
                  <Link className="nav-link" href={item?.url} scroll={true}>
                    {item?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
