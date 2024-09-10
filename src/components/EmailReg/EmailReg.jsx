import React from "react";
import styles from "./EmailReg.module.css";

const EmailReg = () => {
  return (
    <>
      <div className={`${styles.formContainer}`}>
        <h1>
          หากพร้อมรับชม ป้อนอีเมลเพื่อสร้างหรือเริ่มต้นการเป็นสมาชิกอีกครั้ง
        </h1>
        <form>
          <div className={`${styles.input_container}`}>
            <input type="text" id="name" required />
            <label for="name">ที่อยู่อีเมล</label>
          </div>
          <button>{`เริ่มต้นใช้งาน >`}</button>
        </form>
      </div>
    </>
  );
};

export default EmailReg;
