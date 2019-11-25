import React, { useState, useEffect } from 'react';

// App에서 컴포넌트로 내리면 한번에 변경되서 포기하고 functional 으로 이전
function Introduction() {
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
        <div className="Introduction">
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
                                <option value="0 : CSE3026: Web Application Development  Introduction">0 : CSE3026: Web
                                    Application Development Introduction</option>
                                <option value="1 : Course Outline">1 : Course Outline</option>
                                <option value="2 : People">2 : People</option>
                                <option value="3 : Course Webpage">3 : Course Webpage</option>
                                <option value="4 : English Lecture">4 : English Lecture</option>
                                <option value="5 : Textbook">5 : Textbook</option>
                                <option value="6 : Assessment">6 : Assessment</option>
                                <option value="7 : Assessment">7 : Assessment</option>
                                <option value="8 : Lecture Rules">8 : Lecture Rules</option>
                                <option value="9 : Study Tips">9 : Study Tips</option>
                        </select></div>
                    </div>
            </div>
            <div id="currentSlide">
                {/* DO NOT EDIT */}
            </div>
            <div id="header"></div>
            <div id="footer">
                <h1>CSE3026: Web Application Development</h1>
                <h2>00.Introduction</h2>
            </div>
        </div>
    
        <div className="presentation" style={{display: 'none'}}>
            <div className="slide" id="slide0">
                <h1><span className="smallerFont">CSE3026: Web Application Development</span> <br /> <strong>Introduction</strong>
                </h1>
                <br />
                <h2>Scott Uk-Jin Lee</h2>
    
                <h4>2nd Semester, 2019</h4>
            </div>
    
    
            <div className="slide" id="slide1">
                <h1>Course Outline</h1>
    
                <h2></h2>
                <ul>
                    <li><span className="hyuBlue">Course Information</span>
                        <ul>
                            <li>elective course for a Software and Computer major in the Division of Computer Science</li>
                        </ul>
                    </li>
                </ul>
    
    
                <ul>
                    <li><span className="hyuBlue">Course Contents</span>
                        <ul>
                            <li>concepts of the Internet and the World Wide Web</li>
                            <li>principles and techniques for developing a web application</li>
                            <li>various Internet technology: web protocols, server / client side processing, ...</li>
                            <li>related languages and tools: HTML, CSS, Javascript, PHP, DOM, XML, AJAX, ...</li>
                        </ul>
                    </li>
                </ul>
    
                <ul>
                    <li><span className="hyuBlue">Course Objectives</span>
                        <ol>
                            <li>understand protocols, languages and systems used on the Web</li>
                            <li>understand the functions of client and server &amp; learn how to implement client-side and
                                server-side scripts</li>
                            <li>obtain ability to implement an interactive web site where usability, accessibility, and
                                internationalization issues are considered</li>
                        </ol>
                    </li>
                </ul>
    
            </div>
    
            <div className="slide" id="slide2">
                <h1>People</h1>
    
                <ul>
                    <li>Lecturer : <span className="hyuBlue">Scott Lee</span>
                        <ul>
                            <li>Office: Room 617 @ ERICA Support CEnter</li>
                            <li>Email: <a href="mailto:scottlee@hanyang.ac.kr">scottlee@hanyang.ac.kr</a></li>
                            <li>Tel: 031-400-5238</li>
                            <li>Homepage: <a href="http://selab.hanyang.ac.kr/">http://selab.hanyang.ac.kr</a></li>
                        </ul>
                    </li>
                </ul>
                <br />
                <ul>
                    <li>Teaching Assistant : <span className="hyuBlue">Gichan Lee</span><sup>1</sup>, <span
                            className="hyuBlue">Hakjin Lee</span><sup>2</sup>
                        <ul>
                            <li>Office: Room 421 @ ERICA Support Center</li>
                            <li>Email: <a href="mailto:fantasyopy@gmail.com">fantasyopy@gmail.com</a><sup>1</sup>, <a
                                    href="mailto:gsdjini91@gmail.com">gsdjini91@gmail.com</a><sup>2</sup></li>
                            <li>Tel: 031-400-4754</li>
                        </ul>
                    </li>
                </ul>
            </div>
    
            <div className="slide" id="slide3">
                <h1>Course Webpage</h1>
    
                <ul>
                    <li><span className="hyuBlue">Course Web</span>: <a
                            href="https://selab.hanyang.ac.kr/courses/cse326/2019">http://selab.hanyang.ac.kr/courses/cse326/2019</a>
                        <ul>
                            <li>General information about the course</li>
                            <li>Course schedule</li>
                            <li>Lecture slides</li>
                            <li>Announcements (lecture, lab, project, exam)</li>
                            <li>Attendance status and assessment marks</li>
                            <li><span className="hyuOrange">Please visit &amp; check the website frequently!</span></li>
                        </ul>
                    </li>
                    <li><span className="hyuBlue">Forum for the course</span>: <a
                            href="https://learn.hanyang.ac.kr/">Blackboard</a>
                        <ul>
                            <li>course information and notices</li>
                            <li>Q &amp; A on lecture contents, labs, projects, and exams</li>
                            <li>express opinions and suggestions about the course</li>
                        </ul>
                    </li>
    
                </ul>
            </div>
    
            <div className="slide" id="slide4">
                <h1>English Lecture</h1>
    
                <ul>
                    <li><span className="hyuBlue">Official language for this course is </span> <span
                            className="hyuOrange">English!</span>
                        <ul>
                            <li>all the lectures will be given in <span className="hyuOrange normalText">English</span></li>
                            <li>students are expected to use <span className="hyuOrange normalText">English</span> throughout
                                the course
                                <ul>
                                    <li>labs, assignments, and projects should be done in English</li>
                                    <li>exam questions must be answered in English</li>
                                    <li>answers in Korean will not be marked! (0 mark)</li>
                                </ul>
                            </li>
                            <li>students may ask questions in either English or Korean during the lecture and office hours
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
    
            <div className="slide" id="slide5">
                <h1>Textbook</h1>
                <img className="leftFloatingImage" src="./CSE3026 - Introduction_files/webProgrammingText.jpeg"
                    alt="Web Programming Textbook" width="200px" />
                <ul>
                    <li> <span className="hyuBlue">Web Programming Step by Step (Second Edition)</span>
                        <ul>
                            <li>Marty Stepp, Jessica Miller, and Victoria Kirst</li>
                            <li> independently self-published via Lulu.com 2012</li>
                        </ul>
                    </li>
                </ul>
            </div>
    
            <div className="slide" id="slide6">
                <h1>Assessment</h1>
                <ul>
                    <li>Attendance <span className="hyuBlue">10%</span>
                        <ul>
                            <li>Lectures - 4 or more unexcused absence: Fail! (<span className="hyuOrange">F</span>)</li>
                            <li>Labs - 4 or more unexcused absence: Fail! (<span className="hyuOrange">F</span>)</li>
                        </ul>
                    </li>
                    <li>Team Project <span className="hyuBlue">30%</span>
                        <ul>
                            <li>a semester-long team project with implementation, report, and presentaion</li>
                        </ul>
                    </li>
                    <li>Midterm Exam <span className="hyuBlue">30%</span></li>
                    <li>Final Exam <span className="hyuBlue">30%</span></li>
                </ul>
            </div>
    
            <div className="slide" id="slide7">
                <h1>Assessment</h1>
                <ul>
                    <li><span className="hyuBlue">Active participation</span> during the lecture will be <span
                            className="hyuOrange">awarded!</span>
                        <ul>
                            <li>actively participating during the lecture through questions or suggestions</li>
                            <li>acting towards improving the quality of the lecture</li>
                            <li>help other students to better understand concepts learned in the lecture</li>
                            <li>other positive behaviours during the lecture</li>
                            <li><span className="hyuOrange normalText">1% towards total mark will be awarded!</span></li>
                        </ul>
                    </li>
                    <li><span className="hyuOrange">Cheating will be punished Heavily!</span>
                        <ul>
                            <li>Sharing/Copying in lab or lab assignment: 1st time = <span
                                    className="hyuOrange normalText">0</span> marks &amp; 2nd time = <span
                                    className="hyuOrange">F</span> grade</li>
                            <li>Sharing/Copying in Project or Exam: <span className="hyuOrange">F</span> grade</li>
                        </ul>
                    </li>
                </ul>
            </div>
    
            <div className="slide" id="slide8">
                <h1>Lecture Rules</h1>
                <ul>
                    <li>No cell phones during the lecture!
                        <ul>
                            <li>switch off your mobile phone or put them in silent mode <br /> (same goes for other
                                noise-making electronic devices)</li>
                            <li>laptop/touchpad can be used but only for course related use</li>
                            <li>do NOT leave the lecture theater without permission</li>
                            <li>do NOT sleep during the lecture</li>
                            <br />
                            <li><span className="hyuOrange normalText">if you violate these rules, I will kick you out of the
                                    className<br />(considered as an unexcused absence)</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
    
            <div className="slide" id="slide9">
                <h1>Study Tips</h1>
                <ul>
                    <li>read and study lecture slides in advance</li>
                    <li>don't be late or miss a lecture</li>
                    <li>try to understand everything in the lecture</li>
                    <li>ask question on what is unclear or what you do not understand during the lecture</li>
                    <li>master the concepts learned during the lecture through homework and exercises</li>
                    <li>utilize office hours effectively (me and TA)</li>
                </ul>
            </div>
            
        </div>            
    </div>
    );
}

export default Introduction;