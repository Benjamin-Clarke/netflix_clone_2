import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Head from 'next/head'
import requests from '@/utils/requests'
import { Movie } from '@/typings'

interface Data {
  netflixOriginals: Movie[]
}
async function test3() {
  const movieData = fetch(requests.fetchNetflixOriginals)

  await movieData
    .then((response) => {
      console.log(response.json())
      return response.json()
    })
    .catch((reject) => {
      return reject
    })
}

async function test1() {
  const data = await fetch(requests.fetchNetflixOriginals);
  const postsData = await data.json();
  //console.log(postsData.results)
  let dataArr = new Array(20) 
  for (let i = 0; i < 20; i++) {
    postsData.results[i] = dataArr[i]
  }

  //async and await issue is happening
  console.log(dataArr)
  return dataArr
}

async function test2() {
  const [netflixOriginals] = await Promise.all(
    [fetch(requests.fetchNetflixOriginals).then((res) => res.json())]
  )
  let dataArr = new Array(20) 
  for (let i = 0; i < 20; i++) {
    dataArr[i] = netflixOriginals.results[i].title 
  }
  //console.log(dataArr)
  

  /*return {
    props: {
      netflixOriginals: netflixOriginals.results,
    } 
  } */
}

async function main() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {props:netflixOriginals};

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
}
}

export default function Home() {
  
  console.log(test2())

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10
    to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <Header/>
      <main className="">
        {/* <Banner netflixOriginals={}/> */}
        
      </main>
    </div>
  )
}

const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  }
}
