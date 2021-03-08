import {DiscussionEmbed} from "disqus-react"
const DisqusComments = ({ post }) => {
  const disqusShortname = "amherststudent"
  const disqusConfig = {
    url: `https://amherststudent.com/article/${post.slug}`,
    identifier: post.id, // Single post id
    title: post.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;

