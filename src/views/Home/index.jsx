import Link from "next/link";
import styles from "./styles.module.scss";
import React from "react";
import images from "@/src/aseets/images";
import { Lobster } from "next/font/google";
import Image from "next/image";
import { foodMenu, ourChef } from "./helpers/constants";

export const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className={styles.Home}>
      <div
        className={styles.banner}
        style={{
          backgroundImage: `url(${images.bannerI.src})`,
        }}
      >
        <div className={styles.container}>
          <p className={lobster.className}> Welcome to</p>
          <h1>grand restaurant</h1>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna Risus.
          </h5>
          <Link href="#" role="button">
            order now
          </Link>
        </div>
      </div>
      <section className={styles.I}>
        <div className={styles.container}>
          <div className={styles.column}>
            <div className={styles.img}>
              <Image src={images.aboutI} alt="" />
              <Image src={images.aboutII} alt="" />
            </div>
          </div>
          <div className={styles.column}>
            <p className={lobster.className}>Welcome at</p>
            <p>Grand Restaurant</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <div className={styles.aboutUs}>About Us</div>
          </div>
        </div>
      </section>
      <section
        className={styles.II}
        style={{
          backgroundImage: `url(${images.chefRecommended.src})`,
        }}
      >
        <div className={styles.container}>
          <p className={lobster.className}>Chef Recommended</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </section>
      <section className={styles.III}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Food Menus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.foodMenu}>
                <Image src={images.foodMenu} width={425} height={411} alt="" />
              </div>
            </div>
            <div className={styles.column}>
              {foodMenu.map((item, i) => (
                <div key={i} className={styles.menu}>
                  <div key={i} className={styles.title}>
                    <h3># {item.name}</h3>
                    <h3>{item.price}</h3>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
              <div className={styles.button}>
                <Link href="#" role="button">
                  See All menu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={styles.IV}
        style={{
          backgroundImage: `url(${images.popularDishes.src})`,
        }}
      >
        <div className={styles.container}>
          <p className={lobster.className}>Popular Dishes</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </section>
      <section className={styles.V}>
        <div className={styles.container}>
          <h2>Our Chefs</h2>
          <div className={styles.list}>
            {ourChef.map((item, i) => (
              <div key={i} className={styles.ourChef}>
                <Image src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
