// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Gallery from './qcomps/state'
import Form from './qcomps/stuckForm'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import BucketList from './qcomps/arrObj'

import FeedbackForm from './qcomps/thankYouCrash'
import List from './qcomps/artistsRemoveArr'

// examples:
// import Counter from './components/snapshot'
// import Form from './components/snapshot2'
// import Counter from './components/queueUpdates'




export default function Home() {
  return (
    <>
      {/* <Counter /> */}
      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task 1: src/pages/qcomps/state.tsx ✅
      </h2>
      <Gallery />

      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task 2: src/pages/qcomps/stuckForm.tsx ✅
      </h2>
      <Form />

      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task 3: src/pages/qcomps/shoppingCart.tsx ✅
      </h2>
      <RequestTracker />

      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task 4: src/pages/qcomps/updObjectsForm.tsx ✅
      </h2>
      <Scoreboard />

      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task 5: src/pages/qcomps/arrObj.tsx ✅
      </h2>
      <BucketList />




      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task: src/pages/qcomps/thankYouCrash.tsx ✅
      </h2>
      <FeedbackForm />

      <h2 style={{ backgroundColor: 'lightblue' }}>
        Task: src/pages/qcomps/artistsRemoveArr.tsx ✅
      </h2>
      <List />
    </>

  )
}
