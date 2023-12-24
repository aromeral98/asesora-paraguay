import React from 'react'
import Layout from './Layout'

type NoDataFoundProps = {
    title: string
}

const NoDataFound: React.FC<NoDataFoundProps> = ({ title }) => {
    return (
        <article className="flex justify-center items-center w-screen h-screen">
            <h1>{title}</h1>
        </article>
    )
}

export default NoDataFound;