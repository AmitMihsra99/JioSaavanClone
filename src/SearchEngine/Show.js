import styled from "styled-components";
import Sheading from "./Sheading";

export default function Show({ data, loading, toggleShowSearch, ChangeSong }) {
 

  const SongContainer = styled.div`
    height: 40px;
    width: 230px;
  `;
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    gap: 2%;
    width: 80%;
    margin: ${!loading ? "0%" : "2%"} auto;
    grid-row-gap: 15px;
  `;
  const CoverImg = styled.img`
    width: 41px;
    height: 37px;
    cursor: pointer;
    border-radius: 4px;
    float: left;
    margin-right: 10px;
    border-radius: 4px;
  `;
  const SongName = styled.div`
    height: 90%;
    width: 189px;
  `;

  return (
    <>
      {" "}
      {!loading ? <Sheading/> : null}
      <Grid>
        {data.map((el) => (
          <SongContainer>
            {/* <Link to="/player"> */}
            <CoverImg
              onClick={() => {
                toggleShowSearch();
                ChangeSong(el);
              }}
              src={el.image}
            ></CoverImg>{" "}
            {/* </Link> */}
            <SongName>
              <span
                style={{
                  width: "189px",
                  fontFamily: "Lato",

                  fontStyle: "normal",
                  fontWeight: "bold",
                  fontSize: "14px",
                  lineHeight: "17px",
                }}
              >
                {el.song}
              </span>
              <br />
              <span
                style={{
                  width: "189px",
                  fontFamily: "Lato",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "14px",
                  textAlign: "left",
                  color: "#B9B9B9",
                }}
              >
                {el.year} {el.language} {!loading ? "Album" : null}
              </span>
            </SongName>
          </SongContainer>
        ))}
      </Grid>
    </>
  );
}
