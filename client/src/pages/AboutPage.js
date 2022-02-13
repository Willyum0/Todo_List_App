import React from 'react';
import PageContainer from '../components/PageContainer';
import ImageTitle from '../components/ImageTitle';
import Paragraph from '../components/Paragraph';
import ElementDisplay from '../components/ElementDisplay';
import Element from '../components/Element';
import { homeTitle, homePara1Title, homePara1Text } from '../content';
import RuleIcon from '@mui/icons-material/Rule';
import ViewListIcon from '@mui/icons-material/ViewList';

const AboutPage = () => {
  return (
    <PageContainer >
      <ImageTitle text={homeTitle} />
      <Paragraph title={homePara1Title} text={homePara1Text} />
      <ElementDisplay>
        <Element icon={<RuleIcon style={{fill: 'rgb(90, 16, 124)', fontSize: '72px'}}/>}/>
        <Element icon={<ViewListIcon style={{fill: 'rgb(90, 16, 124)', fontSize: '65px'}}/>}/>
      </ElementDisplay>
    </PageContainer>
  );
};

export default AboutPage;

