import styles from "./RouteBoundary.module.css";
const RootErrorBoundary = () => {
  return (
    <>
      <div className={styles.error_page}>
        <h1>404</h1>
        <p>Oh no! We couldn’t find it</p>
      </div>
    </>
  );
};

export default RootErrorBoundary;
