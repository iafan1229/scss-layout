import logo from './logo.svg';
import './scss/style.scss';

function App() {
	return (
		<div id='wrap'>
			<header>
				<h1 className='logo'>
					<img src={logo} alt='logo' />
				</h1>
				<ul className='gnb'>
					{['home', 'about react', 'board'].map((el) =>
						el === 'about react' ? (
							<li>
								<a href='/' target='_blank'>
									{el} :Learn React
								</a>
							</li>
						) : (
							<li>
								<a href='/'>{el}</a>
							</li>
						)
					)}
				</ul>
			</header>
			<main>
				<h2>메인</h2>
				<aside>
					<p>사이드메뉴</p>
				</aside>
			</main>
			<footer>
				<div className='footer-div'>푸터: @copyright 치맥녀</div>
				<div className='footer-div'>컬러가 칠해지는 푸터입니다.</div>
			</footer>
		</div>
	);
}

export default App;
