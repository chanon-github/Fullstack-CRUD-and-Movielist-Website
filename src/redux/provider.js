'use client'
import { store } from "./store"
import { Provider } from "react-redux"

export const Providers = (props) => {
  return <Provider store={store}>{props.children}</Provider>
}