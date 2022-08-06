import { getDefaultWallets } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient } from "wagmi"
// import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

export const { chains, provider } = configureChains(
  [chain.ropsten],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "Howlers Staking",
  chains,
})

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})
