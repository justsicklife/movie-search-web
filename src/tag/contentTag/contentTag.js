export const ContentTag = ({ classNm, propertyName, content, callbackFn = null }) => {
    if (!content[propertyName] || content[propertyName] === "") {
        return null;
    }
    const contextText = !callbackFn ? content[propertyName] : callbackFn(content[propertyName]);
    return (
        <>
            <div className={classNm}><h5>{contextText}</h5></div>
        </>
    )
}

export const ContentsTag = ({ childClassNm, classNm, propertyName, contents, keyName }) => {
    if (!contents) {
        return null;
    }
    return (
        <div className={classNm}>
            {contents.map(content =>
                <div key={`${Math.random()}${content[keyName]}`} className={childClassNm}><h5>{content[propertyName]}</h5></div>
            )}
        </div>
    )
}
