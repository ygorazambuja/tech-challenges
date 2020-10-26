import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IPost from "../../interfaces/IPost";
import api from "../../services/api";

type PostCardProps = {
    post: IPost;
};

interface Post {
    id: number;
    message: string;
    comments?: [Comment];
}

interface Comment {
    id: number;
    message: string;
}

const PostCard: React.FC<PostCardProps> = ({ post, ...rest }) => {
    const [postFull, setPostFull] = useState<Post>();

    async function loadComments() {
        const { data } = await api.get(`/posts/${post.id}/comments`);
        console.log(data);
        setPostFull(data);
    }

    useEffect(() => {
        loadComments();
    }, [0]);

    return (
        <div className="card text-center">
            <div className="card-body ">
                <h5 className="card-title">{post.message}</h5>
                <ul className="list-group">
                    {postFull &&
                        postFull?.comments?.map((comment) => (
                            <li className="list-group-item" key={comment.id}>
                                {comment.message}
                            </li>
                        ))}
                </ul>
                <div className="mb-2 mt-2">
                    <Link
                        className="btn btn-primary"
                        to={`/novoComentario/${post.id}`}
                    >
                        Comente
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
