import React, { useState, useEffect } from 'react';

// App에서 컴포넌트로 내리면 한번에 변경되서 포기하고 functional 으로 이전
function Sample() {
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
        //console.log("jump");
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
            </div>
        </div>
    );
}

export default Sample;