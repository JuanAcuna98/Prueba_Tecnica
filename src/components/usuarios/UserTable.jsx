import { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useSelector } from "../../redux/store";
import { Box } from "@mui/system";

export default function UserDataTable({
  data,
  getData,
}) {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
        const resp = await customFetch({
            endpoint: "https://reqres.in/api/users?page=2",
            token: token,
            body: values,
            method: "POST",
          });
      setData(resp.item);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      {charging ? (
        <>
          <div className="spinner">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </>
      ) : (
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6">Email</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Avatar</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((element, index) => (
                  <TableRow
                    key={element._id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      ">.borde": {
                        padding: "0px",
                        ">div": {
                          borderLeft:
                            index % 2 ? "2px solid red" : "2px solid blue",
                          height: "42px",
                          display: "flex",
                          borderRadius: "0px",
                          ">h6": {
                            margin: "auto 0",
                            padding: "0 16px",
                          },
                        },
                      },
                    }}
                  >
                    <TableCell className="borde">
                      <Box>
                        <Typography variant="subtitle1">
                          {element.email}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell scope="row">
                      <Typography variant="subtitle1" color="textSecondary">
                        {element.avatar}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      )}
    </>
  );
}