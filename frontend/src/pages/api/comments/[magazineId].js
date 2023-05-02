export default function handler(req, res) {
  const magazineId = req.query.magazineId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input...." });
      return;
    }

    const newComment = {
      id: new Date().toISOString,
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added comment", comment: newComment });
  }
  if (req.method === "GET") {
  }
}
