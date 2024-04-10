import { IHeader } from "@/model/models";
import RichText from "../RichText";

interface Props {
  pageData: IHeader;
}
export default function Header({ pageData }: Props) {
  return (
    <section className="bg-home-2 align-items-center d-flex" id="#header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="text-center">
              <h1 className="display-5 fw-normal">
                <span className="fw-bold">{pageData?.title}</span>
              </h1>
              <div className="home-desc text-muted mt-4">
                <RichText data={pageData?.description} />
              </div>
              <div className="pt-2 mt-5">
                <a
                  href="#virtual-menu"
                  data-bs-toggle="modal"
                  data-bs-target="#watchvideomodal"
                  className="video-icon-btn bg-white"
                >
                  <span className="play-shadow">
                    <span className="home-btn">
                      <i className="mdi mdi-arrow-down text-center"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
