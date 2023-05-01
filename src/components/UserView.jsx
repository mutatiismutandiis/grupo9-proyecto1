import React from "react";
import Card from "./Card";
import json from "../assets/grupos.json";

const UserView = () => {

    const groups = json.groups; 

    return (
        <div> 
            {groups.map((group) => {
            return <Card 
                key={group.id}
                id={group.id}
                leader={group.leader}
                members={group.members} />;
            })} 
        </div>
    )
}

export default UserView;
