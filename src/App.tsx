import {Header} from "./components/Header.tsx";
import {Post, PostType} from "./components/Post.tsx";
import {Sidebar} from "./components/Sidebar.tsx";
import styles from './App.module.css'
import './global.css'

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarurl: 'https://github.com/IgorCastilhos.png',
            name: 'Igor Castilhos',
            role: 'Web Developer'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portfólio. O nome do projeto é Social Media Feed🚀'
            },
            {type: 'link', content: 'igor/SocialMediaFeed'},
            {type: 'paragraph', content: ''},
        ],
        publishedAt: new Date('2023-03-18 10:15:00'),
    },
    {
        id: 2,
        author: {
            avatarurl: 'https://avatars.githubusercontent.com/u/4458174?v=4',
            name: 'ThePrimeAgen',
            role: 'Netflix Btw'
        },
        content: [
            {type: 'paragraph', content: 'Fala galeraa 👋'},
            {
                type: 'paragraph',
                content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no curso da Rocketseat. O nome do projeto é Example Feed🚀'
            },
            {type: 'link', content: 'igor.design/ExampleFeed'},
            {type: 'paragraph', content: ''},
        ],
        publishedAt: new Date('2023-03-17 20:15:00'),
    },
];


export function App() {
    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <Sidebar/>
                <main>
                    {posts.map(post => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                            />
                        )
                    })}
                </main>
            </div>
        </div>
    )
}
