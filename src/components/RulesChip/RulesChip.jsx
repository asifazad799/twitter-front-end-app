import React from "react";
import Chip from "@mui/material/Chip";

function RulesChip({ data, handleDeleteRule }) {
  return <Chip label={data.value} onDelete={() => handleDeleteRule(data.id)} />;
}

export default RulesChip;
