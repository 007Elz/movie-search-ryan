import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";


export default function LandingPage() {
return (
<div className="landing-container">
<h1 className="landing-title">Welcome to MovieBox</h1>
<p className="landing-sub">Watch trending movies and shows instantly.</p>
<Link to="/movies" className="btn-watch">
Watch Now
</Link>
</div>
);
}