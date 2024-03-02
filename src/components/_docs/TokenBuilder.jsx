import tokenList from "../../../build-tools/tokens";

export default function TokenBuilder(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";

  console.log(tokenList);
  return (
    <div className={"d-flex flex-column" + classes}>
      {tokenList
        ? tokenList.map((item, index) => {
            return (
              <>
                {item.title ? (
                  <h2 style={{ marginTop: "4rem" }}>{item.title}</h2>
                ) : (
                  <div
                    className="d-flex align-center justify-space-between"
                    key={index}
                    style={{
                      borderBottom: "1px solid #BBBBBB",
                      padding: "2rem 0rem",
                    }}
                  >
                    <div className="d-flex gap-8 align-center">
                      <h4 style={{ width: "300px" }}>{item.name}</h4>
                      <p>{item.value}</p>
                    </div>
                    <div
                      style={{
                        width: "150px",
                        height: "100px",
                        backgroundColor: item.value,
                      }}
                    ></div>
                  </div>
                )}
              </>
            );
          })
        : ""}
    </div>
  );
}
