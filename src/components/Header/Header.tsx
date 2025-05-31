import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Logo from "@/assets/img/airdrop.png";
import gitHubIcon from "@/assets/img/github-icon.svg";

type HeaderProps = {
  githubUrl: string;
};

export const Header: React.FC<HeaderProps> = ({ githubUrl }) => {
  return (
    <nav className="px-8 py-4.5 flex flex-row justify-between items-center xl:min-h-[77px]">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1">
          <img width="36px" src={Logo.src} alt="App Logo" className="app-logo" />
        </div>
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors border-2 border-zinc-600 hover:border-zinc-500 cursor-alias hidden md:block"
            aria-label="GitHub"
          >
            <img
              width="36"
              src={gitHubIcon.src}
              alt="App Logo"
              className="app-logo"
            />
          </a>
        </div>
      </div>
      <h3 className="italic text-left hidden text-zinc-500 lg:block">The most gas efficient airdrop contract on earth 🐎</h3>
      <div className="flex items-center gap-4">
        <ConnectButton />
      </div>
    </nav>
  );
};
