import React from "react";

type Props = {
  params: {
    userId: number;
  };
};

export default function page(props: Props) {
  const userId = props.params.userId;
  return <div>{`user with id ${userId}`}</div>;
}
