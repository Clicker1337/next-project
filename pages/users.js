import { useEffect, useState } from "react"
import Link from "next/link"
import MainContainer from "../components/MainContainer"

const users = ({users}) => {
    return (
        <MainContainer keywords={"users"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link legacyBehavior={true} href={`/users/[id]`} as={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>)}
            </ul>
        </MainContainer>
    )
}

export default users


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: {users},
    }
}