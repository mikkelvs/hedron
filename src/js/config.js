requirejs.config({
    baseUrl: 'src/js/modules',
    paths: {
        'main'					: '../main',
        'almond'				: '../../vendor/almond/almond',
        'jquery'				: '../../vendor/jquery/dist/jquery',
        // Foundation
        'foundation.core':                      '../../vendor/foundation-sites/js/foundation.core',

        //Foundation utils
        'foundation.util.mediaQuery':           '../../vendor/foundation-sites/js/foundation.util.mediaQuery',
        'foundation.util.box':                  '../../vendor/foundation-sites/js/foundation.util.box',
        'foundation.util.keyboard':             '../../vendor/foundation-sites/js/foundation.util.keyboard',
        'foundation.util.motion':               '../../vendor/foundation-sites/js/foundation.util.motion',
        'foundation.util.nest':                 '../../vendor/foundation-sites/js/foundation.util.nest',
        'foundation.util.timerAndImageLoader':  '../../vendor/foundation-sites/js/foundation.util.timerAndImageLoader',
        'foundation.util.touch':                '../../vendor/foundation-sites/js/foundation.util.touch',
        'foundation.util.triggers':             '../../vendor/foundation-sites/js/foundation.util.triggers',
        // Foundation plugins
        'foundation.abide':                     '../../vendor/foundation-sites/js/foundation.abide',
        'foundation.accordion':                 '../../vendor/foundation-sites/js/foundation.accordion',
        'foundation.accordionMenu':             '../../vendor/foundation-sites/js/foundation.accordionMenu',
        'foundation.drilldown':                 '../../vendor/foundation-sites/js/foundation.drilldown',
        'foundation.dropdown':                  '../../vendor/foundation-sites/js/foundation.dropdown',
        'foundation.dropdownMenu':              '../../vendor/foundation-sites/js/foundation.dropdownMenu',
        'foundation.equalizer':                 '../../vendor/foundation-sites/js/foundation.equalizer',
        'foundation.interchange':               '../../vendor/foundation-sites/js/foundation.interchange',
        'foundation.magellan':                  '../../vendor/foundation-sites/js/foundation.magellan',
        'foundation.offcanvas':                 '../../vendor/foundation-sites/js/foundation.offcanvas',
        'foundation.orbit':                     '../../vendor/foundation-sites/js/foundation.orbit',
        'foundation.responsiveMenu':            '../../vendor/foundation-sites/js/foundation.responsiveMenu',
        'foundation.responsiveToggle':          '../../vendor/foundation-sites/js/foundation.responsiveToggle',
        'foundation.reveal':                    '../../vendor/foundation-sites/js/foundation.reveal',
        'foundation.slider':                    '../../vendor/foundation-sites/js/foundation.slider',
        'foundation.sticky':                    '../../vendor/foundation-sites/js/foundation.sticky',
        'foundation.tabs':                      '../../vendor/foundation-sites/js/foundation.tabs',
        'foundation.tooltip':                   '../../vendor/foundation-sites/js/foundation.tooltip'

    },
    shim: {
        'foundation.core': { deps: ['jquery'], exports: 'Foundation' },

        'foundation.util.mediaQuery': {deps: ['foundation.core'],exports: 'Foundation.MediaQuery'},
        'foundation.util.box': {deps: ['foundation.core'],exports: 'Box'},
        'foundation.util.keyboard': {deps: ['foundation.core'],exports: 'Keyboard'},
        'foundation.util.motion': {deps: ['foundation.core'],exports: 'Motion'},
        'foundation.util.nest': {deps: ['foundation.core'],exports: 'Nest'},
        'foundation.util.timerAndImageLoader': {deps: ['foundation.core'],exports: 'timerAndImageLoader'},
        'foundation.util.touch': {deps: ['foundation.core'],exports: 'Touch'},
        'foundation.util.triggers': {deps: ['foundation.core'],exports: 'Triggers'},

        'foundation.abide': { deps: ['foundation.core'], exports: 'Foundation.Abide' },
        'foundation.accordion': { deps: ['foundation.core'], exports: 'Foundation.Accordion' },
        'foundation.accordionMenu': {deps: ['foundation.core'], exports: 'Foundation.AccordionMenu'},
        'foundation.drilldown': {deps: ['foundation.core'], exports: 'Foundation.Drilldown'},
        'foundation.dropdown': {deps: ['foundation.core'], exports: 'Foundation.Dropdown'},
        'foundation.dropdownMenu': {deps: ['foundation.core'], exports: 'Foundation.DropdownMenu'},
        'foundation.equalizer': {deps: ['foundation.core'], exports: 'Foundation.Equalizer'},
        'foundation.interchange': {deps: ['foundation.core'],exports: 'Foundation.Interchange'},
        'foundation.magellan': {deps: ['foundation.core'], exports: 'Foundation.Magellan'},
        'foundation.offcanvas': {deps: ['foundation.core'],exports: 'Foundation.OffCanvas'},
        'foundation.orbit': {deps: ['foundation.core'],exports: 'Foundation.Orbit'},
        'foundation.responsiveMenu': {deps: ['foundation.core'],exports: 'Foundation.ResponsiveMenu'},
        'foundation.responsiveToggle': {deps: ['foundation.core'],exports: 'Foundation.ResponsiveToggle'},
        'foundation.reveal': {deps: ['foundation.core'],exports: 'Foundation.Reveal'},
        'foundation.slider': {deps: ['foundation.core'],exports: 'Foundation.Slider'},
        'foundation.sticky': {deps: ['foundation.core'],exports: 'Foundation.Sticky'},
        'foundation.tabs': {deps: ['foundation.core'],exports: 'Foundation.Tabs'},
        'foundation.tooltip': {deps: ['foundation.core'],exports: 'Foundation.Tooltip'}
    },
    deps: ['main']
});