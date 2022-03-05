import Link from 'next/link'
import React from 'react'
import styles from './ListItem.module.css'

type Props = {
    data:string
}

export const ListItem = ({data}:Props) => {
    
  return (
    <div  className={styles.card}>
        <Link href={data}>
    <h2>{data}</h2>
    </Link>

  </div>
  )
}