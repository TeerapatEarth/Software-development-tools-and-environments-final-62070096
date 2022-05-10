import {useCallback, useEffect, useState} from "react"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [test, setTest] = useState([])
  const testFunction = useCallback(async () => {
    const res = await fetch('http://localhost:3030/test')
    const resJson = await res.json()
    setTest(resJson)
  }, [])
  useEffect(() => {
    testFunction()
  }, [testFunction]);
  return (
    <div className={styles.container}>
      {test.map((item) => (
        <p key={item._id}>{item.title}</p>
      ))}
    </div>
  )
}
