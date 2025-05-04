import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import { useState, useEffect } from "react";

export default function Layout({ title, children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Head>
        <title>{title ? title + " | Book Store" : "Book Store"}</title>
        <meta
          name="description"
          content="Book Store E-Commerce We site built with Nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          .main-wrapper {
            min-height: 100vh;
          }
          .main-wrapper.dark {
            filter: invert(1) hue-rotate(180deg);
            background-color: #fff;
          }
          .theme-toggle {
            position: fixed;
            right: 20px;
            top: 20px;
            z-index: 1000;
            padding: 8px;
            cursor: pointer;
            border-radius: 5px;
            border: 1px solid #000;
            background: #fff;
          }
          .main-wrapper.dark .theme-toggle {
            filter: invert(1) hue-rotate(180deg);
          }
          .main-wrapper.dark .no-invert {
            filter: invert(1) hue-rotate(180deg);
          }
          .main-wrapper.dark img {
            filter: invert(1) hue-rotate(180deg);
          }
        `}</style>
      </Head>
      <div className={`main-wrapper ${theme}`}>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <Header />
        <main className="main">{children}</main>
        <footer className="footer no-invert">
          <div className="container">
            Built with Nextjs and MongoDB by Rohit Yadav
          </div>
        </footer>
      </div>
    </>
  );
}
