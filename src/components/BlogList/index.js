import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <>
      <ul>
        {blogsList.map(eachItem => (
          <BlogItem blogItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </>
  )
}

export default BlogList
