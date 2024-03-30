import { Modal, ModalBody } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";

function MenuModal(props) {
  let { showMenu, setShowMenu, categories, styles } = props;
  const router = useRouter();

  return (
    <Modal isOpen={showMenu ? true : false} className={styles.menuModal}>
      <ModalBody className={styles.modalBody}>
        <div
          className={styles.modalIconContainer}
          onClick={() => setShowMenu(false)}
        >
          <i className={["fas fa-times" + " " + styles.modalIcon]}></i>
        </div>

        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <img src="/assets/img/youngmenu-logo.png" />
            </a>
          </Link>
        </div>

        <div className={styles.menu}>
          {categories.map((category) => {
            return (
              <a
                href={`${router.asPath}#${category.category.name}`}
                onClick={() => setShowMenu(false)}
                className={styles.menuLink}
              >
                {category.category && category.category.name}
              </a>
            );
          })}
        </div>
      </ModalBody>
    </Modal>
  );
}

export default MenuModal;
