
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import style from './scrollSpy.useable.less';
import common from '../../common/common';

let prefix = 'scroll-spy-comp';
let pageBottomSpace = 50;

const Layout = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right'
}

export default class ScrollSpy extends Component {
    constructor(props) {
        super(props);
        this.scrollHandler = common.throttle(this.scrollHandler, 200);
        this.resizeHandler = common.throttle(this.resizeHandler, 200);
    }

    componentWillMount() {
        style.use();
    }

    componentWillUnmount() {
        this.getTabContentDom().removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.resizeHandler);
        style.unuse();
    }

    componentDidMount() {
        this.getTabContentDom().addEventListener('scroll', this.scrollHandler);

        this.calTabContentHeight();
        window.addEventListener('resize', this.resizeHandler);
        this.setTabActive(0);
    }

    scrollToAnchor = id => {
        document.getElementById(id).scrollIntoView();
    };

    setTabActive = index => {
        let tabs = this.getTabs();
        let activeClass = this.getActiveClass();
        for (let i = 0; i < tabs.length; i++) {
            let tab = tabs[i];
            if (i === index) {
                if (tab.className.indexOf(activeClass) === -1) {
                    tab.className = tab.className + activeClass;
                }
            } else {
                tab.className = tab.className.replace(activeClass, '');
            }
        }
    };

    scrollHandler = () => {
        let scrollItems = this.getScrollItems();

        for (let i = 0; i < scrollItems.length; i++) {
            let scrollItem = scrollItems[i];
            let index = parseInt(scrollItem.id.replace(prefix, ''), 10);
            let tab = this.getTabs()[index];

            if (this.isElementInViewport(scrollItem)) {
                this.setTabActive(index);
            }
        }
    };

    resizeHandler = () => {
        this.calTabContentHeight();
    };

    calTabContentHeight = () => {
        let viewportHeight = document.body.offsetHeight;
        let tabRectBottom = document.querySelector('.nav-container').getBoundingClientRect().bottom;
        this.getTabContentDom().style.height = viewportHeight-tabRectBottom-pageBottomSpace + 'px';
        console.log(viewportHeight-tabRectBottom-pageBottomSpace);
    };

    getTabContentDom = () => {
        if (this.tabContentDom) {
            return this.tabContentDom;
        }
        this.tabContentDom = document.querySelector('.tab-content');
        return this.tabContentDom;
    }

    getScrollItems = () => {
        if (this.scrollItems) {
            return this.scrollItems;
        }
        this.scrollItems = document.getElementsByClassName('scrollItem');
        return this.scrollItems;
    }

    getTabContentHeight = () => {
        let tabContentDom = this.getTabContentDom();
        return parseFloat(window.getComputedStyle(tabContentDom).height, 10) || 0;
    };

    getActiveClass = () => {
        return ' active';
    };

    getTabs = () => {
        return document.querySelectorAll('.nav-container>ul')[0].children;
    };

    isElementInViewport = el => {
        let viewportHeight = document.body.offsetHeight;
        let tabContentHeight = this.getTabContentHeight();
        let critical = viewportHeight - tabContentHeight - pageBottomSpace;

        let elRectTop = el.getBoundingClientRect().top;
        if (critical - elRectTop >= -150) {
            return true;
        }
        return false;
    };

    render() {

        const tabs = (
            <div className="nav-container">
                <ul>
                    {
                        this.props.tabs.map((tabName, index) => {
                            return <li key={'scroll-spy-tab' + index}>
                                <a href="javascript:;" onClick={() => this.scrollToAnchor(prefix + index)}>{tabName}</a>
                            </li>;
                        })
                    }
                </ul>
            </div>
        );

        const scrollComps = <div className="tab-content">
            {
                this.props.components.map((dom, index) => {
                    return <div key={prefix + index} id={prefix + index} className="scrollItem">{dom}</div>;
                })
            }
        </div>

        let mainView = null;
        let layout = this.props.layout || Layout.TOP;

        switch(layout) {
            case Layout.TOP:
                mainView = <React.Fragment>
                    {tabs} {scrollComps}
                </React.Fragment>;
                break;
            case Layout.BOTTOM:
                mainView = <React.Fragment>
                    {scrollComps} {tabs}
                </React.Fragment>
                break;
        }

        return (
            <div className="ss-root">
                {mainView}
            </div>
        );
    }
}

ScrollSpy.defaultProps = {
    components: [],
    tabs: []
};


