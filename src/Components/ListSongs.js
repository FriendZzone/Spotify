import React, { useContext, useEffect, useState } from 'react';
import { Songs } from '../Context'

const ListSongs = () => {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setIdSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setIdSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(()=>{
        setIdSong(song.id)
        console.log('useEffect' , song.id)
    }, [song])
    return (
        <div className="col-span-2 overflow-y-scroll">
            {console.log('re-render-ListSong')}
            <table className="table-auto w-full ">
                <thead className="text-white">
                    <tr>
                        <th className="w-[10%] h-12">#</th>
                        <th className="text-left">title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        DataSongs.map((song, index) => (
                            <tr 
                                key={index} 
                                className={`text-gray-500 bg-slate-800 h-12 hover:bg-gray-600 hover:text-cyan-600 ${idSong === song.id && 'bg-gray-600 text-teal-400'}`} 
                                onClick={() => {handlePlaySong(song.id)}}>
                                <td className="text-center">{index + 1}</td>
                                <td>{song.name}</td>
                                <td className="text-center">{song.author}</td>
                                <td className="text-center"><a href={song.url}></a><i className="fa fa-download"></i></td>
                            </tr>
                        ) )
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default ListSongs;