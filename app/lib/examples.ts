  export const exampleSnippets = {
  loginForm: `
export default function LoginForm() {
  return (
    <div>
      <h1>Login</h1>

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button>Submit</button>

      <img src="/logo.png" />

      <a href="#">Click here</a>
    </div>
  );
}
`,

  navbar: `
export default function Navbar() {
  return (
    <nav>
      <button>☰</button>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Click here</a></li>
      </ul>

      <input type="search" placeholder="Search" />

      <img src="/avatar.png" />
    </nav>
  );
}
`,

  productCard: `
export default function ProductCard() {
  return (
    <div className="card">
      <img src="/shoe.png" />

      <h2>Nike Shoe</h2>

      <button>Buy</button>

      <button>❤️</button>
    </div>
  );
}
`
};