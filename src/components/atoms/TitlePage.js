import React from 'react';

export default function TitlePage(props) {
  const { title } = props;
  return (
    <>
      <div className='font-poppins text-center  text-green-700 text-xl md:text-3xl font-bold'>{title}</div>
    </>
  );
}
