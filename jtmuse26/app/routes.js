import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("/info", "routes/info.jsx"),
  route("/categories", "routes/categories.jsx"),
  route("/register", "routes/register.jsx"),
  route("/contact", "routes/contact.jsx"),
  route("/category/:Category", "routes/subCategory.jsx"),
];
