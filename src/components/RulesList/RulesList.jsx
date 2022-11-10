import React from "react";
import "./rulesList.css";
import RulesChip from "../RulesChip/RulesChip";

function RulesList({ rules, handleDeleteRule }) {

  return (
    <div className="rulesList">
      {rules?.map((val) => (
        <RulesChip key={val.id}  data={val} handleDeleteRule={handleDeleteRule} />
      ))}
    </div>
  );
}

export default RulesList;
