import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article class="card ">
    <header>
      <div class="actions">
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <Link to={post.frontmatter.path} className="button -small">Case Study &rarr;</Link>
      </div>
      <div class="post-exc">{post.excerpt}</div>
    </header>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    
  </article>
)
export default PostLink