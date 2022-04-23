import { UserInfoType } from "@/model/type/UserInfo";
import styles from "./UserInfo.module.scss";

export default function UserInfo(props: UserInfoType) {
  const { id, name, age, adress } = props;
  return (
    <div className={styles.container}>
      <p>ID:{id}</p>
      <p>姓名:{name}</p>
      <p>年龄:{age}</p>
      <p>地址:{adress}</p>
    </div>
  );
}
