import "./BookmarkTag.css"

const pageToTop = () => {
    window.scrollTo(0, 0);
}

const pageToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
}

const BookMarkTag = () => {
    return (
        <div className="bookmark">
            <button onClick={pageToTop} className="top_bookmark"><i className="fas fa-arrow-up"></i></button>
            <button onClick={pageToBottom} className="bottom_bookmark"><i className="fas fa-arrow-down"></i></button>
        </div>
    )
}

export default BookMarkTag;