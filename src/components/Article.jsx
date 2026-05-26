import React from 'react';

function Article({minutes, title, date="January 1, 1970", preview}){
    const isShortRead = minutes <30;
    const emoji = isShortRead ? "☕️" : "🍱";
    const interval = isShortRead ? 5 : 10;
    const emojiCount = Math.ceil(minutes / interval);
     const emojiString = emoji.repeat(emojiCount);
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} </small>
            <p>{preview}</p>
            <p>{emojiString} {minutes} min read</p>
        </article>
    )
}

export default Article;