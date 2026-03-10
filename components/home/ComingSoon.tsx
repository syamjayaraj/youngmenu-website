"use client";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <section className="coming-soon-minimal d-flex align-items-center justify-content-center min-vh-100 overflow-hidden">
      {/* Background Shapes (Pure CSS) */}
      <div className="bg-elements">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container position-relative z-1 text-center">
        <div className="content-box">
          <div className="brand-logo mb-4 animate-fade-in">
            <span className="logo-text">YoungMenu</span>
          </div>
          
          <h1 className="coming-soon-title mb-3 animate-slide-up">
            Coming Soon
          </h1>
          
          <div className="divider mx-auto mb-4"></div>
          
          <p className="description mb-5 animate-slide-up-delayed">
            We are crafting a new digital experience for the modern diner.
          </p>

          <div className="social-links animate-fade-in-delayed">
            <Link href="https://github.com/syamjayaraj/youngmenu" target="_blank" className="social-icon">
              <i className="mdi mdi-github"></i>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .coming-soon-minimal {
          background-color: #002d3a;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          position: relative;
        }

        .bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(254, 200, 2, 0.1) 0%, rgba(254, 200, 2, 0) 100%);
          filter: blur(60px);
          animation: float 20s infinite alternate ease-in-out;
        }

        .shape-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation-duration: 25s;
        }

        .shape-2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: -50px;
          animation-delay: -5s;
        }

        .shape-3 {
          width: 200px;
          height: 200px;
          top: 40%;
          right: 20%;
          background: rgba(254, 200, 2, 0.05);
          animation-duration: 15s;
          animation-delay: -10s;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fec802;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .coming-soon-title {
          font-size: clamp(3rem, 10vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -2px;
          background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .divider {
          width: 60px;
          height: 4px;
          background-color: #fec802;
          border-radius: 2px;
        }

        .description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .social-icon {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1.8rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #fec802;
          transform: translateY(-3px);
        }

        /* Animations */
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(40px, 40px) rotate(10deg); }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out both;
        }

        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }

        .animate-slide-up-delayed {
          animation: slideUp 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.2s both;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1.2s ease-out 0.6s both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(40px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
