import React from "react";
import Card from "./Card";

type Props = {};

function DemoProps({}: Props) {
    const user = {
      name: "John",
      img: 'https://picsum.photos/400'
    }
    return (
        <div>
            <Card dataUser={user} title="thông tin user"/>
        </div>
    );
}

export default DemoProps;
