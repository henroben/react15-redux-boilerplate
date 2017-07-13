import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';


describe('Inplay App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders to screen', () => {
    expect(component).to.exist;
  });
});
