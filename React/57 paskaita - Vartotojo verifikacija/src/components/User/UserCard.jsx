const UserCard = ({ data, banOrUnbanUser }) => {
  return (

    <div className="banUser">
      <div className="user">
        <img
          src={data.avatar}
          alt="user avatar"
        />
        <span>{data.userName}</span>
      </div>

      <button onClick={() => banOrUnbanUser(data.id)}>
        {data.isBanned ? 'UnBan' : 'Ban'}
      </button>
    </div>
  );
}

export default UserCard;