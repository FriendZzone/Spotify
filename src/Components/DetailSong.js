import React, { useContext } from 'react';
import { Songs } from '../Context'

const DetailSong = () => {
    const {song} = useContext(Songs)
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500
            font-bold">Now Playing</h2>
            <h3 className="text-neutral-400 text-2xl">{song.name}</h3>
            <div className="w-[240px] m-auto mt-6">
                <img className="w-full" src={song.links.images[0].url} alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-2">
                <img className="w-[70px] rounded-full" src={song.links.images[0].url} alt="avatar" />
                <span className="text-xl text-white">{song.author}</span>
            </div>
        </div>
    );
};

export default DetailSong;