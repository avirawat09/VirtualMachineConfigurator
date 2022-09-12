

import './../SectionBodyInstanceImage.css'
import SectionBodyInstanceImageCard from './../InstanceImageCard';

import { useContext } from 'react';
import { AppContext } from '../../../../../context'
import {instanceImageList} from '../../../../../data/data'

import { render, screen } from '@testing-library/react';

import SectionBodyInstanceImage from '../SectionBodyInstanceImage'



test('renders instance images', () => {
    render(<AppContext><SectionBodyInstanceImage/></AppContext>);
    screen.debug();
    // const linkElement = screen.getByText(/HVC/);
    // expect(linkElement).toBeInTheDocument();
  });
  