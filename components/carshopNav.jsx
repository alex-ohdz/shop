import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Link from "next/link";

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 10,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const CarshopNav = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <Tooltip title="Ir al carrito">
        <Link href="/carrito">
        <IconButton
          color="primary"
          aria-label="buy_car"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => console.log("Ir al carrito")}
        >
          {/* número de objetos en el carro */}
          <StyledBadge badgeContent={5} color="secondary">
            <ShoppingCartOutlinedIcon
              sx={{
                fontSize: 25,
                color: "ButtonHighlight",
                marginRight: "12px",
                transition: "transform 0.3s ease",
                transform: isHovered ? "translateY(-5px)" : "none",
              }}
            />
          </StyledBadge>
        </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
};

export default CarshopNav;
