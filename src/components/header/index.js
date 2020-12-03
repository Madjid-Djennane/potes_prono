import React from 'react'
import '../../App.css'

const Header = () => {
    return (
<header class="main-header">
	<div class="container">
		<h1 class="mh-logo">
			<p>Rany</p>
		</h1>
		<nav class="main-nav">
			<ul class="main-nav-list">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About us</a>
				</li>
				<li>
					<a href="#">Our clients</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
    )
}

export default Header
