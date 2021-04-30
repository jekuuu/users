import React from 'react';
import './UserCard.css';

const UserCard = ({ data }) => {
  return (
    <div className='col-md-3 col-xs-1 mt-3'>
      <div className='card'>
        <img
          className='card-img-top mt-3'
          src={data.picture.large}
          alt={data.name.first}
        />
        <div className='card-body'>
          <h5 className='card-title'>
            {data.name.first} {data.name.last}
          </h5>
          <p className='card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
