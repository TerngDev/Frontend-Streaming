import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>
        หากมีคำถาม โทรติดต่อ{" "}
        <span className="text-decoration-underline">9-999-999-999</span>
      </h1>
      <div className={styles.listsContainer}>
        <ul>
          <li>คำถามที่พบบ่อย</li>
          <li>นักลงทุนสัมพันธ์</li>
          <li>วิธีรับชม</li>
          <li>ข้อมูลบริษัท</li>
          <li>ที่ Netflix เท่านั้น</li>
        </ul>
        <ul>
          <li>ศูนย์ช่วยเหลือ</li>
          <li>ตำแหน่งงาน</li>
          <li>ข้อกำหนดการใช้งาน</li>
          <li>ติดต่อเรา</li>
        </ul>
        <ul>
          <li>บัญชี</li>
          <li>แลกบัตรของขวัญ</li>
          <li>ความเป็นส่วนตัว</li>
          <li>ทดสอบความเร็ว</li>
        </ul>
        <ul>
          <li>ศูนย์สื่อมวลชน</li>
          <li>ซื้อบัตรของขวัญ</li>
          <li>การตั้งค่าคุกกี้</li>
          <li>ประกาศแจ้งทางกฎหมาย</li>
        </ul>
      </div>
      <div className={styles.footer}>
        <p>
          Netflix Clone by TerngDev - View more on my{" "}
          <a
            href="https://github.com/TerngDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
