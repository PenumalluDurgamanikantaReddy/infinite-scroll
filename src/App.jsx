import { useState } from 'react'

import InfiniteScroller from  './Components/infinitescroller/Infinite_Scroller'
import Explorer from './Components/folder/components/Explorer'
function App() {
  const [count, setCount] = useState(0)

  return (
    // <InfiniteScroller/>
    <Explorer/>
  )
}

export default App
