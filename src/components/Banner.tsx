import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src="/img/banner.png" alt="Banner" objectFit="cover" fill={true} priority />
      <div className={styles.bannerText}>
        <h1 className="text-3xl font-semibold">where every event finds its venue</h1>
        <h3 className="text-xl font-serif">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to perfect place.</h3>
      </div>
    </div>
  );
}