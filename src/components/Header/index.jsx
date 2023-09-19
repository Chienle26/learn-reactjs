import CodeIcon from "@mui/icons-material/Code";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { cartItemsCountSelector } from "features/Cart/selectors";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuIcon: {
    marginRight: "16px",
  },

  title: {
    flexGrow: 1,
  },

  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuIcon} />
          <Typography variant="h6" component="div" className={classes.title}>
            <Link className={classes.link} to="/">
              CHARLIE SHOP
            </Link>
          </Typography>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItemsCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <NavLink className={classes.link} to="/todos">
            <Button color="inherit">Todos</Button>
          </NavLink>
          <NavLink className={classes.link} to="/albums">
            <Button color="inherit">Albums</Button>
          </NavLink>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
