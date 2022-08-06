import "../styles/index.scss"
import type { AppProps } from "next/app"
import "@rainbow-me/rainbowkit/styles.css"


import { WagmiConfig } from "wagmi"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chains, wagmiClient } from "../shared/wallet/walletConfig"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
