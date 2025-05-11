import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const VoteModal = ({ isOpen, onClose }) => {
  const VOTE_LINKS = [
    'https://best-minecraft-servers.co/server-glitched-realms.28649/vote',
    'https://findmcserver.com/server/gLO6qQfS4v?vote=true',
    'https://minecraftservers.org/vote/673479',
    'https://minecraft-server-list.com/server/511514/vote/',
    'https://gtop100.com/Travian/Dynasties-Travian-104743'
  ];

  if (!isOpen) return null;

  const handleVote = (index) => {
    window.open(VOTE_LINKS[index], '_blank');
  };

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black opacity-75" onClick={onClose}></div>
        
        <div className="relative bg-[#1F1F1F] rounded-lg w-full max-w-4xl p-8">
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 bg-white rounded-full p-2 z-10 hover:bg-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header Image */}
          <div className="-mt-16 mb-8 text-center">
            <LazyLoadImage
              effect="blur"
              src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745680835/Vote_for_our_Servers_fl9nmc.png"
              alt="Vote for our Servers"
              className="max-w-full h-auto mx-auto"
            />
          </div>

          {/* Grid of 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div onClick={() => handleVote(0)} className="cursor-pointer">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745680738/M1_vrhlqh.png"
                alt="Card 1"
                className="w-full h-auto hover:border border-white rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div onClick={() => handleVote(1)} className="cursor-pointer">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745680738/M2_tanjmj.png"
                alt="Card 2"
                className="w-full h-auto rounded-lg hover:border border-white hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div onClick={() => handleVote(2)} className="cursor-pointer">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745680738/M3_f0rvb3.png"
                alt="Card 3"
                className="w-full h-auto rounded-lg hover:border border-white hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div onClick={() => handleVote(3)} className="cursor-pointer">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745680738/M4_nsflur.png"
                alt="Card 4"
                className="w-full h-auto rounded-lg hover:border border-white hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bottom Section with Large Card and Logo */}
          <div className="relative flex justify-center items-center gap-5">
            <div onClick={() => handleVote(4)} className="cursor-pointer">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745680737/m5_efmldj.png"
                alt="Bottom Card"
                className="w-full h-auto rounded-lg hover:border border-white hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Bottom Logo - Positioned on the right */}
            <div className="opacity">
              <LazyLoadImage
                effect="blur"
                src="https://res.cloudinary.com/dsbups4jj/image/upload/v1745681505/2d-1_fov7sw.png"
                alt="Logo"
                className="h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;