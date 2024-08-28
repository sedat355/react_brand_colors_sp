

const Header = () => {
  return(
    <header className="header">
      <h1 className="logo-title">
        <img src="logo.png" className="logo"/>
        <a className="title">
          <span className="first">Brand</span>
          <span className="second">Colors</span>
        </a>
      </h1>

      <p className="desc">
      The biggest collection of official brand color codes around. Curated by <a>@brandcolors</a> and friends.
      </p>

      <div className="header-links">
        <a className="suggest-link">Suggest a Brand</a>
        <a className="about-link">About BrandColors</a>
      </div>
    </header>
  )
}

export {Header}