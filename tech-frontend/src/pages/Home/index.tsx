import React, { useState, useEffect, FormEvent } from "react";

import PostList from "../../components/PostList";
import IPost from "../../interfaces/IPost";
import api from "../../services/api";

const Home: React.FC = () => {
    const [posts, setPosts] = useState<[IPost]>();
    const [input, setInput] = useState("");

    async function loadData() {
        const response = await api.get("/posts");
        setPosts(response.data);
    }
    function novoPost(e: FormEvent) {
        e.preventDefault();
        api.post(`/posts`, {
            message: input,
        })
            .then((_) => {
                setInput("");
                loadData();
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        loadData();
    }, [0]);

    return (
        <div className="container-fluid">
            <div className="mb-3 mt-2">
                <h3>@Tech Frontend</h3>
            </div>
            <div>
                <form onSubmit={(e) => novoPost(e)}>
                    <div className="container mb-1">
                        <input
                            className="form-control"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Novo Post"
                        ></input>
                    </div>
                </form>
            </div>
            <div className="container-fluid">
                {posts && <PostList posts={posts}> </PostList>}
            </div>
        </div>
    );
};

export default Home;
