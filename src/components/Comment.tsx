import {ThumbsUp, Trash} from '@phosphor-icons/react'
import {useState} from 'react'
import {Avatar} from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                src="https://github.com/IgorCastilhos.png"
                alt=""
            />

            <div className={styles.commentBox}>
                {/* Caixa ao redor do comentário, nome, tempo, like e da lixeira */}
                <div className={styles.commentContent}>
                    {/* Contains: Name of the author of the comment, time posted and the delete icon */}
                    <header>
                        <div
                            className={styles.authorAndTime}>
                            <strong>Igor Castilhos</strong>
                            <time
                                title='17 de Março às 10:13h'
                                dateTime='2023-03-17 10:11:34'>
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                    {/* Conteúdo do comentário */}
                </div>

                <footer>
                    {/* Like e quantidade de likes */}
                    <button
                        onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
