import React, { useState, useEffect } from 'react'
import { Option } from '../../../app'

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        Option(toggle)
    }, [toggle])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setToggle(false)
        })
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    <div class="shadow" id="shadow"></div>
                    <nav>
                        <div className="box-slide" id="box-slide"></div>
                        <div className="navbar" id="navbar-01">

                            <div className="main-nav" id="navbar-main01">
                                <div className="logo">
                                    <a href="#" id="logo-01">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 50" aria-hidden="true">
                                            <title>EARTHSAT Logo</title>
                                            <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold" fontSize="60" fill="white">EARTHSAT</text>
                                        </svg>
                                    </a>
                                </div>
                                <div className="navbar-menu">
                                    <ul className="navbar-link">
                                        <li><a id="it" href="#">OVERVIEW</a></li>
                                        <li><a id="it2" href="#">BACKGROUND</a></li>
                                        <li><a id="it2" href="#">SECTORS</a></li>
                                        <li><a id="it3" href="#">METHODOLOGY</a></li>
                                        <li><a id="it4" href="#">FUTURE</a></li>
                                        <li><a id="it5" href="#">CAREERS</a></li>
                                        <li><a id="it6" href="#">CONTACT</a></li>
                                        <li><a id="it7" href="#">UPDATES</a></li>
                                        <li><a id="it8" href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="narbar-option">
                                <ul className="container-box-menu">
                                    <li className="shopmenu"><a href="#">SHOP</a></li>
                                    <div className={toggle ? "box-menu change" : "box-menu"} onClick={handleClick} onScroll={() => setToggle(false)}>
                                        <div className="bar1"></div>
                                        <div className="bar2"></div>
                                        <div className="bar3"></div>
                                    </div>
                                    <div className="optionbar" id="op">
                                        <ul className="box-optionbar" id="bo">
                                            <li id="item1"><a href="#">OVERVIEW</a></li>
                                            <li id="item2"><a href="#">BACKGROUND</a></li>
                                            <li id="item3"><a href="#">TARGET SECTORS</a></li>
                                            <li id="item4"><a href="#">METHODOLOGY</a></li>
                                            <li id="item5"><a href="#">FUTURE</a></li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Header