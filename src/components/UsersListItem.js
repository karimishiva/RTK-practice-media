import {GoTrash} from 'react-icons/go'
import { useThunk } from '../hooks/use-thunk'
import removeUser from '../store/thunks/removeUser'
import Button from './Button'
function UsersListItem({user}){
    const [doRemoveUser,isLoading,error]=useThunk(removeUser)

    const handleClick=()=>{
        doRemoveUser(user)
    }
   return <div className="mb-2 border rounded">
                <div className="flex justify-between items-center cursor-pointer p-2">
                 <div className='flex flex-row items-center justify-between'> 
                 <Button className="mr-3" loading={isLoading} onClick={handleClick}><GoTrash/></Button>
                   {error && <div>Error deleting user ...</div>}
                    {user.name}
                    </div>
                </div>
            </div>
}

export default UsersListItem