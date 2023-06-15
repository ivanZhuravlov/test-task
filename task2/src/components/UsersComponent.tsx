import { useState, useEffect, FC } from "react";
import '../styles/UserComponent.css'
import { ITeamMember } from '../types'
import { getInvites, getUsers } from '../mocks'
import AdminsIcon from '../assets/AdminsIcon.svg';
import UsersIcon from '../assets/UsersIcon.svg';
import RightArrow from '../assets/RightArrow.svg';

interface IUserItemProps {
  userInfo: ITeamMember
}

const UserItem: FC<IUserItemProps> = ({ userInfo }) => {
  const commonStyles = `user-list-item px-2`
  const { isInvite, user, phone } = userInfo

  if (isInvite) {
    return <div className={commonStyles}>
      <p className='light-gray'>{phone}</p>
      <div className='user-list-item-ivitation'>
        <span className='badge dark-gray'>Invited</span>
        <img src={RightArrow} className="RightArrow" alt="RightArrow" />
      </div>
    </div>
  }

  
  
  return (
  <div className={commonStyles}>
    <p>{user!.name} {user!.lastName}</p>
    <img src={RightArrow} className="RightArrow" alt="RightArrow" />
  </div>
  );
};

const UsersList: FC = () => {
  const [admins, setAdminUsers] = useState<ITeamMember[]>([]);
  const [users, setUsers] = useState<ITeamMember[]>([]);

  useEffect(() => {
    Promise.all([getUsers(), getInvites()]).then(([ resultUsers, resultInvites ]) => {
      const adminUsers: ITeamMember[] = []
      const regularUsers: ITeamMember[] = []

      for (let i = 0; i < resultUsers.length; i++) {
        const element = resultUsers[i];
        
        if (element.role === 'Administrator') {
          adminUsers.push(element)
          continue
        }
        regularUsers.push(element)
        
      }

      for (let j = 0; j < resultInvites.length; j++) {
        const element = {...resultInvites[j], isInvite: true};
        
        if (element.role === 'Administrator') {
          adminUsers.push(element)
          continue
        }
        regularUsers.push(element)
      }
      setUsers(regularUsers);
      setAdminUsers(adminUsers)
    })
  }, []);

  return (
    <>
    <div className='user-container-header mt-1'>
    <img src={AdminsIcon} className="AdminsIcon" alt="AdminsIcon" />
    <p className='light-gray user-container-header-text ml-half'>Administrators</p>
    </div>
    
    <div className="user-container mt-half">
      {admins.map((userInfo, i) => (
        <UserItem key={i} userInfo={userInfo} />
      ))}
    </div>

    <div className='user-container-header mt-2'>
    <img src={UsersIcon} className="UsersIcon" alt="UsersIcon" />
    <p className='light-gray user-container-header-text ml-half'>Standard Users</p>
    </div>
    
    <div className="user-container mt-half">
      {users.map((userInfo, i) => (
        <UserItem key={i} userInfo={userInfo} />
      ))}
    </div>
    </>
  );
};

export default UsersList;
