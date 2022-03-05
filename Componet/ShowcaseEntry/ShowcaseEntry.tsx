import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { ItemPage } from '../../pages/[id]';
import styles from "./ShowcaseEntry.module.css";


export const ShowcaseEntry = ({ id, description, ...props }: ItemPage) => {
    const navigation = useRouter()
    const { image, title, url } = props
    return (
        <div className={styles.card}>
            <p onClick={() => navigation.back()}>{`<<`}Go  back</p>
            <div className={styles.subCard}>
                <h1 className={styles.title}>{id}</h1>
                <h3 className={styles.description}>{description}</h3>
                <div className={styles.img}>
                    {image && <Image src={image.url || ""} alt={image.title}
                        width={400} height={400} />}

                </div>

            <h1>{description}</h1>
            <a href={url?.value as string || ""}>{title}</a>
            </div>

        </div>
    )
}
