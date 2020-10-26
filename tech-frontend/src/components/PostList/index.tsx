import React from "react";
import { Container } from "./styles";
import IPost from "../../interfaces/IPost";
import PostCard from "../PostCard";

type PostListProps = {
    posts: [IPost];
};
const PostList: React.FC<PostListProps> = ({ posts }) => {
    return (
        <Container>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </Container>
    );
};

export default PostList;
