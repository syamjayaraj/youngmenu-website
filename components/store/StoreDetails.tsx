import { IStoreDetails } from "@/model/models";
import imageUrl from "@/utils/generate-image-url";
import RichText from "../RichText";
import Image from "next/image";

interface CustomProps {
  data: IStoreDetails;
}

export function StoreDetails({ data }: CustomProps) {
  return (
    <section className="landing">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,192L30,170.7C60,149,120,107,180,90.7C240,75,300,85,360,85.3C420,85,480,75,540,85.3C600,96,660,128,720,133.3C780,139,840,117,900,96C960,75,1020,53,1080,58.7C1140,64,1200,96,1260,96C1320,96,1380,64,1410,48L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <div className="details-container">
        <div className="details">
          {data?.logo?.data?.attributes?.url && (
            <Image
              src={imageUrl(data?.logo?.data?.attributes?.url)}
              className="logo-image"
              alt="logo-image"
              width={200}
              height={200}
            />
          )}
          <h1>{data?.name}</h1>
          <h6>{data?.store_category?.data?.attributes?.name}</h6>
          <div>
            <RichText data={data?.about} />
          </div>
        </div>
      </div>
      <div className="details-card-container">
        <div className="details-card">
          {data?.hours && (
            <div className="d-flex item">
              <div className="label">Hours:</div>
              <div className="text">{data?.hours}</div>
            </div>
          )}
          {data?.phoneNumber ? (
            <div className="d-flex item">
              <div className="label">Phone Number:</div>
              <div className="text">
                <a href={`tel:${data?.phoneNumber}`}>{data?.phoneNumber}</a>
              </div>
            </div>
          ) : null}
          {data?.phoneNumber2 ? (
            <div className="d-flex item">
              <div className="label">Phone Number 2: </div>
              <div className="text">
                <a href={`tel:${data?.phoneNumber2}`}>{data?.phoneNumber2}</a>
              </div>
            </div>
          ) : null}
          {data?.address ? (
            <div className="d-flex item">
              <div className="label">Address:</div>
              <div className="text">{data?.address}</div>
            </div>
          ) : null}
          {data?.email ? (
            <div className="d-flex item">
              <div className="label">Email:</div>
              <div className="text">
                <a href={`mailto:${data?.email}`}>{data?.email}</a>
              </div>
            </div>
          ) : null}
          {data?.website ? (
            <div className="d-flex item">
              <div className="label">Website:</div>
              <div className="text">
                <a href={data?.website}>{data?.website}</a>
              </div>
            </div>
          ) : null}
          <div className="d-flex payment-section">
            <div className="label">Payment methods:</div>
            {data?.paymentMethod?.cash && <div className="text">CASH</div>}
            {data?.paymentMethod?.upi && <div className="text">UPI</div>}
            {data?.paymentMethod?.card && <div className="text">CARD</div>}
          </div>
          <div className="icons">
            {data?.socialMedia?.whatsapp ? (
              <a href={`https://wa.me/${data?.socialMedia?.whatsapp}`}>
                <i className="mdi mdi-whatsapp"></i>
              </a>
            ) : null}
            {data?.socialMedia?.facebook ? (
              <a href={data?.socialMedia?.facebook}>
                <i className="mdi mdi-facebook"></i>
              </a>
            ) : null}
            {data?.socialMedia?.instagram ? (
              <a href={data?.socialMedia?.instagram}>
                <i className="mdi mdi-instagram"></i>
              </a>
            ) : null}
            {data?.socialMedia?.youtube ? (
              <a href={data?.socialMedia?.youtube}>
                <i className="mdi mdi-youtube"></i>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
