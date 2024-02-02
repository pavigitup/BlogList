import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, description, publishedDate} = blogItem

  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedDate}</p>
    </li>
  )
}

export default BlogItem
