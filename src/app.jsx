import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./app.css";
import Nav from "./nav"

export default function App() {
  return (
    <Router
      root={(props) => (
        <main class="component">
          <div class="file-name">app.jsx</div>
          <div class="component-subtitle">Example project for issue #722</div>
          <p>Click on <code>`/blog`</code>, which uses the method of putting the file name in parens: <code>`(blog).jsx`</code>, works.</p>
          <p>Click on <code>`/socials`</code>, which uses the method of naming the file the same as the folder <code>`socials.jsx`</code>, does not work. It routes to the 404 page.. </p>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}