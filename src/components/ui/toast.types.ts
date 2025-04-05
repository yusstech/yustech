import * as React from "react"
import { Toast, ToastAction } from "./toast"

export type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = React.ReactElement<typeof ToastAction> 