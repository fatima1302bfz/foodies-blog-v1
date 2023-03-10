import { CommentBody } from "@/types";
import React, { useState } from "react";
import classes from "./form.module.css";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";

interface Props {
  postID: string;
  refreshComments: () => {}
}
const Form = ({ postID, refreshComments}: Props) => {
  const [commentText, setCommentText] = useState<string>("");
  const [usernameInput, setUsernameInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");
  const { data: session } = useSession();

  const addCommentHandler = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    
    const comment: CommentBody = {
      username: usernameInput || session?.user?.name || "Unkown User",
      email: emailInput || session?.user?.email || "Unkown Email",
      avatar: session?.user?.image || "/avatar.jpg",
      comment: commentText,
    };
    const sendCommentToServer = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}api/createComment`,
      {
        method: "POST",
        body: JSON.stringify({ ...comment, postID }),
      }
    );
    toast.success("Comment added with success!", {
      style: {
        border: '1px solid green',
        padding: '26px',
        color: 'green',
        width: '250px',
        height: '90px'
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    });
    refreshComments()
    setCommentText("");
    setUsernameInput("");
    setEmailInput("");
  };
  return (
    <div className={classes["post-comment"]}>
      <h2>Add Comment</h2>
      {session ? (
        <form className={classes["comment-form"]}>
          <div className={classes["form-group"]}>
            <input
              type="text"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Username"
            ></input>
          </div>
          <div className={classes["form-group"]}>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Email"
            ></input>
          </div>
          <div className={classes["form-group"]}>
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Comment....."
              required
            ></textarea>
          </div>
          <div className={classes["form-group"]}>
            <button
              disabled={!commentText}
              onClick={addCommentHandler}
              type="submit"
              className={classes["btn--blue"]}
            >
              Post
            </button>
          </div>
          <Toaster position="bottom-center" reverseOrder={true} />

        </form>
      ) : (
        <p className={classes["log-condition"]}>
          You should{" "}
          <span
            onClick={() => {
              signIn();
            }}
          >
            Login
          </span>
          before.
        </p>
      )}
    </div>
  );
};

export default Form;
function saveSettings(settings: any): Promise<unknown> {
  throw new Error("Function not implemented.");
}
