import React, { useState, useEffect } from 'react';

// App에서 컴포넌트로 내리면 한번에 변경되서 포기하고 functional 으로 이전
function WorldWideWeb() {
    let [slide, setSlide] = useState(0);

    // componentDidMount
    useEffect(() => {
        var s = slide;
        var slnum = "slide" + s;
        var current = document.getElementById('currentSlide');
        var change = document.getElementById(slnum);
        current.innerHTML = change.innerHTML;
    }, []);
        
    // Next 할 때 페이지 제한 걸기 위한 슬라이드 갯수 세는 함수
    // return값은 마지막 슬라이드가 9번이라 치면 10으로 반환됨 (함수 사용에 쉽게 하려고)
    const lengthCheck = () => {
        var i = 0;
        for (i=0; ; i++) {
            var slnum = "slide" + i;
            if (!document.getElementById(slnum)) {
                break;
            }
        }
        return i;
    }

    // printView
    const printView = () => {
        var length = lengthCheck();
        var current = document.getElementById('currentSlide');
        current.innerHTML = "";
        for (var i=0; i<length; i++) {
            var slnum = "slide" + i;
            var change = document.getElementById(slnum);
            current.innerHTML += change.innerHTML;
        }

        var el = document.getElementById("jumplist");
        el.selectedIndex = 0;
        setSlide(0);
    };

    // Slide Next
    const moveSlideNext = () => {
        var length = lengthCheck();
        var s = parseInt(slide) + 1;
        if (s < length) {
            var slnum = "slide" + s;
            var current = document.getElementById('currentSlide');
            var change = document.getElementById(slnum);
            current.innerHTML = change.innerHTML;

            var el = document.getElementById("jumplist");
            el.selectedIndex = s;

            setSlide(s);
        } else {
            alert("Next page");
        }
    };

    // Slide Privious
    const moveSlidePrevious = () => {
        var s = parseInt(slide);
        if (s > 0) {
            s = s - 1;
            var slnum = "slide" + s;
            var current = document.getElementById('currentSlide');
            var change = document.getElementById(slnum);
            current.innerHTML = change.innerHTML;

            var el = document.getElementById("jumplist");
            el.selectedIndex = s;

            setSlide(s);
        } else {
            alert("First page");
        }
    };

    const jumpSlide = () => {     
        var el = document.getElementById("jumplist");
        var jumplist = el.options[el.selectedIndex].value;
        var s = getNum(jumplist);
        var slnum = "slide" + s;
        var current = document.getElementById('currentSlide');
        var change = document.getElementById(slnum);
        current.innerHTML = change.innerHTML;
        setSlide(s);
    }

    const getNum = (String) => {
        var num = "";
        for (var i=0; i < String.length; i++) {
            if (isNumber(String[i])) {
                num += String[i]
            } else {
                break;
            }
        }

        return num;
    }

    function isNumber(s) {
        s += ''; // 문자열로 변환
        s = s.replace(/^\s*|\s*$/g, ''); // 좌우 공백 제거
        if (s == '' || isNaN(s)) return false;
        return true;
    }

    // body 이하의 내용을 Introduction의 안에 복사 붙여넣기함.
    // 모든 class는 React 규칙에 따라 className으로 변경해야 함.
    // <br> -> <br />
    // img 태그가 React 규칙에 따라 closing tag (/>)로 끝나도록 바꿔야하는 노가다...
    // 그래도 에러가 있으면 주석이 있는지 확인. <!-- --> 가 아닌 {/**/} 형태 : '<!--' -> '{/*', '-->' -> '*.}'
    // 교수님이 html에 attribute로 style을 넣었을 경우, React에서는 style="margin-top: 10" 가 아닌, style={{marginTop: '10'}}로 해야함.
    // class layout 안의 내용을 잘 보고 버튼값 변경 바람. (버튼이 된 이유는 기능구현을 쉽게 하기 위해서)
    // presentation에 style={{display: 'none'}} attribute를 넣어줄 것.
    // selab에서는 visibility: hidden을 사용하고 있으나, 공간을 먹어 이쁘게 안나옴.
    // body 아래 복붙 후 맨 윗부분 잘 보고 수정
    return (
        <div className="Sample">
            <div className="layout">
                <div id="controls">
                        <div id="navLinks">
                            <div id="navaLinks">
                            <button id="first" title="Print View"
                                onClick={printView}>Ø</button>
                                <button id="previous" title="Previous Slide"
                                onClick={moveSlidePrevious}>«</button>
                                <button id="next" title="Next Slide"
                                onClick={moveSlideNext}>»</button></div>
                            <div id="navList"><select id="jumplist" onChange={jumpSlide}>
                                    <option value="0 : CSE3026: Web Application Development  The Internet &amp; World Wide Web">
                                        0 : CSE3026: Web Application Development The Internet &amp; World Wide Web</option>
                                    <option value="1 : === 1.1: The Internet ===">1 : === 1.1: The Internet ===</option>
                                    <option value="2 : The Internet">2 : The Internet</option>
                                    <option value="3 : Brief history">3 : Brief history</option>
                                    <option value="4 : Key aspects of the internet">4 : Key aspects of the internet</option>
                                    <option value="5 : People and organizations">5 :People and organizations</option>
                                    <option value="6 : Layered architecture">6 :Layered architecture</option>
                                    <option value="7 : Internet Protocol (IP)">7 : Internet Protocol (IP)</option>
                                    <option value="8 : Transmission Control Protocol (TCP)">8 : Transmission Control Protocol(TCP)</option>
                                    <option value="9 : === 1.2: The World Wide Web (WWW) ===">9 : === 1.2: The World Wide Web(WWW) ===</option>
                                    <option value="10 : Web servers andbrowsers">10 :Web servers and browsers</option>
                                    <option value="11 : Domain Name System (DNS)">11 : Domain Name System (DNS)</option>
                                    <option value="12 : Uniform Resource Locator (URL)">12 : Uniform Resource Locator (URL)</option>
                                    <option value="13 : More advanced URLs">13 : More advanced URLs</option>
                                    <option value="14 : 
                            Hypertext Transport Protocol
                            (HTTP)
                            ">14 :
                                        Hypertext Transport Protocol
                                        (HTTP)
                                    </option>
                                    <option value="15 : HTTP error codes">15 : HTTP error codes</option>
                                    <option value="16 : Internet media (&quot;MIME&quot;) types">16 : Internet media ("MIME")
                                        types</option>
                                    <option value="17 : 
                            Web languages / technologies
                        ">17 :
                                        Web languages / technologies
                                    </option>
                                </select></div>
                        </div>
                </div>
                <div id="currentSlide">
                    {/* DO NOT EDIT */}
                </div>
                <div id="header"></div>
                <div id="footer">
                    <h1>CSE3026: Web Application Development</h1>
                    <h2>01.The Internet &amp; World Wide Web</h2>
                </div>
            </div>

            <div className="presentation" style={{display: 'none'}}>
                <div className="slide" id="slide0">
                    <h1><span className="smallerFont">CSE3026: Web Application Development</span> <br /> <strong>The Internet &amp;
                            World Wide Web</strong></h1>
                    <br />
                    <h2>Scott Uk-Jin Lee</h2>

                    <p className="license">
                        Reproduced with permission of the authors.
                        Copyright 2012 Marty Stepp, Jessica Miller, and Victoria Kirst.
                        All rights reserved.
                        Further reproduction or distribution is prohibited without written permission.
                    </p>

                    <div className="w3c">
                        <a href="https://validator.w3.org/check/referer"><img
                                src="./CSE3026 - The Internet &amp; World Wide Web_files/w3c-html.png" alt="Valid HTML5"/></a>
                        <a href="https://jigsaw.w3.org/css-validator/check/referer"><img
                                src="./CSE3026 - The Internet &amp; World Wide Web_files/w3c-css.png" alt="Valid CSS!"/></a>
                    </div>
                </div> 


                <div className="slide titleslide" id="slide1">
                    <h1>1.1: The Internet</h1>

                    <ul>
                        <li>
                            <strong>1.1: The Internet</strong>
                        </li>
                        <li>
                            1.2: The World Wide Web (WWW)
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide2">
                    <h1>The Internet</h1>

                    <div className="centerfigure">
                        <img src="./CSE3026 - The Internet &amp; World Wide Web_files/internet.png" alt="The Internet"/>
                    </div>

                    <ul>
                        <li>Wikipedia: <a href="http://en.wikipedia.org/wiki/Internet">http://en.wikipedia.org/wiki/Internet</a>
                            <ul>
                                <li>network of networks</li>
                                <li>a connection of computer networks using the Internet Protocol (IP)</li>
                            </ul>
                        </li>
                        <li>layers of communication protocols:
                            <ul>
                                <li>IP → TCP/UDP → HTTP/FTP/POP/SMTP/SSH...</li>
                            </ul>
                        </li>
                        <li>What's the difference between the Internet and the World Wide Web (WWW)?</li>
                    </ul>

                    <div className="handout">
                        <ul>
                            <li>the Web is the collection of web sites and pages around the world; the Internet is larger and
                                also includes other services such as email, chat, online games, etc.</li>
                        </ul>
                    </div>
                </div>


                <div className="slide" id="slide3">
                    <h1>Brief history</h1>

                    <ul>
                        <li>began as a US Department of Defense network called <a
                                href="http://en.wikipedia.org/wiki/ARPANET">ARPANET</a> (1960s-70s)</li>
                        <li>initial services: electronic mail, file transfer</li>
                        <li>opened to commercial interests in late 80s</li>
                        <li>WWW created in 1989-91 by <a href="http://en.wikipedia.org/wiki/Tim_Berners-Lee">Tim Berners-Lee</a>
                        </li>
                        <li>popular web browsers released: Netscape 1994, IE 1995</li>
                        <li>Amazon.com opens in 1995; Google January 1996</li>
                        <li><a
                                href="https://web.archive.org/web/19991123001948/http://www.geocities.com/Heartland/Bluffs/4157/hampdance.html">Hamster
                                Dance</a> web page created in 1999
                            {/* <img src="images/hamster_dance.png" alt="hamster dance" style="vertical-align: top" /> */}
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide4">
                    <h1>Key aspects of the internet</h1>

                    <ul>
                        <li>subnetworks can stand on their own</li>
                        <li>computers can dynamically join and leave the network</li>
                        <li>built on open standards
                            <ul>
                                <li>anyone can create a new internet device</li>
                            </ul>
                        </li>
                        <li>lack of centralized control (mostly)</li>
                        <li>everyone can use it with simple, commonly available software</li>
                    </ul>
                </div>


                <div className="slide" id="slide5">
                    <h1>
                        People and organizations
                    </h1>

                    <ul>
                        <li>Internet Engineering Task Force (<a
                                href="http://en.wikipedia.org/wiki/Internet_Engineering_Task_Force">IETF</a>):
                            <ul>
                                <li>internet protocol standards</li>
                            </ul>
                        </li>
                        <li>Internet Corporation for Assigned Names and Numbers (<a
                                href="http://en.wikipedia.org/wiki/ICANN">ICANN</a>):
                            <ul>
                                <li>decides top-level domain names</li>
                            </ul>
                        </li>
                        <li>World Wide Web Consortium (<a
                                href="http://en.wikipedia.org/wiki/World_Wide_Web_Consortium">W3C</a>):
                            <ul>
                                <li>web standards</li>
                            </ul>
                        </li>
                    </ul>

                    <div className="centerfigure">
                        <img src="./CSE3026 - The Internet &amp; World Wide Web_files/ietf_logo.gif" alt="IETF" height="70"/>
                        <img src="./CSE3026 - The Internet &amp; World Wide Web_files/icann.jpg" alt="ICANN" height="70"/>
                        <img src="./CSE3026 - The Internet &amp; World Wide Web_files/w3c.png" alt="W3C" height="50"/>
                    </div>
                </div>


                <div className="slide" id="slide6">
                    <h1>
                        Layered architecture
                    </h1>

                    <p>
                        The internet uses a layered hardware/software architecture (OSI model):
                        {/*			
                            <img className="rightfigure" src="images/osi_model.png" alt="OSI model" />
                        */}
                    </p>

                    <ul>
                        <li>physical layer
                            <ul>
                                <li>devices such as ethernet, coaxial cables, fiber-optic lines, modems</li>
                            </ul>
                        </li>
                        <li>data link layer
                            <ul>
                                <li>basic hardware protocols (ethernet protocol, wifi protocol, DSL's PPP)</li>
                            </ul>
                        </li>
                        <li>network / internet layer
                            <ul>
                                <li>basic software protocol (IP)</li>
                            </ul>
                        </li>
                        <li>transport layer
                            <ul>
                                <li>adds reliability to network layer (TCP, UDP)</li>
                            </ul>
                        </li>
                        <li>application layer
                            <ul>
                                <li>implements specific communication for each kind of program (HTTP, POP3/IMAP, SSH, FTP)</li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide7">
                    <h1>Internet Protocol (<a href="http://en.wikipedia.org/wiki/Internet_Protocol">IP</a>)</h1>

                    <ul>
                        <li>a simple protocol for attempting to send data between two computers</li>
                        <li>each device has a 32-bit IP address written as four 8-bit numbers (0-255) <br />
                            <img src="./CSE3026 - The Internet &amp; World Wide Web_files/fig1_ip_address.png" alt="IP address"
                                style={{width: '507px', marginTop: '20px'}}/>
                        </li>
                        <li>find out your internet IP address: <a href="http://www.whatismyip.com/">whatismyip.com</a></li>
                        <li>find out your local IP address:
                            <ul>
                                <li>in a terminal, type: <code>ipconfig</code> (Windows) or <code>ifconfig</code> (Mac/Linux)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide8">
                    <h1>Transmission Control Protocol (<a href="http://en.wikipedia.org/wiki/Tcp_protocol">TCP</a>)</h1>

                    <ul>
                        <li>adds multiplexing, guaranteed message delivery on top of IP</li>
                        <li>
                            <strong>multiplexing</strong>: multiple programs using the same IP address
                            <ul>
                                <li><strong>port</strong>: a number given to each program or service</li>
                                <li>port 80: web browser (port 443 for secure browsing)</li>
                                <li>port 25,110: email (SMTP, POP3)</li>
                                <li>port 22: secure shell (SSH)</li>
                                <li>port 21: file transfers (FTP)</li>
                                <li><a href="http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers">more common
                                        ports</a></li>
                            </ul>
                        </li>
                        <li>some programs (games, streaming media programs) use simpler <a
                                href="http://en.wikipedia.org/wiki/User_Datagram_Protocol">UDP</a> protocol instead of TCP</li>
                    </ul>
                </div>


                <div className="slide titleslide" id="slide9">
                    <h1>1.2: The World Wide Web (WWW)</h1>

                    <ul>
                        <li>
                            1.1: The Internet
                        </li>
                        <li>
                            <strong>1.2: The World Wide Web (WWW)</strong>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide10">
                    <h1>
                        <a href="http://en.wikipedia.org/wiki/Web_server">Web servers</a> and
                        <a href="http://en.wikipedia.org/wiki/Web_browser">browsers</a>
                    </h1>

                    <div className="rightfigure">
                        <img src="./CSE3026 - The Internet &amp; World Wide Web_files/webserver.gif" alt="web server"
                            height="120"/>
                    </div>


                    <ul>
                        <li>
                            <strong>web server</strong>: software that listens for web page requests

                            <ul>
                                <li><a href="http://www.apache.org/">Apache</a></li>
                                <li>Microsoft Internet Information Services (IIS) (<a href="https://www.iis.net/">part of
                                        Windows</a>)</li>
                            </ul>
                        </li>

                        <li><strong>web browser</strong>: fetches/displays documents from web servers
                            <img className="rightfigure" src="./CSE3026 - The Internet &amp; World Wide Web_files/web_browser.jpg"
                                alt="Firefox web browser"/>
                            <ul>
                                <li><a href="http://www.getfirefox.com/">Mozilla Firefox</a></li>
                                <li>Microsoft <a
                                        href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">Internet
                                        Explorer</a> (IE)</li>
                                <li>Apple <a href="http://www.apple.com/safari/">Safari</a></li>
                                <li><a href="http://www.google.com/chrome/">Google Chrome</a></li>
                                <li><a href="http://www.opera.com/">Opera</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide11">
                    <h1>
                        Domain Name System (<a href="http://en.wikipedia.org/wiki/Dns">DNS</a>)
                    </h1>

                    <ul>
                        <li>a set of servers that map written names to IP addresses
                            <ul>
                                <li>e.g.: <code>cse.hanyang.ac.kr</code> → <code>166.104.239.93</code></li>
                            </ul>
                        </li>

                        <li>many systems maintain a local cache called a <a href="http://en.wikipedia.org/wiki/Hosts_file">hosts
                                file</a>
                            <ul>
                                <li>Windows:
                                    <code><a href="file:///C:/Windows/system32/drivers/etc/hosts">C:\Windows\system32\drivers\etc\hosts</a></code>
                                </li>
                                <li>Mac: <code><a href="file:///private/etc/hosts">/private/etc/hosts</a></code></li>
                                <li>Linux: <code><a href="file:///etc/hosts">/etc/hosts</a></code></li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide12">
                    <h1>Uniform Resource Locator (<a href="http://en.wikipedia.org/wiki/Url">URL</a>)</h1>

                    <ul>
                        <li>an identifier for the location of a document on a web site</li>
                        <li>
                            a basic URL:
                            <pre><a href="http://www.aw-bc.com/info/regesstepp/index.html">http://www.aw-bc.com/info/regesstepp/index.html</a>
        ~~~~   ~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~
        protocol    host                path
        </pre>
                        </li>
                        <li>
                            upon entering this URL into the browser, it would:
                            <ul>
                                <li>ask the DNS server for the IP address of <code>www.aw-bc.com</code></li>
                                <li>connect to that IP address at port 80</li>
                                <li>ask the server to <code>GET /info/regesstepp/index.html</code></li>
                                <li>display the resulting page on the screen</li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide13">
                    <h1>More advanced URLs</h1>

                    <ul>
                        <li>
                            <strong>anchor</strong>: jumps to a given section of a web page
                            <pre><a href="http://www.textpad.com/download/index.html#downloads">http://www.textpad.com/download/index.html<strong>#downloads</strong></a>
        </pre>
                            <ul>
                                <li>fetches <code>index.html</code> then jumps down to part of the page labeled
                                    <code>downloads</code></li>
                            </ul>
                        </li>

                        <li>
                            <strong>port</strong>: for web servers on ports other than the default 80
                            <pre>http://selab.hanyang.ac.kr<strong>:8080</strong>/secret/money.txt
        </pre>
                        </li>

                        <li>
                            <strong>query string</strong>: a set of parameters passed to a web program
                            <pre><a href="http://www.google.com/search?q=miserable+failure&amp;start=10">http://www.google.com/search<strong>?q=miserable+failure&amp;start=10</strong></a>
        </pre>
                            <ul>
                                <li>parameter <code>q</code> is set to <code>"miserable+failure"</code></li>
                                <li>parameter <code>start</code> is set to <code>10</code></li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide14">
                    <h1>
                        Hypertext Transport Protocol
                        (<a href="http://en.wikipedia.org/wiki/Http_protocol">HTTP</a>)
                    </h1>

                    <ul>
                        <li>the set of commands understood by a web server and sent from a browser</li>

                        <li>
                            some HTTP commands (your browser sends these internally):
                            <ul>
                                <li><code>GET&nbsp; <em>filename</em></code> : download</li>
                                <li><code>POST <em>filename</em></code> : send a web form response</li>
                                <li><code>PUT&nbsp; <em>filename</em></code> : upload</li>
                            </ul>
                        </li>
                        <li>
                            simulating a browser with a terminal window:

                            <pre className="examplecode shell">$ <em>telnet cse.hanyang.ac.kr 80</em>
        Trying 166.104.239.93...
        Connected to cse.hanyang.ac.kr.
        Escape character is '^]'.
        <em>GET /index.html</em>
        &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 ..."&gt;
        &lt;html&gt;
        ...
        </pre>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide15">
                    <h1>HTTP error codes</h1>

                    <ul>
                        <li>when something goes wrong, the web server returns a special "error code" number to the browser,
                            possibly followed by an HTML document</li>
                        <li>common error codes:
                            <table className="standard">
                                <tbody>
                                    <tr className=" evenrow">
                                        <th className="spaced">Number</th>
                                        <th>Meaning</th>
                                    </tr>
                                    <tr>
                                        <td>200</td>
                                        <td>OK</td>
                                    </tr>
                                    <tr className=" evenrow">
                                        <td><a
                                                href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.3.2">301-303</a>
                                        </td>
                                        <td>page has moved (permanently or temporarily)</td>
                                    </tr>
                                    <tr>
                                        <td><a href="http://selab.hanyang.ac.kr/courses/cse326/2019/project/">403</a></td>
                                        <td>you are forbidden to access this page</td>
                                    </tr>
                                    <tr className=" evenrow">
                                        <td><a href="http://www.homestarrunner.com/404.html">404</a></td>
                                        <td>page not found</td>
                                    </tr>
                                    <tr>
                                        <td>500</td>
                                        <td>internal server error</td>
                                    </tr>
                                    <tr className=" evenrow">
                                        <td colspan="2" className="completelist"><a
                                                href="http://en.wikipedia.org/wiki/Http_error_codes">complete list</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </div>


                <div className="slide" id="slide16">
                    <h1>Internet media ("<a href="http://en.wikipedia.org/wiki/Mime_type">MIME</a>") types</h1>

                    <ul>
                        <li>
                            sometimes when including resources in a page (style sheet, icon, multimedia object), we specify
                            their type of data

                            <table className="standard">
                                <tbody>
                                    <tr className=" evenrow">
                                        <th>MIME type</th>
                                        <th className="slidetable">file extension</th>
                                    </tr>
                                    <tr className="code">
                                        <td>text/html</td>
                                        <td>.html</td>
                                    </tr>
                                    <tr className="code evenrow">
                                        <td>text/plain</td>
                                        <td>.txt</td>
                                    </tr>
                                    <tr className="code">
                                        <td>image/gif</td>
                                        <td>.gif</td>
                                    </tr>
                                    <tr className="code evenrow">
                                        <td>image/jpeg</td>
                                        <td>.jpg</td>
                                    </tr>
                                    <tr className="code">
                                        <td>video/quicktime</td>
                                        <td>.mov</td>
                                    </tr>
                                    <tr className="code evenrow">
                                        <td>application/octet-stream</td>
                                        <td>.exe</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                        <li>Lists of MIME types: <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">by
                                type</a>, <a href="https://www.sitepoint.com/web-foundations/mime-types-complete-list/">by
                                extension</a></li>
                    </ul>
                </div>


                <div className="slide" id="slide17">
                    <h1>
                        Web languages / technologies
                    </h1>

                    <ul>
                        <li>Hypertext Markup Language (<a href="http://en.wikipedia.org/wiki/Html">HTML</a>): used for writing
                            web pages</li>
                        <li>Cascading Style Sheets (<a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS</a>):
                            stylistic info for web pages</li>
                        <li>PHP Hypertext Processor (<a href="http://www.php.net/">PHP</a>): dynamically create pages on a web
                            server</li>
                        <li><a href="http://en.wikipedia.org/wiki/JavaScript">JavaScript</a>: interactive and programmable web
                            pages</li>
                        <li>Asynchronous JavaScript and XML (<a
                                href="http://en.wikipedia.org/wiki/Ajax_%28programming%29">Ajax</a>): accessing data for web
                            applications</li>
                        <li>eXtensible Markup Language (<a href="http://en.wikipedia.org/wiki/Xml">XML</a>): metalanguage for
                            organizing data</li>
                        <li>Structured Query Language (<a href="http://en.wikipedia.org/wiki/SQL">SQL</a>): interaction with
                            databases</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorldWideWeb;