import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'>&lt;The Beginning&gt;</span>
                
                <Outlet />                
                <span className='tags bottom-tags'>
                    &lt;The End&gt;
                </span>
            </div>
        </div>
    )
}

export default Layout;