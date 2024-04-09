import { Modal, ModalBody } from "reactstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  showCategoryPopup: boolean;
  handleCategoryPopupClose: any;
  data: any;
}

const CategoryModal = ({
  showCategoryPopup,
  handleCategoryPopupClose,
  data,
}: Props) => {
  const pathname = usePathname();

  return (
    <Modal isOpen={showCategoryPopup} className="menu-modal">
      <ModalBody className="modal-body">
        <div
          className="modal-icon-container"
          onClick={handleCategoryPopupClose}
        >
          <i className="mdi mdi-close modal-icon"></i>
        </div>

        {/* <div className="logo-container">
          <Link href="/">
            <img src="/assets/img/youngmenu-logo.png" />
          </Link>
        </div> */}

        <div className="menu">
          {data?.map((item: any, index: number) => (
            <a
              href={`${pathname}#${item}`}
              onClick={handleCategoryPopupClose}
              className="menu-link"
              key={index}
            >
              {item}
            </a>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CategoryModal;
