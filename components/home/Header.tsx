import { IHeader } from "@/model/models";
import RichText from "../RichText";

interface Props {
  pageData: IHeader;
}
export default function Header({ pageData }: Props) {
  return (
    <section className="hero-section position-relative" id="header">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/videos/cafe.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="text-center">
              {/* Main Title */}
              <h1 className="display-3 fw-bold mb-4 text-white hero-title">
                {pageData?.title}
              </h1>

              {/* Description */}
              <div className="home-desc text-white-75 fs-5 mb-5 max-w-2xl mx-auto">
                <RichText data={pageData?.description} />
              </div>

              {/* Scroll Indicator */}
              <div className="mt-5">
                <a
                  href="#virtual-menu"
                  className="text-white text-decoration-none"
                >
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>
                  <div>
                    <span className="scroll-arrow">
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
