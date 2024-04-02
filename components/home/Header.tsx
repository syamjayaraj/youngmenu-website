import { IHeader } from "@/model/models";
import RichText from "../RichText";

interface customProps {
  pageData: IHeader;
}
export default function Header({ pageData }: customProps) {
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
                  href="#search-menu"
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

      <div
        className="modal fade bd-example-modal-lg"
        id="watchvideomodal"
        data-keyboard="false"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
          <div className="modal-content home-modal">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <video id="VisaChipCardVideo" className="video-box" controls>
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
