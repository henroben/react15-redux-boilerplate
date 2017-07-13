import { renderComponent , expect } from '../../test_helper';
import MatchStatsTable from '../../../src/components/inplay_stats/match_stats_table';

describe('Match Stats Table' , () => {
    let component, props, state;

    beforeEach(() => {
        props = {
            stats: {
                home: {
                    name: 'Chelsea',
                    score: 1,
                    throwins: 0,
                    corners: 2,
                    offsides: 5,
                    freekicks: 1,
                    penalties: 0,
                    yellowcards: 2,
                    redcards: 0,
                    injuries: 0,
                    colour: '#283f85'
                },
                away: {
                    name: 'Manchester',
                    score: 2,
                    throwins: 0,
                    corners: 0,
                    offsides: 2,
                    freekicks: 1,
                    penalties: 1,
                    yellowcards: 0,
                    redcards: 1,
                    injuries: 0,
                    colour: '#c7270e'
                }
            },
            matchtime: '45:00'
        };
        state = {};
        component = renderComponent(MatchStatsTable, props, state);
    });

    it('renders to screen', () => {
        expect(component).to.exist;
    });
    it('displays home team with correct colour', () => {
        expect(component.find('.home-colour').attr('style')).to.equal('background-color: rgb(40, 63, 133); border-bottom: 2px solid; border-bottom-color: #d7c07a;');
        expect(component.find('.home-colour').find('span')).to.contain('Chelsea');
    });
    it('displays away team with correct colour', () => {
        expect(component.find('.away-colour').attr('style')).to.equal('background-color: rgb(199, 39, 14); border-bottom: 2px solid; border-bottom-color: #38d8f1;');
        expect(component.find('.away-colour').find('span')).to.contain('Manchester');
    });
    it('displays icons with data at 100% opacity', () => {
        expect(component.find('th.yellowcards').attr('style')).to.equal('opacity: 1;');
    });
    it('displays icons without data at 30% opacity', () => {
        expect(component.find('th.injuries').attr('style')).to.equal('opacity: 0.3;');
    });
    it('displays correct score', () => {
        expect(component.find('.home-stats').find('.score')).to.contain('1');
        expect(component.find('.away-stats').find('.score')).to.contain('2');
    });
    it('displays correct number of yellow cards', () => {
        expect(component.find('.home-stats').find('.yellowcards')).to.contain('2');
        expect(component.find('.away-stats').find('.yellowcards')).to.contain('0');
    });
    it('displays correct number of red cards', () => {
        expect(component.find('.home-stats').find('.redcards')).to.contain('0');
        expect(component.find('.away-stats').find('.redcards')).to.contain('1');
    });
    it('displays correct number of injuries', () => {
        expect(component.find('.home-stats').find('.injuries')).to.contain('0');
        expect(component.find('.away-stats').find('.injuries')).to.contain('0');
    });
    it('displays correct number of offsides', () => {
        expect(component.find('.home-stats').find('.offsides')).to.contain('5');
        expect(component.find('.away-stats').find('.offsides')).to.contain('2');
    });
    it('displays correct number of corners', () => {
        expect(component.find('.home-stats').find('.corners')).to.contain('2');
        expect(component.find('.away-stats').find('.corners')).to.contain('0');
    });
    it('displays correct number of freekicks', () => {
        expect(component.find('.home-stats').find('.freekicks')).to.contain('1');
        expect(component.find('.away-stats').find('.freekicks')).to.contain('1');
    });
});