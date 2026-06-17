import React from "react";

function Universe() {
  const items = [
    {
      img: "/media/images/zerodhaFundhouse (1).png",
      title: "Zerodha Fund House",
      desc: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      img: "/media/images/sensibullLogo.svg",
      title: "Sensibull",
      desc: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      img: "/media/images/tijoriLogo.png",
      title: "Tijori",
      desc: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      img: "/media/images/streakLogo.png",
      title: "Streak",
      desc: "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      img: "/media/images/smallcaseLogo.png",
      title: "Smallcase",
      desc: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.",
    },
    {
      img: "/media/images/dittoLogo.png",
      title: "Ditto",
      desc: "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {items.map((item, index) => (
          <div className="col-md-4 p-3 mt-5" key={index}>
            <div style={{ height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ maxHeight: "50px", maxWidth: "180px", objectFit: "contain" }}
              />
            </div>
            <p className="text-small text-muted mt-3">{item.desc}</p>
          </div>
        ))}

        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3 text-center"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;