import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './header'
import PostList from './postlist'
import PostExtended from './postextended'
import Error from './error'

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <PostList />} />
        <Route exact path="/error" component={() => <Error />} />
        <Route exact path="/:postId" component={() => <PostExtended />} />
      </Switch>
    </div>
  )
}

export default Main
