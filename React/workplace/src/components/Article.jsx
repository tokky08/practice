import { useState } from "react";
import { PublishButton } from "./index";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    // console.log(isPublished)
    const publishArticle = (flag) => {
        console.log(flag)
        if (flag) {
            setIsPublished(false)
        } else {
            setIsPublished(true)
        }
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            {/* <button onClick={() => setIsPublished("おは")}>公開</button> */}
            <PublishButton
                isPublished={isPublished}
                onClick={publishArticle}
            />
        </div>
    );
};

export default Article;