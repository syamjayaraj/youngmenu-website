export function ContactDetails() {
  return (
    <div className="contact-details">
      <h2 className="contact-details__heading">Floyet Labs &amp; Technologies LLP</h2>
      <ul className="contact-details__list">
        <li>
          <span className="contact-details__label">Address</span>
          <span>
            Door No: 2211, 2/1149/I 100
            <br />
            Hilite Business Park
            <br />
            Kozhikode – 673014
          </span>
        </li>
        <li>
          <span className="contact-details__label">Email</span>
          <a href="mailto:info@floyet.com">info@floyet.com</a>
        </li>
        <li>
          <span className="contact-details__label">Phone</span>
          <a href="tel:+919746742650">+91 9746742650</a>
        </li>
      </ul>
      <p className="contact-details__note">
        We typically respond within one business day. For demo requests, include your
        business name and location.
      </p>
    </div>
  );
}
