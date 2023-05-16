import React from "react";
import './Page.scss'
import PropTypes from 'prop-types'

const Page = React.forwardRef(({title, img, text, firstPage, pageNumber, orientation}, ref) => {

    return (
        <div className={orientation === "landscape" ? "demoPage landscape" : "demoPage"} ref={ref}>
            <div className={firstPage ? "page first" : "page"}>
                {!firstPage ?
                <div className="content">
                        {title && <h2>{title}</h2>}
                        <img src={img} className="main" alt="main"/>
                        <p>{text}</p>
                    <img src={pageNumber} className="number" alt="number"/>
                </div>  : null}
            </div>
        </div>
    )
})

export default Page;

  
Page.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string,
    text: PropTypes.string,
    firstPage: PropTypes.bool,
    pageNumber: PropTypes.string
}