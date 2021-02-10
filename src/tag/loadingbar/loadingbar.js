import "./loadingbar.css";

export const LoadingBar = () => {
    return (
        <div className="loading_bar"><i className="fas fa-spinner"></i></div>
    )
}

export const LoadingBarViewMore = () => {
    return (
        <div className="view_more_loading">
            <div className="view_more_loading_icon">
                <i className="fas fa-spinner"></i>
            </div>
        </div>
    )
}