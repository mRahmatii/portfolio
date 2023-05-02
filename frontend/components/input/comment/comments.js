import { useEffect, useState } from "react";
import CommentList from "./comment-list";
import NewComment from "./new-comment";
import Button from "../../ui/button";

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

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    fetch("/api/comments/" + magazineId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <section className="w-full max-w-3xl mx-auto mt-20">
      <Button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </Button>

      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  );
}
