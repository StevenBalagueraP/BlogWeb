import React from "react";
import Articles from "../components/Articles";
import articleContent from "./ArticleContent.jsx";

const ArticlesList = () => {
    return (
        <div>
            <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
                Articles
            </h1>
            <div className="container py-4 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <Articles articles={articleContent}/>
                </div>
            </div>
        </div>
    )
}
export default ArticlesList;