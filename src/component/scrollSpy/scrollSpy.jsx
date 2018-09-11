
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
        this.state = {
            layout: this.props.layout
        }
        this.scrollHandler = common.throttle(this.scrollHandler, 200);
        this.resizeHandler = common.throttle(this.resizeHandler, 200);
    }

    static getDerivedStateFromProps(props, state) {
        style.use();
        if (props.layout !== state.layout) {
            return {
                layout: props.layout
            }
        }

        return {
            layout: Layout.TOP
        }
    }

    componentDidUpdate() {
        this.calTabContentHeight();
    }

    componentWillUnmount() {
        this.getContentDom().removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.resizeHandler);
        style.unuse();
    }

    componentDidMount() {
        this.getContentDom().addEventListener('scroll', this.scrollHandler);

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
        let contentDom = this.getContentDom();
        let tabsContainer = this.getTabsContainer();

        let layout = this.state.layout;

        let viewportHeight = document.body.offsetHeight;
        let tabRectBottom = 0;

        switch (layout) {
            case Layout.TOP:
                tabRectBottom = document.querySelector('.nav-container').getBoundingClientRect().bottom;
                contentDom.style.height = viewportHeight-tabRectBottom-pageBottomSpace + 'px';
                tabsContainer.className = tabsContainer.className.replace(/[tab-lef|tab-right]/ig, '');
                break;
            case Layout.BOTTOM:
                tabRectBottom = 200;
                contentDom.style.height = viewportHeight-tabRectBottom+ 'px';
                contentDom.style.marginBottom = pageBottomSpace + 'px';
                tabsContainer.className = tabsContainer.className.replace(/[tab-lef|tab-right]/ig, '');
                break;
            case Layout.LEFT:
                tabsContainer.className = tabsContainer.className + ' tab-left';
                break;
            case Layout.RIGHT:
                tabsContainer.className = tabsContainer.className + ' tab-right';
                break;
        }
    };

    getContentDom = () => {
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
        let tabContentDom = this.getContentDom();
        return parseFloat(window.getComputedStyle(tabContentDom).height, 10) || 0;
    };

    getActiveClass = () => {
        return ' active';
    };

    getTabs = () => {
        return document.querySelectorAll('.nav-container>ul')[0].children;
    };

    getTabsContainer = () => {
        return document.querySelector('.nav-container>ul');
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
        let layout = this.state.layout;

        return (
            <div className={`ss-root ${layout}`}>
                 {tabs} {scrollComps}
            </div>
        );
    }
}

ScrollSpy.defaultProps = {
    components: [],
    tabs: [],
    layout: Layout.TOP
};


