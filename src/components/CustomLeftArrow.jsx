function CustomLeftArrow({ onClick, ...rest }) {

  return (
    <button
      onClick={() => onClick()}
      aria-label="Next Slide"
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        padding: "10px",
        position: "absolute",
        right: "500px",
        bottom: "-20px",
        fontSize: "60px",
      }}
    >
      {" "}
      &#x2190;
    </button>
  );
}

export default CustomLeftArrow;
