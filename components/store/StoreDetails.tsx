import { Row } from "reactstrap";

export function StoreDetails(props) {
  return (
    <section className={styles.landing}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f3f4f5"
          fill-opacity="1"
          d="M0,192L30,170.7C60,149,120,107,180,90.7C240,75,300,85,360,85.3C420,85,480,75,540,85.3C600,96,660,128,720,133.3C780,139,840,117,900,96C960,75,1020,53,1080,58.7C1140,64,1200,96,1260,96C1320,96,1380,64,1410,48L1440,32L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.detailsContainer}>
        <div className={styles.details}>
          <h1>{store.name}</h1>
          <h6>{store.category && store.category.name}</h6>

          <p>{store.about}</p>
        </div>
      </div>
      <div className={styles.detailsCardContainer}>
        <div className={styles.detailsCard}>
          {store.opensAt && store.closesAt ? (
            <Row className={styles.row}>
              <div className={styles.label}>Hours:</div>
              <div className={styles.text}>
                {store.opensAt} - {store.closesAt}
              </div>
            </Row>
          ) : null}
          {store.phoneNumber ? (
            <Row className={styles.row}>
              <div className={styles.label}>Phone Number:</div>
              <div className={styles.text}>
                <a href={`tel:${store.phoneNumber}`}>{store.phoneNumber}</a>
              </div>
            </Row>
          ) : null}
          {store.phoneNumber2 ? (
            <Row className={styles.row}>
              <div className={styles.label}>Phone Number 2: </div>
              <div className={styles.text}>
                <a href={`tel:${store.phoneNumber2}`}>{store.phoneNumber2}</a>
              </div>
            </Row>
          ) : null}
          {store.address ? (
            <Row className={styles.row}>
              <div className={styles.label}>Address:</div>

              <div className={styles.text}>{store.address}</div>
            </Row>
          ) : null}
          {store.email ? (
            <Row className={styles.row}>
              <div className={styles.label}>Email:</div>

              <div className={styles.text}>
                <a href={`mailto:${store.email}`}>{store.email}</a>
              </div>
            </Row>
          ) : null}

          {store.website ? (
            <Row className={styles.row}>
              <div className={styles.label}>Website:</div>
              <div className={styles.text}>
                <a href={store.website}>{store.website}</a>
              </div>
            </Row>
          ) : null}
          {store.upi || store.card ? (
            <Row className={styles.row}>
              <div className={styles.label}>Payment methods:</div>
              CASH
              {store.upi ? <div className={styles.text}>, UPI</div> : null}
              {store.card ? <div className={styles.text}>, CARD</div> : null}
            </Row>
          ) : null}
          <div className={styles.icons}>
            {store.whatsapp ? (
              <a href={`https://wa.me/${store.whatsapp}`}>
                <i className="fab fa-whatsapp"></i>
              </a>
            ) : null}
            {store.facebook ? (
              <a href={store.facebook}>
                <i className="fab fa-facebook"></i>
              </a>
            ) : null}
            {store.instagram ? (
              <a href={store.instagram}>
                <i className="fab fa-instagram"></i>
              </a>
            ) : null}
            {store.youtube ? (
              <a href={store.youtube}>
                <i className="fab fa-youtube"></i>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
