import { renderComponent , expect } from '../../test_helper';
import PossessionBar from '../../../src/components/inplay_bars/possession_bar';

describe('Possession Bar' , () => {
    let component, props, state;

    beforeEach(() => {
        props = {
            title: 'Possession',
            away: 5,
            home: 7,
            homecolour: '#c12a2a',
            awaycolour: '#3a47c1'
        };
        state = {

        };
        component = renderComponent(PossessionBar, props, state);
    });

    it('renders to screen', () => {
        expect(component).to.exist;
    });
    it('displays correct title', () => {
        expect(component.find('h6')).to.contain('Possession');
    });
    it('renders correct style width for home team', () => {
        expect(component.find('.home').css('width')).to.equal('58.0%');
    });
    it('renders correct colour for home team', () => {
        expect(component.find('.home').css('backgroundColor')).to.equal('rgb(193, 42, 42)');
    });
    it('renders home value as percentage', () => {
        expect(component.find('.home-value')).to.contain('58%');
    });
    it('renders correct style width for away team', () => {
        expect(component.find('.away').css('width')).to.equal('42.0%');
    });
    it('renders correct colour for away team', () => {
        expect(component.find('.away').css('backgroundColor')).to.equal('rgb(58, 71, 193)');
    });
    it('renders away value as percentage', () => {
        expect(component.find('.away-value')).to.contain('42%');
    });
    it('does not render a negative number', () => {
        props = {
            title: 'Corners',
            away: -5,
            home: -7
        };
        state = {};
        component = renderComponent(PossessionBar, props, state);
        expect(component.find('.home').css('width')).to.equal('50%');
        expect(component.find('.away').css('width')).to.equal('50%');
    });
});
