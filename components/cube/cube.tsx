import styles from "@styles/cube.module.css"

export default function ButtonGrid() {
  const buttons = Array.from({ length: 25 }, (_, i) => (
    <button className={styles.button} key={i}>Button {i + 1}</button>
  ))

  return (
    <div className={styles.grid}>
      {buttons}
    </div>
  )
}
