import React from "react";
import "./blogSummary.css";
import posts from "./blog-posts.js";

class BlogSummary extends React.Component {
    render() {
        return (
            <div className="blog-summary">
                <ul id="posts" className="article-index">
                    <div>
                        {
                            posts.map((post) => {
                                return (
                                    <li className="article-item" key={post.url}>
                                        <div className="articel-summary-left">
                                            <img src={post.url + '/' + post.titlePicture} alt={post.title}/>
                                        </div>
                                        <div className="articel-summary-right">
                                            <a className="article-title" href={post.url}>
                                                {post.title}
                                            </a>
                                            <div className="article-meta">
                                                {post.month}.{post.year} | von {post.author}
                                            </div>
                                            <p className="article-summary">{post.summary}</p>
                                            <a className="article-call-to-action" href={post.url}>Weiterlesen</a>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </div>
                </ul>
            </div>
        )
    }
}
;


export default BlogSummary;