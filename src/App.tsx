import * as React from "react";
import styles from "./App.module.scss";
import Row from "./components/Row";

interface Props {
  name: string;
}

export default function App(props:Props) {
  const { name } = props;
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.body}>Hello {name}</h1>
        <h1 className={styles.main}>Hello {name}</h1>
        <Row />
      </div>
    </>
  );
}

