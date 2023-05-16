import React from "react";
import { useSelector } from 'react-redux'
import './Book.scss';
import { useRef, useState, useCallback } from "react";
import Page from '../Page'
import HTMLFlipBook from 'react-pageflip';
import Button from "../Button/Button";
import useSound from 'use-sound';
import soundFlip from "../../sound/flip.mp3"
import Volume from "../Volume"

const Book = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [orientation, setOrientation] = useState("landscape")
    const [volume, setVolume] = useState(true)
    const [sound] = useSound(soundFlip);
    const pages = useSelector(state => state.pages.data);
    let book = useRef();

    const onFlip = useCallback((e) => {
        setCurrentPage(e.data)
        setPageCount(book.current.pageFlip().getPageCount())
        setOrientation(e.object.render.orientation)
    }, []);

    const checkOrientation = useCallback((e) => {
        setOrientation(e.object.render.orientation)
    }, [])

    const nextOrPrevPage = (value) => {
        value === "pre" ? 
        book.current.pageFlip().flipPrev() : 
        book.current.pageFlip().flipNext()
        return volume ? sound() : null
    }

    const clickVolume = () => {
        setVolume(!volume)
    }
    const changeState = (e) => {
        setCurrentPage(e.object.pages.currentPageIndex)
        setOrientation(e.object.render.orientation)
        return e.data === "flipping" || e.data === "user_fold" ? volume ? sound() : null : null
    }

    const functionForLastButton = () => {
        const button = <Button className="right" onClick={()=>nextOrPrevPage('next')}/>
        if (orientation === "landscape") {
            if (currentPage !== pageCount - 2) { 
             return button
            }
        } else {
            if (currentPage !== pageCount - 1 ) {
                return button
            }
        }
    }

    return (
        <>
            <div className={currentPage === 0 ? "book" : "book open"}>
                <HTMLFlipBook 
                width={450} 
                height={540} 
                size="stretch"
                minWidth={300}
                maxWidth={500}
                minHeight={300}
                maxHeight={600}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip} 
                ref={book} 
                onChangeOrientation={checkOrientation} 
                maxShadowOpacity={0.5}
                onChangeState={changeState}
                className="demo"
                >
                    <Page firstPage/>
                    {pages.map((item, index) => (
                        <Page
                        key={index}
                        title = {item.title}
                        img = {item.img}
                        text = {item.text}
                        pageNumber = {item.pageNumber}
                        orientation={orientation}
                        />
                    ))}
                </HTMLFlipBook>
            </div>
            <div className="block_btn">
                {currentPage !== 0 ? <Button onClick={()=>nextOrPrevPage('pre')}/> : null}
                {functionForLastButton()}
            </div>
            <Volume className={volume ? "volume on" : "volume"} onClick={clickVolume}/>
        </>
    )
}

export default Book;