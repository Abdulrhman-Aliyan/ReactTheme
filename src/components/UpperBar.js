import './UpperBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar, Button } from '@mui/material';

import { US, TR, SA, HiOutlineBell,HiOutlineBookmark, HiSearch, HiArrowsExpand, HiOutlineCalendar, HiOutlineMail, HiOutlineUserGroup, HiStar} from './icons';
import { MdFormatSize } from "react-icons/md";
import  Dropdown  from "./Dropdown";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/styles';

const UpperBar = () => {
  return (
    <AppBar className='upperBar' position="fixed">
      <Toolbar className="toolbar">
        <div className='generalItems'>
        <ul>
          <li>
            <button>
              <HiOutlineCalendar />
            </button>
          </li>

          <li>
            <button>
              <HiOutlineMail />
            </button>
          </li>

          <li>
            <button>
              <HiOutlineUserGroup />
            </button>
          </li>

          <li>
            <button className='star'>
              <HiStar />
            </button>
          </li>
          <li>
            <button className=''>
                <HiStar />
            </button>
          </li>
        </ul>
        </div>
      
        <div className='profileItems'>
          <ul>
            <li class='avater'>
              <Avatar src='../'/>
              <div className='avaterText'>
                <Typography variant="body1" className='name'>
                  TestTest
                </Typography>
                <Typography variant="body2" className='position'>
                  Test
                </Typography>
              </div>
            </li>
            
            <li>
              <button>
                <HiOutlineBell />
              </button>
            </li>

            <li>
              <button>
                <HiOutlineBookmark />
              </button>
            </li>

            <li>
              <button>
                <HiSearch />
              </button>
            </li>

            <li>
              <button>
                <HiArrowsExpand />
              </button>
            </li>

            <li>
              <button>
                <MdFormatSize />
              </button>
            </li>

            <li>
              <button className='lang'>
                <US />
                <span>EN</span>
              </button>
            </li>
          </ul>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default UpperBar