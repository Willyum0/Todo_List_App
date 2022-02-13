import React, { useEffect, useState } from 'react';
import PageContainer from '../components/PageContainer';
import { getData } from '../logic/DataManager';
import { GiBoatFishing } from "react-icons/gi";
import PropagateLoader from "react-spinners/PropagateLoader";


import '../styles/page.css';

const ListsPage = () => {
  const [loading, setLoading] = useState({ isLoading: false, hasLoaded: false });
  const [display, setDisplay] = useState(<LoadingIcon/>);

  useEffect(() => {
    if(!loading.hasLoaded) {
      const data = getData().then(() => {
        setDisplay(<EmptyListsIcon/>);
      });
      setLoading({ isLoading: false, hasLoaded: true });
    }
  }, []);

  return (
      <PageContainer style={{backgroundColor: 'rgb(41, 41, 59)'}}>
        {display}
      </PageContainer>
  );
};

const EmptyListsIcon = () => {
  return (
    <div className={'empty-lists-container'}>
      <div className={'empty-lists'}>
        <div className={'empty-lists-shapes'}>
          <div className={'empty-lists-backboard'}>
          </div>
          {/*<svg style={{position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%'}}>
            <path d="M350 100 L450 100 Q500 100 530 150 L672 400 Q700 450 620 450 L80 450 Q0 450 30 400 L170 150 Q200 100 250 100 Z" fill="rgb(58, 58, 82)"/>
          </svg>*/}
          <div className={'empty-lists-icon'}>
            <GiBoatFishing style={{fontSize: '8em', fill: 'rgb(41, 41, 59)'}}/>
          </div>
        </div>
        <h2>No lists yet</h2>
      </div>
    </div>
  );
}

const LoadingIcon = () => {
  return (
    <div className={'empty-lists-container'}>
      <div className={'empty-lists'}>
        <div className={'lists-loading-icon'}>
          <PropagateLoader css={{position: 'absolute', top: '50%', left: '47%'}} color={'#494964'} size={20}/>
          <h2>Loading data...</h2>
        </div>
      </div>
    </div>
  );
}

export default ListsPage;
