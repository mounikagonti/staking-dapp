import type { NextPage } from "next"
import Head from "next/head"
import Footer from "../modules/footer/Footer"
import Header from "../modules/header/Header"
import Main from "../modules/main/Main"
import StakingInfo from "../modules/stakinginfo/StakingInfo"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Staking pool</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
