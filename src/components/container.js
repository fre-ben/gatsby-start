import React from "react"
import * as styles from "./container.module.css"

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>
}
