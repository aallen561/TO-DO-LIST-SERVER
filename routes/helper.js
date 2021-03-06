import jwt from "jsonwebtoken";

export function verifyAuth(req, res, next) {
  console.log(req.headers);
  const token = req.headers.authorization.split(" ")[1];

  

  // this.$axios.headers["authorization"] = `Bearer ${data.token}`;


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (err) {
    // err
    return res.status(401).send("not authorized");
  }
}
