"use client"
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';

interface LibraryProps {}

const Library: React.FC<LibraryProps> = ({}) => {
    const onClick = () => {
        // Handles Upload
    };
    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-1 pt-4 ">
                <div className="inline-flex items-center gap-x-2">
                <TbPlaylist size={26} className='text-neutral-400'/>
                <p className="text-neutral-400 font-medium text-md">Playlists</p>
                </div>
                <AiOutlinePlus size={26} className='text-neutral-400 cursor-pointer hover:text-white transition' onClick={onClick}/>
            </div>
            <div className='
            flex
            flex-colgap-y-2
            mt-4
            px-3'>
            List of Songs

            </div>
        </div>
    );
}

export default Library;