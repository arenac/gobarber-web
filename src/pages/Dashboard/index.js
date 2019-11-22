import React from 'react';
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';
import api from '~/services/api';


import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>May 31th</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
    </Container>
  );
}
