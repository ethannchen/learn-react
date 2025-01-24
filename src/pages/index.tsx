// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// import Gallery from './components/gallery'
// import Profile from './components/profile_props'
// import Holder from './components/square'
// import List from './components/list_keys'
import PackingList from './qcomps/props_item'
import Gallery from './qcomps/gallery_props'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'




export default function Home() {
  return (
    <>

      <h2 style={{ color: 'lightblue' }}>Task 1: gallery_props</h2>
      <Gallery />
      <h2 style={{ color: 'lightblue' }}>Task 2: list_keys_id</h2>
      <List />
      <h2 style={{ color: 'lightblue' }}>Task 3: recipes</h2>
      <RecipeList />
      <h2 style={{ color: 'lightblue' }}>Task 4: props_item</h2>
      <PackingList />
    </>

  )
}
