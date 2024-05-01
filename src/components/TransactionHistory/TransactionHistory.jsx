import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.headList}>
      <thead>
        <tr className={s.headItem}>
          <th className={s.headText}>Type</th>
          <th className={s.headText}>Amount</th>
          <th className={s.headText}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableList}>
        {items.map((item) => (
          <tr className={s.tableItem} key={item.id}>
            <td className={s.tableText}>{item.type}</td>
            <td className={s.tableText}>{item.amount}</td>
            <td className={s.tableText}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
