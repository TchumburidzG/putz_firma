import { Sidebar } from 'flowbite-react';
import { Modal } from '../Modal/Modal';
import { Link } from "react-router-dom";

const menu = {
  "Home": "მთავარი",
  "About Us": "ჩვენს შესახებ",
  "Services": "სერვისები",
  "Contact": "კონტაქტი"
};

const SideBar = ({ showMenu, setShowMenu }) => {
  const closeModal = () => {
    setShowMenu(false);
  };

  const georgianMenu = () => {
    return Object.entries(menu).map(([englishKey, georgianValue]) => (
      <Sidebar.Item key={englishKey} href="#" className='sidebar-names'>
        {georgianValue}
      </Sidebar.Item>
    ));
  };
  // <Link to="/contact">კონტაქტი</Link>
  return (
    <Modal onClose={setShowMenu}>
      <div className={`sidebar-container ${showMenu ? 'sidebar-open' : ''}`}>
        <Sidebar className="vertical-sidebar">
          <Sidebar.Items className="vertical-items">
            <Sidebar.ItemGroup className="vertical-sidebar group">
              <Sidebar.Item  href="#" className='sidebar-names'>
                <Link to="/">მთავარი</Link>
              </Sidebar.Item>
              <Sidebar.Item  href="#" className='sidebar-names'>
                <Link to="/services">სერვისები</Link>
              </Sidebar.Item>
              <Sidebar.Item  href="#" className='sidebar-names'>
                <Link to="/about-us">ჩვენს შესახებ</Link>
              </Sidebar.Item>
              <Sidebar.Item  href="#" className='sidebar-names'>
                <Link to="/contact">კონტაქტი</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </Modal>
  );
};

export default SideBar;
