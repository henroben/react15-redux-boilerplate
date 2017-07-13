import { renderComponent , expect } from '../../test_helper';
import DisplayInplayStats from '../../../src/components/inplay_stats/display_inplay_stats';

describe("Display Inplay Stats", () => {
    "use strict";
    let component, props, state;

    beforeEach(() => {
        props = {};
        state = {
            charts: {
                charts: {
                    data: [
                        {
                            odds: 1.952,
                            time: undefined
                        },
                        {
                            odds: 1.952,
                            time: "10:00"
                        }
                    ],
                    title: "FT-H-Win"
                }
            }
        };
        component = renderComponent(DisplayInplayStats, props, state);
    });

    it('renders to screen', () => {
        expect(component).to.exist;
    });

    it('renders DisplayMatchTable to screen', () => {
        expect(component.find('.match-stats-table')).to.exist;
    });

    it('renders MatchProgressTracker to screen', () => {
        expect(component.find('.match-tracker')).to.exist;
    });

    describe("Stats Panel", () => {

        it('renders to screen', () => {
            expect(component.find('.stats-panel')).to.exist;
        });

        it('stats button is active by default', () => {
            expect(component.find('#stats').attr('class')).to.equal('active');
            expect(component.find('#tracker').attr('class')).to.equal('');
        });

        it('displays stats panel by default', () => {
            expect(component.find('#stats').attr('class')).to.equal('active');
            expect(component.find('.possession').length).to.equal(3);
        });

        it('sets bet tracker button as active on click', () => {
            component.find('#tracker').simulate('click');
            expect(component.find('#stats').attr('class')).to.equal('');
            expect(component.find('#tracker').attr('class')).to.equal('active');
        });

        it('renders bet tracker panel on button click', () => {
            component.find('#tracker').simulate('click');
            expect(component.find('#stats').attr('class')).to.equal('');
            expect(component.find('#tracker').attr('class')).to.equal('active');
            expect(component.find('#track-bet')).to.exist;
        });

        it('renders select input in bet tracker panel', () => {
            component.find('#tracker').simulate('click');
            expect(component.find('#track-bet')).to.exist;
        });

        it('renders chart in bet tracker panel if data', () => {
            component.find('#tracker').simulate('click');
            expect(component.find('#chart')).to.exist;
        });

        it('renders empty div in bet tracker panel if no data', () => {
            state = {
                charts: {
                    charts: {}
                }
            };
            component = renderComponent(DisplayInplayStats, props, state);

            component.find('#tracker').simulate('click');
            expect(component.find('#chart')).to.not.exist;
        });

    });

});