import { Sidebar } from 'flowbite-react';
import { Modal } from '../Modal/Modal';
import { Link } from "react-router-dom";
import clean from '../../assets/icons/clean.svg';
import home from '../../assets/icons/home.svg';
import contact from '../../assets/icons/contact.svg';

const SideBar = ({ showMenu, setShowMenu }) => {

  return (
    <Modal onClose={setShowMenu}>
      <div className={`sidebar-container ${showMenu ? 'sidebar-open' : ''}`}>
        <Sidebar className="vertical-sidebar">
          <Sidebar.Items className="vertical-items">
            <Sidebar.ItemGroup className="vertical-sidebar group">
              <Sidebar.Item  className='sidebar-names'>
                <Link to="/"><img src={home} className='sidebar-icon' />მთავარი</Link>
              </Sidebar.Item>
              <Sidebar.Item   className='sidebar-names'>
                <Link to="/services"> <img src={clean} className='sidebar-icon'/>სერვისები</Link>
              </Sidebar.Item>
              <Sidebar.Item  className='sidebar-names'>
                <Link to="/contact"><img src={contact} className='sidebar-icon' />კონტაქტი</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </Modal>
  );
};

export default SideBar;
