import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
// import UpdateProfileDialog from './UpdateProfileDialog'
// import { useSelector } from 'react-redux'
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const skills = ["Html", "Css", "Javascript", "Reactjs"]
const isResume = true;

const Profile = () => {
    // useGetAppliedJobs();
    // const [open, setOpen] = useState(false);
    // const {user} = useSelector(store=>store.auth);

    return (
        <div>
            <Navbar />
            <div className='max-w-4xl mx-10 bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_n9rWZhYM58VNthl8xrLymp601sV564gXQ&s" alt="profile" />
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>full name</h1>
                            <p>Passionate tech enthusiast with expertise in [mention specific software or hardware] currently focused on [current project or area of interest]. Always eager to learn new tools and troubleshoot challenges to optimize systems and user experience."</p>
                        </div>
                    </div>
                    <Button className="text-right" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>email</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>phoneNumber</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length!==0 ? skills.map((item, index)=><Badge key={index}>{item}</Badge>):<span>NA</span>
                        }
                    </div>
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href='https://www.youtube.com/' className='text-blue-500 w-full hover:underline cursor-pointer'>Youtube</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Applied Job Table   */}
                <AppliedJobTable />
            </div>
            {/* <UpdateProfileDialog open={open} setOpen={setOpen}/> */}
        </div>
    )
}

export default Profile