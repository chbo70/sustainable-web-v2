import React from "react";
import { useEffect } from "react";
import "./imagesection.css";

const ImageSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".image-content-list-item");
      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      const firstItemRect = firstItem.getBoundingClientRect();
      const lastItemRect = lastItem.getBoundingClientRect();

      if (firstItemRect.top <= 0 && lastItemRect.bottom >= window.innerHeight) {
        items.forEach((item) => item.classList.add("fixed"));
      } else {
        items.forEach((item) => item.classList.remove("fixed"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="image-section">
      <div className="image-section-overlay">
        <ul className="image-content-list">
          <li className="image-content-list-item">
            <div className="image-content">
              <h1 className="image-content-main-title">Benefits</h1>
              <h2 className="image-content-title">Lower Carbon Footprint</h2>
              <p className="image-content-description">
                The internet contributes significantly to global carbon
                emissions due to the energy required for data centers, network
                infrastructure, and user devices. Sustainable web design helps
                reduce this impact by optimizing websites to use fewer
                resources. Techniques such as efficient coding, compressed
                images, lazy loading, and static site generation minimize the
                amount of data transferred, lowering energy consumption.
                Additionally, choosing green hosting providers that run on
                renewable energy further decreases the carbon footprint of a
                website. By adopting these practices, businesses and developers
                can make the web more environmentally friendly while maintaining
                high performance.
              </p>
            </div>
          </li>
          <li className="image-content-list-item">
            <div className="image-content">
              <h2 className="image-content-title">Cost Savings</h2>
              <p className="image-content-description">
                Sustainability in web development also translates into financial
                benefits. By reducing the amount of data stored and transferred,
                businesses can lower their bandwidth costs and server expenses.
                Efficient websites require fewer computational resources, which
                means they can run smoothly on more affordable hosting
                solutions. Furthermore, optimizing website performance reduces
                the need for frequent infrastructure upgrades, saving companies
                from unnecessary expenses. A streamlined website also decreases
                maintenance efforts, lowering long-term operational costs. As a
                result, sustainable web design is not only good for the planet
                but also helps businesses cut costs and improve profitability.
              </p>
            </div>
          </li>
          <li className="image-content-list-item">
            <div className="image-content">
              <h2 className="image-content-title">Maintance & Scalability</h2>
              <p className="image-content-description">
                A well-structured website built with sustainability in mind is
                easier to maintain and scale over time. By using clean, modular
                code and efficient frameworks, developers can ensure that future
                updates and feature additions require minimal effort and
                resources. Sustainable web practices, such as reducing reliance
                on unnecessary scripts and plugins, prevent websites from
                becoming bloated and difficult to manage. Moreover, as websites
                grow and traffic increases, an optimized architecture ensures
                that scalability does not come at the cost of performance. This
                means businesses can expand their digital presence without
                significantly increasing their environmental impact or
                infrastructure costs.
              </p>
            </div>
          </li>
          <li className="image-content-list-item">
            <div className="image-content">
              <h2 className="image-content-title">User Experience</h2>
              <p className="image-content-description">
                A sustainable website is designed with efficiency and
                performance in mind, which directly benefits the user
                experience. Faster loading times, reduced data consumption, and
                improved mobile responsiveness ensure that users can access
                content quickly and seamlessly. Additionally, sustainable design
                often prioritizes accessibility, making websites more inclusive
                for users with different needs, including those with slower
                internet connections or disabilities. A cleaner,
                distraction-free interface also enhances usability, leading to
                higher engagement, lower bounce rates, and improved customer
                satisfaction. By focusing on sustainability, businesses can
                provide a better, more user-friendly digital experience while
                contributing to a greener web.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ImageSection;
