import { useRef, useState } from "react";
import Button from "../../ui/button";

export default function NewComment(props) {
  const [isInvalid, setIsInvalid] = useState(false);

  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const commentInputRef = useRef();

  function sendCommentHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    if (
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredComment ||
      enteredComment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    props.onAddComment({
      email: enteredEmail,
      name: enteredName,
      text: enteredComment,
    });
  }
  return (
    <section className="w-full my-20 border-t border-zinc-100 pt-4">
      <form className="w-full max-w-3xl mx-auto" onSubmit={sendCommentHandler}>
        <div className="flex flex-col">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="uppercase block text-zinc-600 text-sm font-bold mb-2 tracking-wide"
              for="name"
            >
              name
            </label>
            <input
              className="appearance-none block w-full bg-zinc-200 text-zinc-600 rounded py-3 px-4 mb-3 leading-tight border border-zinc-200 focus:outline-none focus:bg-white"
              type="text"
              id="name"
              ref={nameInputRef}
            ></input>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="uppercase block text-gray-700 text-sm font-bold mb-2 tracking-wide"
              for="email"
            >
              email
            </label>
            <input
              className="appearance-none block w-full bg-zinc-200 text-zinc-600 rounded py-3 px-4 mb-3 leading-tight border border-zinc-200 focus:outline-none focus:bg-white"
              type="email"
              id="email"
              ref={emailInputRef}
            ></input>
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="uppercase block text-gray-700 text-sm font-bold mb-2 tracking-wide"
              for="comment"
            >
              comment
            </label>
            <textarea
              className="appearance-none block w-full bg-zinc-200 text-zinc-600 rounded py-3 px-4 mb-3 leading-tight border border-zinc-200 focus:outline-none focus:bg-white"
              id="comment"
              ref={commentInputRef}
            ></textarea>
            {isInvalid && (
              <p>Please enter a valid email address and comment!</p>
            )}
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <Button>submit</Button>
          </div>
        </div>
      </form>
    </section>
  );
}
