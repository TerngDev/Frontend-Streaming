import React, { useState } from "react";
import styles from "./Question.module.css";

const Question = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Netflix คืออะไร",
      answer: (
        <>
          <p>
            Netflix คือบริการสตรีมมิงที่นำเสนอความบันเทิงหลากหลายครบรส
            ทั้งรายการทีวี ภาพยนตร์ อนิเมะ สารคดีที่ชนะรางวัล และอีกมากมาย
            รับชมความบันเทิงทั้งหมดได้ในอุปกรณ์ที่เชื่อมต่ออินเทอร์เน็ตจำนวนหลายพันรายการ
          </p>
          <p>
            รับชมได้มากตามต้องการได้ทุกที่ที่ต้องการโดยไม่มีโฆษณาคั่น
            ด้วยค่าบริการรายเดือนราคาต่ำราคาเดียว ค้นพบความบันเทิงใหม่ๆ
            ได้ตลอดเวลา รวมทั้งรายการทีวีและภาพยนตร์ที่มีเพิ่มเข้ามาทุกสัปดาห์!
          </p>
        </>
      ),
    },
    {
      question: "ค่าใช้จ่ายในการใช้บริการ Netflix",
      answer: (
        <>
          <p>
            ดู Netflix ได้ทั้งในสมาร์ทโฟน แท็บเล็ต สมา﻿ร์ททีวี แล็ปท็อป
            หรืออุปกรณ์สตรีมมิง ด้วยค่าบริการรายเดือนราคาเดียว
            ราคาแพ็คเกจเริ่มต้นที่ 99 บาท ถึง 419 บาท ต่อเดือน
            ไม่มีค่าใช้จ่ายเพิ่มเติม ไม่มีสัญญาผูกมัด
          </p>
        </>
      ),
    },
    {
      question: "รับชมได้จากที่ไหนบ้าง",
      answer: (
        <>
          <p>
            ดูได้ทุกที่ ทุกเวลา เข้าสู่ระบบโดยใช้บัญชี Netflix
            เพื่อดูทันทีผ่านทางเว็บไซต์ที่ netflix.com
            ดูได้ในคอมพิวเตอร์ส่วนตัวหรืออุปกรณ์ที่เชื่อมต่อกับอินเทอร์เน็ตที่มีแอป
            Netflix ติดตั้ง รวมทั้งสมาร์ททีวี สมาร์ทโฟน แท็บเล็ต
            เครื่องเล่นมีเดียสตรีมมิงและคอนโซลเกม
          </p>
          <p>
            นอกจากนี้ ยังสามารถดาวน์โหลดรายการโปรดโดยใช้แอป iOS หรือ Android
            ดาวน์โหลดเพื่อดูขณะเดินทาง และเมื่อไม่ได้เชื่อมต่ออินเทอร์เน็ต ดู
            Netflix ได้ทุกเมื่อไม่ว่าที่ไหน
          </p>
        </>
      ),
    },
    {
      question: "วิธียกเลิก",
      answer: (
        <>
          <p>
            Netflix ยืดหยุ่นไม่เรื่องมาก ไม่มีสัญญาและข้อผูกมัดกวนใจ
            ยกเลิกบัญชีออนไลน์ทำได้ง่ายแสนง่ายในสองคลิก
            ไม่มีค่าธรรมเนียมการยกเลิก เริ่มใช้หรือหยุดใช้งานบัญชีได้ทุกเมื่อ
          </p>
        </>
      ),
    },
    {
      question: "ความบันเทิงที่รับชมได้ทาง Netflix",
      answer: (
        <>
          <p>
            Netflix มีคลังความบันเทิงครบรส ทั้งภาพยนตร์เรื่องยาว สารคดี
            รายการทีวี อนิเมะ ผลงานจาก Netflix ที่ชนะรางวัล และอีกมากมาย
            รับชมได้ไม่จำกัดได้ทุกเวลาตามต้องการ
          </p>
        </>
      ),
    },
    {
      question: "Netflix เหมาะสำหรับเด็กไหม",
      answer: (
        <>
          <p>
            การใช้งานมุมเด็กของ Netflix
            จะรวมอยู่ในการเป็นสมาชิกของคุณเพื่อมอบการควบคุมให้ผู้ปกครองในขณะที่บุตรหลานรับชมรายการทีวีและภาพยนตร์ที่เหมาะสำหรับครอบครัวโดยใช้โปรไฟล์ของตนเอง
          </p>
          <p>
            โปรไฟล์มุมเด็กจะมาพร้อมการควบคุมของผู้ปกครองที่มีการป้องกันด้วยรหัส
            PIN
            ซึ่งคุณจะจำกัดระดับความเหมาะสมของเนื้อหาที่อนุญาตให้บุตรหลานรับชมและบล็อกเนื้อหาที่ไม่ต้องการให้รับชมได้
          </p>
        </>
      ),
    },
    // Add other questions and answers here
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.questionContainer}>
        <h1>คำถามที่พบบ่อย</h1>
        <ul className={styles.questionCardContainer}>
          {questions.map((item, index) => (
            <li
              key={index}
              className={`${styles.questionItem} ${
                expandedIndex === index ? styles.expanded : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              <div className={styles.questionItemHeader}>
                <label>{item.question}</label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                  viewBox="0 0 36 36"
                  width="36"
                  height="36"
                  data-icon="PlusLarge"
                  aria-hidden="true"
                  className={`${styles.icon} ${
                    expandedIndex === index ? styles.rotated : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                className={`${styles.content} ${
                  expandedIndex === index ? styles.expanded : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Question;
