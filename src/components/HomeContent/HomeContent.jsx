import React from "react";
import styles from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <>
      <div className={`${styles.background_container}`}>
        <div className={`${styles.content}`}>
          <h1>ภาพยนตร์ รายการทีวี และความบันเทิงอีก มากมายแบบไม่จำกัด</h1>
          <h2>ราคาเริ่มต้นที่ 99 บาท ยกเลิกได้ทุกเมื่อ</h2>
          <h3>
            หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง
          </h3>
          <form>
            <div className={`${styles.input_container}`}>
              <input type="text" id="name" required />
              <label for="name">ที่อยู่อีเมล</label>
            </div>
            <button>{`เริ่มต้นใช้งาน >`}</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
