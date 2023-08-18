"use client"

import { Movie } from "@/typings"
import { useEffect, useState } from "react"

interface Props {
    netflixOriginals: Movie[]
}


export default function Banner({ netflixOriginals }: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(
            netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        )
    }, [netflixOriginals])

    console.log(movie)
    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}