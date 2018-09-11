import React, { Component } from 'react';
import './App.less';
import ScrollSpy from './component/scrollSpy/scrollSpy'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          layout: 'top'
        }
    }

  handleLayoutChange = (e) => {
    this.setState({
        layout: e.target.value
    });
  }

  render() {

    const news1 = <div className="text"><h3>Facebook Info</h3><p>
      Facebook is an American online social media and social networking service company based in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz and Chris Hughes.
      The founders initially limited the website's membership to Harvard students. Later they expanded it to higher education institutions in the Boston area, the Ivy League schools, and Stanford University. Facebook gradually added support for students at various other universities, and eventually to high school students. Since 2006, anyone who claims to be at least 13 years old has been allowed to become a registered user of Facebook, though variations exist in this requirement, depending on local laws. The name comes from the face book directories often given to American university students. Facebook held its initial public offering (IPO) in February 2012, valuing the company at $104 billion, the largest valuation to date for a newly listed public company. It began selling stock to the public three months later. Facebook makes most of its revenue from advertisements that appear onscreen.
      Facebook can be accessed from a large range of devices with Internet connectivity, such as desktop computers, laptops and tablet computers, and smartphones. After registering, users can create a customized profile indicating their name, occupation, schools attended and so on. Users can add other users as "friends", exchange messages, post status updates, share photos, videos and links, use various software applications ("apps"), and receive notifications of other users' activity. Additionally, users may join common-interest user groups organized by workplace, school, hobbies or other topics, and categorize their friends into lists such as "People From Work" or "Close Friends". Additionally, users can report or block unpleasant people.
      Facebook has more than 2.2 billion monthly active users as of January 2018. Its popularity has led to prominent media coverage for the company, including significant scrutiny over privacy and the psychological effects it has on users. In recent years, the company has faced intense pressure over the amount of fake news, hate speech and depictions of violence prevalent on its services, all of which it is attempting to counteract.
    </p></div>;

    const news2 = <div className="text"><h3>Google Info</h3><p>
      Google LLC[5] is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.
      The company's rapid growth since incorporation has triggered a chain of products, acquisitions, and partnerships beyond Google's core search engine (Google Search). It offers services designed for work and productivity (Google Docs, Sheets, and Slides), email (Gmail/Inbox), scheduling and time management (Google Calendar), cloud storage (Google Drive), social networking (Google+), instant messaging and video chat (Google Allo, Duo, Hangouts), language translation (Google Translate), mapping and navigation (Google Maps, Waze, Google Earth, Street View), video sharing (YouTube), note-taking (Google Keep), and photo organizing and editing (Google Photos). The company leads the development of the Android mobile operating system, the Google Chrome web browser, and Chrome OS, a lightweight operating system based on the Chrome browser. Google has moved increasingly into hardware; from 2010 to 2015, it partnered with major electronics manufacturers in the production of its Nexus devices, and it released multiple hardware products in October 2016, including the Google Pixel smartphone, Google Home smart speaker, Google Wifi mesh wireless router, and Google Daydream virtual reality headset. Google has also experimented with becoming an Internet carrier. In February 2010, it announced Google Fiber, a fiber-optic infrastructure that was installed in Kansas City; in April 2015, it launched Project Fi in the United States, combining Wi-Fi and cellular networks from different providers; and in 2016, it announced the Google Station initiative to make public Wi-Fi available around the world, with initial deployment in India.[6]
      Alexa Internet monitors commercial web traffic and lists Google.com as the most visited website in the world. Several other Google services also figure in the top 100 most visited websites, including YouTube and Blogger. Google is the most valuable brand in the world as of 2017,[7] but has received significant criticism involving issues such as privacy concerns, tax avoidance, antitrust, censorship, and search neutrality. Google's mission statement is "to organize the world's information and make it universally accessible and useful", and its unofficial slogan was "Don't be evil". In October 2015, the motto was replaced in the Alphabet corporate code of conduct by the phrase "Do the right thing", while the original one was retained in the code of conduct of Google.[8] Around May 2018, the slogan was silently removed from the code's clauses, leaving only one generic reference in its last paragraph.[9]
    </p></div>;



    const news3 = <div className="text"><h3>Microsoft Info</h3><p>
      Microsoft Corporation (/ˈmaɪkrəsɒft/,[3][4] abbreviated as MS) is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. As of 2016, it is the world's largest software maker by revenue,[5] and one of the world's most valuable companies.[6] The word "Microsoft" is a portmanteau of "microcomputer" and "software".[7]
      Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, followed by Microsoft Windows. The company's 1986 initial public offering (IPO), and subsequent rise in its share price, created three billionaires and an estimated 12,000 millionaires among Microsoft employees. Since the 1990s, it has increasingly diversified from the operating system market and has made a number of corporate acquisitions, their largest being the acquisition of LinkedIn for $26.2 billion in December 2016,[8] followed by their acquisition of Skype Technologies for $8.5 billion in May 2011.[9]
      As of 2015, Microsoft is market-dominant in the IBM PC-compatible operating system market and the office software suite market, although it has lost the majority of the overall operating system market to Android.[10] The company also produces a wide range of other consumer and enterprise software for desktops and servers, including Internet search (with Bing), the digital services market (through MSN), mixed reality (HoloLens), cloud computing (Azure) and software development (Visual Studio).
      Steve Ballmer replaced Gates as CEO in 2000, and later envisioned a "devices and services" strategy.[11] This began with the acquisition of Danger Inc. in 2008,[12] entering the personal computer production market for the first time in June 2012 with the launch of the Microsoft Surface line of tablet computers; and later forming Microsoft Mobile through the acquisition of Nokia's devices and services division. Since Satya Nadella took over as CEO in 2014, the company has scaled back on hardware and has instead focused on cloud computing, a move that helped the company's shares reach its highest value since December 1999.[13][14]
    </p></div>;

    const news4 = <div className="text"><h3>IBM Info</h3><p>
      International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries. The company began in 1911 as the Computing-Tabulating-Recording Company (CTR) and was renamed "International Business Machines" in 1924.
      IBM manufactures and markets computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most U.S. patents generated by a business (as of 2018) for 25 consecutive years.[5] Inventions by IBM include the automated teller machine (ATM), the PC, the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.
      IBM has continually shifted its business mix by commoditizing markets focusing on higher-value, more profitable markets. This includes spinning off printer manufacturer Lexmark in 1991 and selling off its personal computer (ThinkPad/ThinkCentre) and x86-based server businesses to Lenovo (2005 and 2014, respectively), and acquiring companies such as PwC Consulting (2002), SPSS (2009), and The Weather Company (2016). Also in 2014, IBM announced that it would go "fabless", continuing to design semiconductors, but offloading manufacturing to GlobalFoundries.
      Nicknamed Big Blue, IBM is one of 30 companies included in the Dow Jones Industrial Average and one of the world's largest employers, with (as of 2017) over 380,000 employees. Known as "IBMers", IBM employees have been awarded five Nobel Prizes, six Turing Awards, ten National Medals of Technology and five National Medals of Science.
    </p></div>;

    let components = [[news1],[news2],[news3],[news4]];

    let mainView = <ScrollSpy layout={this.state.layout} components={components} tabs={['Facebook', 'Google', 'Microsoft', 'IBM']} />

    const layoutOptions = <div className="optionsContainer">
          <label className="layout-text">Layout: </label><select value={this.state.layout} onChange={this.handleLayoutChange} className="combo">
              <option value ="top">Top</option>
              <option value ="bottom">Bottom</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
        </select>
    </div>;

    return (
      <div className="App">
        {layoutOptions} {mainView}
      </div>
    );
  }
}

export default App;
