/*
 * @Description: 
 * @version: 
 * @Author: sdu-gyf
 * @Date: 2021-01-18 18:04:32
 * @LastEditors: sdu-gyf
 * @LastEditTime: 2021-01-19 11:41:31
 */
import * as React from 'react';
import styles from './index.module.scss';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to icejs!</h2>

      <p className={styles.description}>This is a awesome project, enjoy it!</p>

      <div className={styles.action}>
        <a
          href="https://ice.work/docs/guide/about"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20,
          }}
        >
          使用文档
        </a>
        <a
          href="https://github.com/ice-lab/icejs"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20,
          }}
        >
          GitHub
        </a>
        <a
          href="http://localhost:3333/#learning/http">
          跳转到自定义页面
        </a>
      </div>
    </div>
  );
};

export default Guide;
