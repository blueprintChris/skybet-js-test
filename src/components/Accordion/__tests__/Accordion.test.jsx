import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Accordion from '../Accordion';
import AccordionItem from '../AccordionItem/AccordionItem';

describe('Accordion', () => {
  const history = createMemoryHistory({ initialEntries: ['/football'] });

  it('should render without crashing', () => {
    render(<Accordion></Accordion>);
  });

  it('should render all accordion items with their titles', () => {
    render(
      <Accordion>
        <AccordionItem textValues={['title 1']}>content 1</AccordionItem>
        <AccordionItem textValues={['title 2']}>content 2</AccordionItem>
        <AccordionItem textValues={['title 3']}>content 3</AccordionItem>
      </Accordion>
    );

    screen.getByText('title 1');
    screen.getByText('title 2');
    screen.getByText('title 3');
  });

  it('should render all accordion items with their content', () => {
    render(
      <Accordion>
        <AccordionItem textValues={['title 1']}>content 1</AccordionItem>
        <AccordionItem textValues={['title 2']}>content 2</AccordionItem>
        <AccordionItem textValues={['title 3']}>content 3</AccordionItem>
      </Accordion>
    );

    screen.getByText('content 1');
    screen.getByText('content 2');
    screen.getByText('content 3');
  });

  it('should render accordion with links if isLinks and navigate to correct route when clicked', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Accordion>
          <AccordionItem textValues={['title 1']} isLink to='/football/event/12345'>
            content 1
          </AccordionItem>
        </Accordion>
      </Router>
    );

    expect(history.location.pathname).toBe('/football');

    const link = screen.getByText('title 1');
    userEvent.click(link);

    expect(history.location.pathname).toBe('/football/event/12345');
  });
});
