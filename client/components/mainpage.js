import React from 'react'
import { useParams, Switch, Route } from 'react-router-dom'
import Header from './header'
import PostList from './homeComponents/postlist'
import PostExtended from './postComponents/postextended'

const Main = () => {
  const { postId } = useParams()
  return (
    <div>
      <Header postId={postId} />
      <Switch>
        <Route exact path="/" component={() => <PostList />} />
        <Route exact path="/:postId" component={() => <PostExtended />} />
      </Switch>
    </div>
  )
}

export default Main
