function CustomRightArrow({ onClick, ...rest }) {
  
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
        right: "400px",
        bottom: "-20px",
        fontSize: "60px",
      }}
    >
      {" "}
      &#x2192;
    </button>
  );
}

export default CustomRightArrow;
