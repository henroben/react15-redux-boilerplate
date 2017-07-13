import { renderComponent , expect } from '../../test_helper';
import MatchProgressTracker from '../../../src/components/inplay_stats/match_progress_tracker';

describe('Match Progress Tracker' , () => {
    let component, props, state;

    beforeEach(() => {
        props = {
            matchtime: '45:00'
        };
        // Need to set state, as component uses mapStateToProps
        state = {
            match: {
                tracker: {
                    home: [
                        {
                            event: "YellowCard",
                            player: "Warren Sanderson  (1.795 , 5400, 3) = 1942",
                            team: "Home",
                            teamName: "Bournemouth",
                            time: "32:22",
                            timestamp: "1499691011"
                        }
                    ],
                    away: [
                        {
                            event: "Score",
                            player: "Dan Bell  (1.240533 , 5400, 3) = 3212",
                            team: "Away",
                            teamName: "Bournemouth",
                            time: "53:32",
                            timestamp: "1499691217"
                        }
                    ]
                }
            },
            teams: {
                away: {
                    colour: 5
                },
                home: {
                    colour: 1
                },
                teamcolours: [ '', '#c7270e', '#283f85', '#eeefef', '#80b3ed', '#791422', '#c7270e', '#efa501', '#1d1d1d', '#efa501', '#efa501', '#c7270e', '#c7270e',
                    '#283f85', '#eeefef', '#eeefef', '#eeefef', '#058f32', '#efa501', '#c7270e', '#FF7300', '#283f85', '#80b3ed', '#c7270e', '#058f32', '#c7270e', '#eeefef' ]
            }
        };
        component = renderComponent(MatchProgressTracker, props, state);
    });

    it('renders to screen', () => {
        expect(component).to.exist;
    });
    it('displays correct home colour', () => {
        expect(component.find('.home').attr('style')).to.equal('background-color: rgb(199, 39, 14);');
    });
    it('displays correct away colour', () => {
        expect(component.find('.away').attr('style')).to.equal('background-color: rgb(121, 20, 34);');
    });
    it('renders correct width for elapsed time bar', () => {
        expect(component.find('.past').css('width')).to.equal('50%');
    });
    it('renders correct width for remaining time bar', () => {
        expect(component.find('.future').css('width')).to.equal('50%');
    });
    it('renders event at correct location on timeline for home team', () => {
        expect(component.find('.home-events').find('.event').attr('style')).to.equal('margin-left: 37%;');
    });
    it('renders event at correct location on timeline for away team', () => {
        expect(component.find('.away-events').find('.event').attr('style')).to.equal('margin-left: 58%;');
    });
});