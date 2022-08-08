import React from 'react';

export default function Description(props) {
  const { decs } = props;
  return (
    <>
      <div className="font-poppins text-left md:text-left lg:w-4/5">{decs}</div>
    </>
  );
}
