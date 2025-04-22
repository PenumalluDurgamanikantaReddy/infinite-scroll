import { useState } from 'react'

import InfiniteScroller from  './Components/infinitescroller/Infinite_Scroller'
function App() {
  const [count, setCount] = useState(0)

  return (
    <InfiniteScroller/>
  )
}

export default App
