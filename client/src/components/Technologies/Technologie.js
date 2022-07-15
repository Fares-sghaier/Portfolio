import React from 'react';
import './Technologie.css';
import { FaFire } from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaVuejs} from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { DiNodejsSmall } from 'react-icons/di';
import { BsXDiamondFill } from 'react-icons/bs';
import { SiExpress } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Technologie() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='Technologie__section'>
        <div className='Technologie__wrapper'>
          <h1 className='Technologie__heading'>Technologies Used</h1>
          <div className='Technologie__container'>
            <a  className='Technologie__container-card'>
              <div className='Technologie__container-cardInfo'>
                <div className='icon'>
                  <FaAngular />
                  <FaVuejs />
                  <FaReact />
                </div>
                <h3>Front-end</h3>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Vue</li>
                </ul>
              </div>
            </a>
            <a  className='Technologie__container-card'>
              <div className='Technologie__container-cardInfo'>
                <div className='icon'>
                  <SiExpress />
                  <DiNodejsSmall/>
                </div>
                <h3>Server</h3>
                <ul >
                  <li>ExpressJS</li>
                  <li>NodeJS</li>
                </ul>
             
              </div>
            </a>
            <a className='Technologie__container-card'>
              <div className='Technologie__container-cardInfo'>
                <div className='icon'>
                  <SiMysql />
                  <SiMongodb />
                </div>
                <h3>DataBase</h3>
                <ul>
                  <li>Mysql</li>
                  <li>Mongodb</li>
                </ul>       
              </div>
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Technologie;