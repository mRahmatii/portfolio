import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";

export default function Comments(props) {
  const { magazineId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + magazineId)
        .then((response) => response.json())
        .then(
          (data) => {
            setComments(data.comments);
          },
          [showComments]
        );
    }
  });
  return (
    <section>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Cooments
      </button>
      {showComments && <NewComment />}
      {showComments && <CommentList />}
    </section>
  );
}
