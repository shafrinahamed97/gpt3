import React from 'react';
import Article from '../../components/article/Article';
import './Blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
    return (
        <div className='gpt3-blog- section-padding' id='blog'>
            <div className="gpt3-blog-heading">
                <h1 className='gradient-text'>A lot is happening, We are blogging about it.</h1>
            </div>
            <div className="gpt3-blog-container">
                <div className="gpt3-blog-container-groupA">
                    <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" ></Article>
                </div>
                <div className="gpt3-blog-container-groupB">
                    <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"></Article>
                    <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"></Article>
                    <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"></Article>
                    <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"></Article>
                </div>
            </div>

        </div>
    );
};

export default Blog;